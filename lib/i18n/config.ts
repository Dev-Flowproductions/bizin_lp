export const locales = ["pt", "en", "fr", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeHtmlLang: Record<Locale, string> = {
  pt: "pt-PT",
  en: "en-GB",
  fr: "fr-FR",
  es: "es-ES",
};

/** hreflang → URL path segment (same as Locale for this site) */
export const hreflangToPath: Record<string, Locale> = {
  "pt-PT": "pt",
  "en-GB": "en",
  "fr-FR": "fr",
  "es-ES": "es",
};

export const languageMenu: Array<{
  locale: Locale;
  /** Label on main site style selector */
  label: string;
  /** Shown on closed button (uppercase on Bizin) */
  compactLabel: string;
}> = [
  { locale: "pt", label: "Português", compactLabel: "Português" },
  { locale: "en", label: "English", compactLabel: "English" },
  { locale: "fr", label: "Français", compactLabel: "Français" },
  { locale: "es", label: "Español", compactLabel: "Español" },
];

export function isLocale(s: string): s is Locale {
  return locales.includes(s as Locale);
}
