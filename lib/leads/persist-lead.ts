export type LeadContact = {
  name: string;
  email: string;
  phone: string;
};

/** Persist lead (webhook if configured, always log structured payload). */
export async function persistCalculatorLead(payload: {
  locale: string;
  contact: LeadContact;
  answers: Record<string, unknown>;
}): Promise<void> {
  const webhook = process.env.LEAD_WEBHOOK_URL?.trim();
  const body = JSON.stringify({
    source: "bizin_lp_calculator",
    ...payload,
    capturedAt: new Date().toISOString(),
  });

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    if (!res.ok) {
      console.error("[lead] webhook failed", res.status);
    }
  }

  console.info("[lead] calculator", body);
}

export function validateLeadContact(
  contact: unknown
): { ok: true; data: LeadContact } | { ok: false; error: string } {
  if (!contact || typeof contact !== "object") {
    return { ok: false, error: "Missing contact." };
  }
  const c = contact as Record<string, unknown>;
  const name = typeof c.name === "string" ? c.name.trim() : "";
  const email = typeof c.email === "string" ? c.email.trim() : "";
  const phone = typeof c.phone === "string" ? c.phone.trim() : "";

  if (name.length < 2) return { ok: false, error: "Invalid name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Invalid email." };
  }
  if (phone.replace(/\D/g, "").length < 9) {
    return { ok: false, error: "Invalid phone." };
  }

  return { ok: true, data: { name, email, phone } };
}
