import type { FAQItem } from "./i18n/types";

export function buildFaqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildWebPageSchema(params: {
  title: string;
  description: string;
  url: string;
  inLanguage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: params.title,
    description: params.description,
    url: params.url,
    inLanguage: params.inLanguage,
    publisher: {
      "@type": "Organization",
      name: "Bizin Portugal",
      url: "https://www.bizinportugal.com",
    },
  };
}

/** GEO / brand signals for answer engines */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bizin Portugal",
    url: "https://www.bizinportugal.com",
    logo: "https://www.bizinportugal.com/logo.svg",
    sameAs: ["https://www.bizinportugal.com"],
    areaServed: {
      "@type": "Country",
      name: "Portugal",
    },
    knowsAbout: [
      "Portugal 2030",
      "European structural funds",
      "Investment incentives Portugal",
    ],
    availableLanguage: ["pt-PT", "en-GB", "fr-FR", "es-ES"],
  };
}
