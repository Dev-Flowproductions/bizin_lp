import type { EligibilityBand } from "@/lib/calculator-types";

export type AiDiagnosis = {
  executiveSummary: string;
  diagnosis: string;
  programmeDirections: Array<{ title: string; rationale: string }>;
  nextSteps: string[];
  score: number;
  band: EligibilityBand;
};

function clampScore(n: unknown): number {
  const x = typeof n === "number" ? n : Number(n);
  if (!Number.isFinite(x)) return 50;
  return Math.max(0, Math.min(100, Math.round(x)));
}

function normalizeBand(b: unknown, score: number): EligibilityBand {
  if (b === "high" || b === "medium" || b === "low") return b;
  if (score >= 75) return "high";
  if (score >= 50) return "medium";
  return "low";
}

export function extractJsonObject(raw: string): unknown {
  const trimmed = raw.trim();
  const fence = /^```(?:json)?\s*\n?([\s\S]*?)\n?```$/i.exec(trimmed);
  const body = fence ? fence[1].trim() : trimmed;
  return JSON.parse(body);
}

export function parseAiDiagnosis(raw: string): AiDiagnosis {
  const parsed = extractJsonObject(raw) as Record<string, unknown>;
  const score = clampScore(parsed.score);
  const band = normalizeBand(parsed.band, score);

  const programmeDirections = Array.isArray(parsed.programmeDirections)
    ? parsed.programmeDirections
        .map((item) => {
          const o = item as Record<string, unknown>;
          const title = typeof o.title === "string" ? o.title.trim() : "";
          const rationale =
            typeof o.rationale === "string" ? o.rationale.trim() : "";
          if (!title) return null;
          return { title, rationale };
        })
        .filter(Boolean) as AiDiagnosis["programmeDirections"]
    : [];

  const nextSteps = Array.isArray(parsed.nextSteps)
    ? parsed.nextSteps
        .map((s) => (typeof s === "string" ? s.trim() : ""))
        .filter(Boolean)
    : [];

  const executiveSummary =
    typeof parsed.executiveSummary === "string"
      ? parsed.executiveSummary.trim()
      : "";
  const diagnosis =
    typeof parsed.diagnosis === "string" ? parsed.diagnosis.trim() : "";

  return {
    executiveSummary: executiveSummary || diagnosis.slice(0, 400),
    diagnosis: diagnosis || executiveSummary,
    programmeDirections: programmeDirections.slice(0, 5),
    nextSteps: nextSteps.slice(0, 7),
    score,
    band,
  };
}
