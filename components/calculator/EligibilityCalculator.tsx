"use client";

import { useState, useEffect, useRef } from "react";
import { calculateEligibility } from "@/lib/calculator-rules";
import { track } from "@/lib/tracking";
import type { CalculatorInput, CalculatorResult } from "@/lib/calculator-types";
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
};

export function EligibilityCalculator({
  calculator,
  bookingUrl,
}: {
  calculator: SiteDictionary["calculator"];
  bookingUrl: string;
}) {
  const steps = calculator.steps;
  const [phase, setPhase] = useState<"idle" | "questions" | "result">("idle");
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [input, setInput] = useState<CalculatorInput>(EMPTY_INPUT);
  const [pendingValue, setPendingValue] = useState<string>("");
  const [result, setResult] = useState<CalculatorResult | null>(null);

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

  function handleStart() {
    setPhase("questions");
    setCurrentStep(0);
    setPendingValue("");
    track.calculatorStarted();
  }

  function handleNext() {
    if (!pendingValue) return;
    const stepDef = steps[currentStep];
    const updated = { ...input, [stepDef.field]: pendingValue };
    setInput(updated);
    setPendingValue("");

    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      const res = calculateEligibility(updated, calculator.eligibility);
      setResult(res);
      setPhase("result");
      track.calculatorCompleted(res.band, res.score);
      if (res.band === "high") track.calculatorResultHigh();
      else if (res.band === "medium") track.calculatorResultMedium();
      else track.calculatorResultLow();
      setTimeout(
        () => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
        100
      );
    }
  }

  function handleBack() {
    if (currentStep === 0) {
      setPhase("idle");
      setPendingValue("");
    } else {
      const prevField = steps[currentStep - 1].field;
      setPendingValue(input[prevField] as string);
      setCurrentStep((s) => s - 1);
    }
  }

  function handleReset() {
    setPhase("idle");
    setCurrentStep(0);
    setInput(EMPTY_INPUT);
    setPendingValue("");
    setResult(null);
  }

  const stepDef = steps[currentStep];
  const progress = ((currentStep + (pendingValue ? 1 : 0)) / steps.length) * 100;
  const stepProgressLabel = fillTemplate(calculator.stepProgress, {
    current: currentStep + 1,
    total: steps.length,
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

          <div className="relative px-8 py-10 md:px-12 md:py-12">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1c2544]/45">
              {idle.eyebrow}
            </p>
            <h3 className="mt-3 text-center text-2xl font-bold leading-tight tracking-tight text-[#1c2544] md:text-[1.75rem]">
              {idle.title}
              <span className="block text-[#1c2544]/85">{idle.titleAccent}</span>
            </h3>
            <p className="mx-auto mt-4 max-w-md text-center text-[15px] leading-relaxed text-gray-600">
              {idle.body}
            </p>

            <div
              className="mx-auto mt-8 flex max-w-xs justify-center gap-2"
              aria-hidden
            >
              {steps.map((_, i) => (
                <div
                  key={i}
                  className="h-1 flex-1 max-w-[3.5rem] rounded-full bg-[#1c2544]/12"
                />
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-gray-400">{idle.durationLine}</p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={handleStart}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1c2544] px-10 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#2a3558] focus:outline-none focus:ring-2 focus:ring-[#1c2544] focus:ring-offset-2 sm:w-auto"
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

  if (phase === "questions") {
    return (
      <div ref={sectionRef} className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="h-1.5 bg-gray-100">
            <div
              className="h-full bg-[#1c2544] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={currentStep + 1}
              aria-valuemin={1}
              aria-valuemax={steps.length}
              aria-label={stepProgressLabel}
            />
          </div>

          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
              {stepProgressLabel}
            </p>

            <span className="sr-only" id="calc-step-heading">
              {stepDef.question}
            </span>
            <p className="block text-xl md:text-2xl font-bold text-[#1c2544] mb-2 leading-snug">
              {stepDef.question}
            </p>
            <p className="text-sm text-gray-500 mb-6">{stepDef.hint}</p>

            <div
              className="grid gap-2 mb-8"
              role="group"
              aria-labelledby="calc-step-heading"
            >
              {Object.entries(stepDef.optionLabels).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  data-calculator-option
                  onClick={() => setPendingValue(key)}
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
                disabled={!pendingValue}
                className="ml-auto inline-flex items-center gap-2 font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1c2544] bg-[#1c2544] text-white hover:bg-[#2a3558] shadow-sm text-base px-8 py-3.5 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {currentStep < steps.length - 1
                  ? calculator.nav.continue
                  : calculator.nav.seeResult}
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
          </div>
        </div>
      </div>
    );
  }

  if (!result) return null;

  const resLabels = calculator.result;

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

          <div className="mb-8">
            <p className="text-xs font-semibold text-[#1c2544] mb-3 uppercase tracking-widest">
              {resLabels.programmesHeading}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {result.programmes.map((p) => (
                <span
                  key={p.name}
                  className="bg-[#f3f9f0] text-[#1c2544] border border-[#1c2544]/10 rounded-full px-3 py-1 text-sm font-medium"
                >
                  {p.name}
                </span>
              ))}
            </div>
            <div className="space-y-2">
              {result.programmes.map((p) => (
                <p key={p.name} className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-medium text-[#1c2544]">{p.name}:</span>{" "}
                  {p.description}
                </p>
              ))}
            </div>
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
            {result.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
