import type { Locale } from "./config";
import { defaultLocale, isLocale } from "./config";
import type { SiteDictionary } from "./types";
import { en } from "./messages/en";
import { es } from "./messages/es";
import { fr } from "./messages/fr";
import { pt } from "./messages/pt";

const dictionaries: Record<Locale, SiteDictionary> = {
  pt,
  en,
  fr,
  es,
};

export function getDictionary(locale: string): SiteDictionary {
  const l = isLocale(locale) ? locale : defaultLocale;
  return dictionaries[l];
}
