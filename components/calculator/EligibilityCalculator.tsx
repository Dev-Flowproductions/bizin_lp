"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { track } from "@/lib/tracking";
import type { DiagnosisAnswersPayload } from "@/lib/ai/eligibility-prompt";
import type { AiDiagnosis } from "@/lib/ai/parse-diagnosis-json";
import type { CalculatorInput } from "@/lib/calculator-types";
import type { Locale } from "@/lib/i18n/config";
import type { SiteDictionary } from "@/lib/i18n/types";
import { fillTemplate } from "@/lib/i18n/format";

const BAND_COLORS = {
  high: {
    bar: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  medium: {
    bar: "bg-amber-500",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
  },
  low: {
    bar: "bg-rose-400",
    badge: "bg-rose-50 text-rose-700 border-rose-200",
  },
} as const;

const EMPTY_INPUT: CalculatorInput = {
  sector: "",
  employees: "",
  region: "",
  investment: "",
  investmentType: "",
};

const EMPTY_CONTACT = { name: "", email: "", phone: "" };

function buildAnswersPayload(
  finalInput: CalculatorInput,
  steps: SiteDictionary["calculator"]["steps"],
  sectorOtherText: string
): DiagnosisAnswersPayload {
  const sectorStep = steps.find((s) => s.field === "sector")!;
  const empStep = steps.find((s) => s.field === "employees")!;
  const regionStep = steps.find((s) => s.field === "region")!;
  const invStep = steps.find((s) => s.field === "investment")!;
  const typeStep = steps.find((s) => s.field === "investmentType")!;
  const sk = finalInput.sector;
  const sectorLabel = sectorStep.optionLabels[sk] ?? sk;
  return {
    sectorKey: sk,
    sectorLabel,
    sectorDescription:
      sk === "outro" ? sectorOtherText.trim() : undefined,
    employeesKey: finalInput.employees,
    employeesLabel: empStep.optionLabels[finalInput.employees] ?? finalInput.employees,
    regionKey: finalInput.region,
    regionLabel: regionStep.optionLabels[finalInput.region] ?? finalInput.region,
    investmentKey: finalInput.investment,
    investmentLabel: invStep.optionLabels[finalInput.investment] ?? finalInput.investment,
    investmentTypeKey: finalInput.investmentType,
    investmentTypeLabel:
      typeStep.optionLabels[finalInput.investmentType] ?? finalInput.investmentType,
  };
}

function validateLeadForm(
  contact: typeof EMPTY_CONTACT,
  lead: SiteDictionary["calculator"]["lead"]
): Partial<Record<keyof typeof EMPTY_CONTACT, string>> {
  const errors: Partial<Record<keyof typeof EMPTY_CONTACT, string>> = {};
  if (contact.name.trim().length < 2) errors.name = lead.nameRequired;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim())) {
    errors.email = lead.emailInvalid;
  }
  if (contact.phone.replace(/\D/g, "").length < 9) {
    errors.phone = lead.phoneRequired;
  }
  return errors;
}

export function EligibilityCalculator({
  calculator,
  bookingUrl,
  locale,
}: {
  calculator: SiteDictionary["calculator"];
  bookingUrl: string;
  locale: Locale;
}) {
  const steps = calculator.steps;
  const ai = calculator.ai;
  const lead = calculator.lead;
  const totalSteps = steps.length + 1;
  const [phase, setPhase] = useState<
    "idle" | "questions" | "lead" | "generating" | "result"
  >("idle");
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [input, setInput] = useState<CalculatorInput>(EMPTY_INPUT);
  const [pendingValue, setPendingValue] = useState<string>("");
  const [sectorOtherText, setSectorOtherText] = useState("");
  const [contact, setContact] = useState(EMPTY_CONTACT);
  const [leadErrors, setLeadErrors] = useState<
    Partial<Record<keyof typeof EMPTY_CONTACT, string>>
  >({});
  const [aiDiagnosis, setAiDiagnosis] = useState<AiDiagnosis | null>(null);
  const [resultDisclaimer, setResultDisclaimer] = useState<string | null>(null);
  const [generationError, setGenerationError] = useState<string | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track.calculatorViewed();
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (phase === "questions") {
      const first = document.querySelector<HTMLButtonElement>(
        "[data-calculator-option]"
      );
      first?.focus();
    }
  }, [phase, currentStep]);

  const submitDiagnosis = useCallback(
    async (
      finalInput: CalculatorInput,
      otherSector: string,
      leadContact: typeof EMPTY_CONTACT
    ) => {
      setPhase("generating");
      setGenerationError(null);
      const answers = buildAnswersPayload(finalInput, steps, otherSector);
      try {
        const res = await fetch("/api/eligibility-diagnosis", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            locale,
            answers,
            contact: {
              name: leadContact.name.trim(),
              email: leadContact.email.trim(),
              phone: leadContact.phone.trim(),
            },
          }),
        });
        const data = (await res.json()) as {
          diagnosis?: AiDiagnosis;
          disclaimer?: string;
          error?: string;
        };
        if (!res.ok) {
          throw new Error(
            typeof data.error === "string" ? data.error : ai.errorGeneric
          );
        }
        if (!data.diagnosis) {
          throw new Error(ai.errorGeneric);
        }
        setAiDiagnosis(data.diagnosis);
        setResultDisclaimer(
          data.disclaimer ?? calculator.eligibility.disclaimer
        );
        setPhase("result");
        track.calculatorCompleted(data.diagnosis.band, data.diagnosis.score);
        if (data.diagnosis.band === "high") track.calculatorResultHigh();
        else if (data.diagnosis.band === "medium") track.calculatorResultMedium();
        else track.calculatorResultLow();
        setTimeout(
          () =>
            resultRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            }),
          100
        );
      } catch (e) {
        const msg = e instanceof Error ? e.message : ai.errorGeneric;
        setGenerationError(msg);
        setPhase("lead");
      }
    },
    [
      ai.errorGeneric,
      calculator.eligibility.disclaimer,
      locale,
      steps,
    ]
  );

  function handleLeadSubmit() {
    const errors = validateLeadForm(contact, lead);
    setLeadErrors(errors);
    if (Object.keys(errors).length > 0) return;
    void submitDiagnosis(input, sectorOtherText, contact);
  }

  function handleStart() {
    setPhase("questions");
    setCurrentStep(0);
    setPendingValue("");
    setSectorOtherText("");
    setContact(EMPTY_CONTACT);
    setLeadErrors({});
    setAiDiagnosis(null);
    setResultDisclaimer(null);
    setGenerationError(null);
    track.calculatorStarted();
  }

  const stepDef = steps[currentStep];
  const isSectorOther =
    phase === "questions" &&
    currentStep === 0 &&
    stepDef.field === "sector" &&
    pendingValue === "outro";
  const sectorOtherOk = !isSectorOther || sectorOtherText.trim().length >= 3;
  const canProceed = Boolean(pendingValue) && sectorOtherOk;

  function handleNext() {
    if (!canProceed) return;
    const valueToCommit = pendingValue;
    const updated = { ...input, [stepDef.field]: valueToCommit } as CalculatorInput;

    if (currentStep < steps.length - 1) {
      setInput(updated);
      setPendingValue("");
      setCurrentStep((s) => s + 1);
      return;
    }

    setInput(updated);
    setPendingValue("");
    setPhase("lead");
  }

  function handleBack() {
    setGenerationError(null);
    if (phase === "lead") {
      setPhase("questions");
      setCurrentStep(steps.length - 1);
      setPendingValue(input[steps[steps.length - 1].field] as string);
      return;
    }
    if (currentStep === 0) {
      setPhase("idle");
      setPendingValue("");
      return;
    }
    const prevField = steps[currentStep - 1].field;
    setPendingValue(input[prevField] as string);
    setCurrentStep((s) => s - 1);
  }

  function handleReset() {
    setPhase("idle");
    setCurrentStep(0);
    setInput(EMPTY_INPUT);
    setPendingValue("");
    setSectorOtherText("");
    setContact(EMPTY_CONTACT);
    setLeadErrors({});
    setAiDiagnosis(null);
    setResultDisclaimer(null);
    setGenerationError(null);
  }

  function selectOption(key: string) {
    setPendingValue(key);
    if (key !== "outro") setSectorOtherText("");
  }

  const progress =
    phase === "generating" || phase === "result"
      ? 100
      : phase === "lead"
        ? (totalSteps / totalSteps) * 100
        : ((currentStep + (pendingValue ? 1 : 0)) / totalSteps) * 100;
  const stepProgressLabel =
    phase === "lead"
      ? fillTemplate(calculator.stepProgress, {
          current: totalSteps,
          total: totalSteps,
        })
      : fillTemplate(calculator.stepProgress, {
          current: currentStep + 1,
          total: totalSteps,
        });

  if (phase === "idle") {
    const idle = calculator.idle;
    return (
      <div ref={sectionRef} className="max-w-2xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-[#1c2544]/[0.08] bg-white shadow-[0_20px_50px_-12px_rgba(28,37,68,0.15)]">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(28,37,68,0.06),transparent_55%)]"
            aria-hidden
          />
          <div
            className="h-1 w-full bg-[linear-gradient(90deg,#1c2544_0%,#2a3558_45%,#1c2544_100%)]"
            aria-hidden
          />

          <div className="relative px-6 py-8 md:px-10 md:py-9">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1c2544]/45">
              {idle.eyebrow}
            </p>
            <h3 className="mt-2 text-center text-xl font-bold leading-tight tracking-tight text-[#1c2544] md:text-2xl">
              {idle.title}
              <span className="block text-[#1c2544]/85">{idle.titleAccent}</span>
            </h3>
            <p className="mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-gray-600">
              {idle.body}
            </p>

            <div
              className="mx-auto mt-5 flex max-w-xs justify-center gap-2"
              aria-hidden
            >
              {steps.map((_, i) => (
                <div
                  key={i}
                  className="h-1 flex-1 max-w-[3.5rem] rounded-full bg-[#1c2544]/12"
                />
              ))}
            </div>
            <p className="mt-2 text-center text-xs text-gray-400">{idle.durationLine}</p>

            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={handleStart}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1c2544] px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#2a3558] focus:outline-none focus:ring-2 focus:ring-[#1c2544] focus:ring-offset-2 sm:w-auto"
              >
                {idle.cta}
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "questions" || phase === "lead" || phase === "generating") {
    return (
      <div ref={sectionRef} className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="h-1.5 bg-gray-100">
            <div
              className="h-full bg-[#1c2544] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={
                phase === "lead" ? totalSteps : currentStep + 1
              }
              aria-valuemin={1}
              aria-valuemax={totalSteps}
              aria-label={stepProgressLabel}
            />
          </div>

          <div className="p-6 md:p-8">
            {phase === "generating" ? (
              <div className="py-6 text-center">
                <div
                  className="mx-auto mb-6 h-10 w-10 animate-spin rounded-full border-2 border-[#1c2544]/20 border-t-[#1c2544]"
                  aria-hidden
                />
                <p className="text-lg font-bold text-[#1c2544]">{ai.generatingTitle}</p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600">
                  {ai.generatingBody}
                </p>
              </div>
            ) : phase === "lead" ? (
              <>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  {stepProgressLabel}
                </p>

                {generationError ? (
                  <div
                    className="mb-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900"
                    role="alert"
                  >
                    <p className="font-semibold">{ai.errorTitle}</p>
                    <p className="mt-1 text-rose-800/90">{generationError}</p>
                  </div>
                ) : null}

                <h3 className="text-xl md:text-2xl font-bold text-[#1c2544] mb-2">
                  {lead.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6">{lead.subtitle}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <label
                      htmlFor="calc-lead-name"
                      className="block text-sm font-semibold text-[#1c2544] mb-1.5"
                    >
                      {lead.nameLabel}
                    </label>
                    <input
                      id="calc-lead-name"
                      type="text"
                      autoComplete="name"
                      value={contact.name}
                      onChange={(ev) =>
                        setContact((c) => ({ ...c, name: ev.target.value }))
                      }
                      placeholder={lead.namePlaceholder}
                      className="w-full rounded-2xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-[#1c2544] placeholder:text-gray-400 focus:border-[#1c2544] focus:outline-none focus:ring-2 focus:ring-[#1c2544]/20"
                    />
                    {leadErrors.name ? (
                      <p className="mt-1 text-xs text-amber-700">{leadErrors.name}</p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="calc-lead-email"
                      className="block text-sm font-semibold text-[#1c2544] mb-1.5"
                    >
                      {lead.emailLabel}
                    </label>
                    <input
                      id="calc-lead-email"
                      type="email"
                      autoComplete="email"
                      value={contact.email}
                      onChange={(ev) =>
                        setContact((c) => ({ ...c, email: ev.target.value }))
                      }
                      placeholder={lead.emailPlaceholder}
                      className="w-full rounded-2xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-[#1c2544] placeholder:text-gray-400 focus:border-[#1c2544] focus:outline-none focus:ring-2 focus:ring-[#1c2544]/20"
                    />
                    {leadErrors.email ? (
                      <p className="mt-1 text-xs text-amber-700">{leadErrors.email}</p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="calc-lead-phone"
                      className="block text-sm font-semibold text-[#1c2544] mb-1.5"
                    >
                      {lead.phoneLabel}
                    </label>
                    <input
                      id="calc-lead-phone"
                      type="tel"
                      autoComplete="tel"
                      value={contact.phone}
                      onChange={(ev) =>
                        setContact((c) => ({ ...c, phone: ev.target.value }))
                      }
                      placeholder={lead.phonePlaceholder}
                      className="w-full rounded-2xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-[#1c2544] placeholder:text-gray-400 focus:border-[#1c2544] focus:outline-none focus:ring-2 focus:ring-[#1c2544]/20"
                    />
                    {leadErrors.phone ? (
                      <p className="mt-1 text-xs text-amber-700">{leadErrors.phone}</p>
                    ) : null}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#1c2544] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c2544] rounded-full px-3 py-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    {calculator.nav.back}
                  </button>
                  <button
                    type="button"
                    onClick={handleLeadSubmit}
                    className="ml-auto inline-flex items-center gap-2 font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1c2544] bg-[#1c2544] text-white hover:bg-[#2a3558] shadow-sm text-base px-8 py-3.5"
                  >
                    {lead.submit}
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                  {stepProgressLabel}
                </p>

                {generationError ? (
                  <div
                    className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900"
                    role="alert"
                  >
                    <p className="font-semibold">{ai.errorTitle}</p>
                    <p className="mt-1 text-rose-800/90">{generationError}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setGenerationError(null);
                        void submitDiagnosis(input, sectorOtherText, contact);
                      }}
                      className="mt-3 text-sm font-semibold text-[#1c2544] underline underline-offset-2 hover:text-[#2a3558]"
                    >
                      {ai.retry}
                    </button>
                  </div>
                ) : null}

                <span className="sr-only" id="calc-step-heading">
                  {stepDef.question}
                </span>
                <p className="block text-xl md:text-2xl font-bold text-[#1c2544] mb-2 leading-snug">
                  {stepDef.question}
                </p>
                <p className="text-sm text-gray-500 mb-6">{stepDef.hint}</p>

                <div
                  className={`grid gap-2 ${isSectorOther ? "mb-3" : "mb-8"}`}
                  role="group"
                  aria-labelledby="calc-step-heading"
                >
                  {Object.entries(stepDef.optionLabels).map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      data-calculator-option
                      onClick={() => selectOption(key)}
                      className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-150 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c2544] focus-visible:ring-offset-2 ${
                        pendingValue === key
                          ? "border-[#1c2544] bg-[#1c2544] text-white shadow-md"
                          : "border-gray-200 bg-gray-50 text-[#1c2544] hover:border-[#1c2544]/40 hover:bg-gray-100"
                      }`}
                      aria-pressed={pendingValue === key}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {isSectorOther ? (
                  <div className="mb-6">
                    <label
                      htmlFor="calc-sector-other"
                      className="block text-sm font-semibold text-[#1c2544] mb-2"
                    >
                      {ai.otherSectorLabel}
                    </label>
                    <textarea
                      id="calc-sector-other"
                      value={sectorOtherText}
                      onChange={(ev) => setSectorOtherText(ev.target.value)}
                      placeholder={ai.otherSectorPlaceholder}
                      rows={3}
                      maxLength={600}
                      aria-invalid={!sectorOtherOk}
                      aria-describedby="calc-sector-other-hint"
                      className="w-full rounded-2xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-[#1c2544] placeholder:text-gray-400 focus:border-[#1c2544] focus:outline-none focus:ring-2 focus:ring-[#1c2544]/20"
                    />
                    <p
                      id="calc-sector-other-hint"
                      className="mt-2 text-xs text-gray-500"
                    >
                      {ai.otherSectorHint}
                    </p>
                    {!sectorOtherOk && pendingValue === "outro" ? (
                      <p className="mt-2 text-xs text-amber-700" role="status">
                        {ai.otherSectorRequired}
                      </p>
                    ) : null}
                  </div>
                ) : null}

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#1c2544] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c2544] rounded-full px-3 py-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    {calculator.nav.back}
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceed}
                    className="ml-auto inline-flex items-center gap-2 font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1c2544] bg-[#1c2544] text-white hover:bg-[#2a3558] shadow-sm text-base px-8 py-3.5 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {currentStep < steps.length - 1
                      ? calculator.nav.continue
                      : calculator.nav.continue}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (!aiDiagnosis) return null;

  const resLabels = calculator.result;
  const result = aiDiagnosis;

  return (
    <div ref={sectionRef} className="max-w-2xl mx-auto">
      <div
        ref={resultRef}
        className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden scroll-mt-28"
        role="region"
        aria-live="polite"
        aria-label={resLabels.scoreLabel}
      >
        <div className="p-8 md:p-12">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <p className="text-sm text-gray-500 mb-1">{resLabels.scoreLabel}</p>
              <p className="text-5xl font-bold text-[#1c2544]">
                {result.score}
                <span className="text-2xl text-gray-400">/100</span>
              </p>
            </div>
            <span
              className={`inline-block border rounded-full px-3 py-1 text-sm font-semibold ${
                BAND_COLORS[result.band].badge
              }`}
            >
              {calculator.bands[result.band]}
            </span>
          </div>

          <div className="h-3 rounded-full bg-gray-100 overflow-hidden mb-8">
            <div
              className={`h-full rounded-full transition-all duration-700 ${BAND_COLORS[result.band].bar}`}
              style={{ width: `${result.score}%` }}
              role="progressbar"
              aria-valuenow={result.score}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>

          {result.executiveSummary ? (
            <div className="mb-8">
              <p className="text-xs font-semibold text-[#1c2544] mb-2 uppercase tracking-widest">
                {ai.executiveSummaryHeading}
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                {result.executiveSummary}
              </p>
            </div>
          ) : null}

          <div className="mb-8">
            <p className="text-xs font-semibold text-[#1c2544] mb-3 uppercase tracking-widest">
              {ai.diagnosisHeading}
            </p>
            <div className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
              {result.diagnosis}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-xs font-semibold text-[#1c2544] mb-3 uppercase tracking-widest">
              {ai.programmeDirectionsHeading}
            </p>
            <ul className="space-y-4">
              {result.programmeDirections.map((p) => (
                <li
                  key={p.title}
                  className="rounded-2xl border border-[#1c2544]/10 bg-[#f3f9f0]/60 px-4 py-3"
                >
                  <p className="font-semibold text-[#1c2544]">{p.title}</p>
                  {p.rationale ? (
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      {p.rationale}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <p className="text-xs font-semibold text-[#1c2544] mb-3 uppercase tracking-widest">
              {resLabels.nextStepsHeading}
            </p>
            <ol className="space-y-3">
              {result.nextSteps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1c2544] text-white text-xs flex items-center justify-center font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                </li>
              ))}
            </ol>
          </div>

          <a
            href={bookingUrl}
            onClick={() => track.calculatorCtaClicked()}
            className="w-full inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1c2544] bg-[#1c2544] text-white hover:bg-[#2a3558] shadow-sm text-base px-8 py-4"
          >
            {resLabels.ctaBooking}
          </a>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={handleReset}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c2544] rounded"
            >
              {resLabels.restart}
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-4 leading-relaxed text-center">
            {resultDisclaimer ?? calculator.eligibility.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
