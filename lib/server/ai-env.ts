import { loadEnvConfig } from "@next/env";

let localEnvLoaded = false;

function normalizeEnvValue(raw: string | undefined): string | null {
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim().replace(/^["']|["']$/g, "");
  return trimmed || null;
}

/** True when running on Vercel (production, preview, or `vercel dev`). */
function isVercelRuntime(): boolean {
  return process.env.VERCEL === "1";
}

/**
 * Load .env* files for local `next dev` only.
 * On Vercel, env vars are injected by the platform; calling loadEnvConfig there can
 * reset process.env from a stale snapshot and hide runtime secrets.
 */
function ensureLocalEnvLoaded() {
  if (localEnvLoaded || isVercelRuntime()) return;
  loadEnvConfig(process.cwd());
  localEnvLoaded = true;
}

/**
 * Literal env keys — required so Next/Turbopack does not inline secrets at build time
 * (empty on Vercel build → missing key in production).
 */
function readOpenAiKeyFromProcess(): string | undefined {
  return process.env["OPENAI_API_KEY"];
}

function readOpenAiModelFromProcess(): string | undefined {
  return process.env["OPENAI_MODEL"];
}

/** OpenAI key for eligibility diagnosis (server-only). */
export function getOpenAiApiKey(): string | null {
  ensureLocalEnvLoaded();
  return normalizeEnvValue(readOpenAiKeyFromProcess());
}

export function getOpenAiModel(defaultModel: string): string {
  ensureLocalEnvLoaded();
  return normalizeEnvValue(readOpenAiModelFromProcess()) ?? defaultModel;
}

/** User-facing hint when the key is missing. */
export function openAiKeyMissingHint(): string {
  if (isVercelRuntime()) {
    return (
      " On Vercel: Project → Settings → Environment Variables → add OPENAI_API_KEY " +
      "for Production and Preview (not only Development), then redeploy."
    );
  }
  return " Restart npm run dev after editing .env.local.";
}
