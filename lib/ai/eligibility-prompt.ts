import type { Locale } from "@/lib/i18n/config";
import type { CalculatorInput } from "@/lib/calculator-types";

export type DiagnosisAnswersPayload = {
  sectorKey: string;
  sectorLabel: string;
  /** Free text when sectorKey is "outro" */
  sectorDescription?: string;
  employeesKey: string;
  employeesLabel: string;
  regionKey: string;
  regionLabel: string;
  investmentKey: string;
  investmentLabel: string;
};

const LOCALE_NAMES: Record<Locale, string> = {
  pt: "European Portuguese (Portugal)",
  en: "British English",
  fr: "French",
  es: "Spanish (Spain)",
};

export function buildEligibilityDiagnosisPrompt(
  locale: Locale,
  answers: DiagnosisAnswersPayload,
  heuristic: { score: number; band: string }
): string {
  const sectorLine =
    answers.sectorKey === "outro" && answers.sectorDescription?.trim()
      ? `Sector (other — user description): ${answers.sectorDescription.trim()}`
      : `Sector: ${answers.sectorLabel} (key: ${answers.sectorKey})`;

  return `
${LOCALE_NAMES[locale]} — write EVERY user-facing string in this language only.

${sectorLine}
Company size: ${answers.employeesLabel} (key: ${answers.employeesKey})
Investment location (NUTS-style region): ${answers.regionLabel} (key: ${answers.regionKey})
Estimated investment band: ${answers.investmentLabel} (key: ${answers.investmentKey})

Internal heuristic (rule-based, not official — use as a soft prior, you may adjust after reasoning): score ${heuristic.score}/100, band ${heuristic.band}.

Task:
1. Read the answers and, if sector is "other", interpret the user's free-text sector realistically for Portugal 2030–type programmes.
2. Produce a clear, personalised diagnosis: strengths, caveats, and what is still uncertain.
3. Suggest 2–4 programme *directions* (thematic axes or instrument families), not guaranteed grants — each with a short rationale tied to their answers.
4. Give 3–5 concrete next steps, including engaging Bizin Portugal for a proper diagnostic where appropriate.

Respond with JSON ONLY (no markdown), exactly this shape:
{
  "executiveSummary": "string, max 450 characters",
  "diagnosis": "string, 2–5 short paragraphs, plain text with \\n for newlines",
  "programmeDirections": [
    { "title": "string", "rationale": "string" }
  ],
  "nextSteps": ["string"],
  "score": 0-100 integer aligned with your reasoning,
  "band": "high" | "medium" | "low"
}
`.trim();
}

export function heuristicInputFromPayload(
  answers: DiagnosisAnswersPayload
): CalculatorInput {
  return {
    sector: answers.sectorKey as CalculatorInput["sector"],
    employees: answers.employeesKey as CalculatorInput["employees"],
    region: answers.regionKey as CalculatorInput["region"],
    investment: answers.investmentKey as CalculatorInput["investment"],
  };
}
