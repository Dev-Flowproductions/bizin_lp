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
import {
  getOpenAiApiKey,
  getOpenAiModel,
  openAiKeyMissingHint,
} from "@/lib/server/ai-env";

const MAX_SECTOR_DESC = 600;

/** Temporary: OpenAI instead of Gemini. Override with OPENAI_MODEL. */
const DEFAULT_MODEL = "gpt-5.5";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const apiKey = getOpenAiApiKey();
  if (!apiKey) {
    return NextResponse.json(
      { error: `Missing OPENAI_API_KEY.${openAiKeyMissingHint()}` },
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

  const modelId = getOpenAiModel(DEFAULT_MODEL);
  const userPrompt = buildEligibilityDiagnosisPrompt(locale, answers, {
    score: heuristic.score,
    band: heuristic.band,
  });

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: modelId,
        messages: [
          { role: "system", content: BIZIN_PORTUGAL_2030_CONTEXT },
          { role: "user", content: userPrompt },
        ],
        // gpt-5.5 only supports the default temperature (1); do not set temperature.
        max_completion_tokens: 4096,
        response_format: { type: "json_object" },
      }),
    });

    const data = (await res.json()) as {
      choices?: Array<{ message?: { content?: string | null } }>;
      error?: { message?: string };
    };

    if (!res.ok) {
      const message =
        typeof data.error?.message === "string"
          ? data.error.message
          : `OpenAI request failed (${res.status}).`;
      return NextResponse.json({ error: message }, { status: 502 });
    }

    const text = data.choices?.[0]?.message?.content;
    if (!text?.trim()) {
      return NextResponse.json(
        { error: "Empty response from OpenAI." },
        { status: 502 }
      );
    }

    const diagnosis = parseAiDiagnosis(text);
    return NextResponse.json({
      diagnosis,
      disclaimer: dict.calculator.eligibility.disclaimer,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Generation failed.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
