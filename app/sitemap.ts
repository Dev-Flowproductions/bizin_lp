import { locales } from "@/lib/i18n/config";
import { getSiteUrl } from "@/lib/i18n/site";

export default function sitemap() {
  const base = getSiteUrl();
  return locales.map((lang) => ({
    url: `${base}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));
}
