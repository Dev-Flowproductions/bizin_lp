import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { BIZIN_PORTUGAL_2030_CONTEXT } from "@/lib/ai/bizin-portugal-context";
import {
  buildEligibilityDiagnosisPrompt,
  heuristicInputFromPayload,
  type DiagnosisAnswersPayload,
} from "@/lib/ai/eligibility-prompt";
import { parseAiDiagnosis } from "@/lib/ai/parse-diagnosis-json";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { calculateEligibility } from "@/lib/calculator-rules";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const MAX_SECTOR_DESC = 600;

function getApiKey(): string | null {
  return (
    process.env.GEMINI_API_KEY ??
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ??
    null
  );
}

/**
 * Gemini 3.1 Flash-Lite (preview) — the Gemini API text model for the 3.1 Flash tier
 * (there is no separate `gemini-3.1-flash` id on the API today). Override with GEMINI_MODEL
 * (e.g. `gemini-3-flash-preview` for Gemini 3 Flash).
 */
const DEFAULT_MODEL = "gemini-3.1-flash-lite-preview";

export async function POST(request: Request) {
  const apiKey = getApiKey();
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing GEMINI_API_KEY (or GOOGLE_GENERATIVE_AI_API_KEY)." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const localeRaw = typeof b.locale === "string" ? b.locale : "";
  if (!isLocale(localeRaw)) {
    return NextResponse.json({ error: "Invalid locale." }, { status: 400 });
  }
  const locale = localeRaw as Locale;

  const answers = b.answers as DiagnosisAnswersPayload | undefined;
  if (!answers || typeof answers !== "object") {
    return NextResponse.json({ error: "Missing answers." }, { status: 400 });
  }

  const required = [
    "sectorKey",
    "sectorLabel",
    "employeesKey",
    "employeesLabel",
    "regionKey",
    "regionLabel",
    "investmentKey",
    "investmentLabel",
  ] as const;
  for (const k of required) {
    if (typeof answers[k] !== "string" || !(answers[k] as string).trim()) {
      return NextResponse.json({ error: `Invalid field: ${k}` }, { status: 400 });
    }
  }

  if (answers.sectorKey === "outro") {
    const desc =
      typeof answers.sectorDescription === "string"
        ? answers.sectorDescription.trim()
        : "";
    if (desc.length < 3) {
      return NextResponse.json(
        { error: "sectorDescription required for sector 'outro'." },
        { status: 400 }
      );
    }
    if (desc.length > MAX_SECTOR_DESC) {
      return NextResponse.json({ error: "sectorDescription too long." }, { status: 400 });
    }
  }

  const dict = getDictionary(locale);
  const heuristicInput = heuristicInputFromPayload(answers);
  const heuristic = calculateEligibility(heuristicInput, dict.calculator.eligibility);

  const modelId = process.env.GEMINI_MODEL?.trim() || DEFAULT_MODEL;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: modelId,
    generationConfig: {
      temperature: 0.55,
      maxOutputTokens: 4096,
      responseMimeType: "application/json",
    },
  });

  const userPrompt = buildEligibilityDiagnosisPrompt(locale, answers, {
    score: heuristic.score,
    band: heuristic.band,
  });

  const fullPrompt = `${BIZIN_PORTUGAL_2030_CONTEXT}\n\n---\n\n${userPrompt}`;

  try {
    const result = await model.generateContent(fullPrompt);
    const text = result.response.text();
    const diagnosis = parseAiDiagnosis(text);
    return NextResponse.json({ diagnosis, disclaimer: dict.calculator.eligibility.disclaimer });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Generation failed.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
