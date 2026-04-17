import type { Locale } from "./config";
import type { Programme } from "@/lib/calculator-types";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrustMetric {
  value: string;
  label: string;
  visible: boolean;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface CalculatorStepDef {
  field: "sector" | "employees" | "region" | "investment";
  question: string;
  hint: string;
  /** Keys match calculator value keys (sector keys, employee bands, etc.) */
  optionLabels: Record<string, string>;
}

export interface EligibilityCopy {
  disclaimer: string;
  programmeSuggestions: Record<string, Programme[]> & { default: Programme[] };
  nextSteps: Record<"high" | "medium" | "low", string[]>;
}

export interface SiteDictionary {
  locale: Locale;
  htmlLang: string;
  seo: {
    title: string;
    description: string;
    ogLocale: string;
  };
  nav: {
    logoUrl: string;
    logoAlt: string;
    logoAriaHome: string;
    cta: string;
    bookingUrl: string;
    languageMenuAria: string;
  };
  hero: {
    heading: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    bookingUrl: string;
    imageUrl: string;
    imageAlt: string;
  };
  trustMetrics: TrustMetric[];
  problem: { heading: string; body: string };
  solution: {
    eyebrow: string;
    heading: string;
    body: string;
    bullets: string[];
  };
  calculatorSection: { heading: string; subheading: string };
  calculator: {
    eligibility: EligibilityCopy;
    steps: CalculatorStepDef[];
    idle: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      body: string;
      durationLine: string;
      cta: string;
    };
    result: {
      scoreLabel: string;
      programmesHeading: string;
      nextStepsHeading: string;
      ctaBooking: string;
      restart: string;
    };
    bands: Record<"high" | "medium" | "low", string>;
    nav: { back: string; continue: string; seeResult: string };
    /** e.g. "Step {current} of {total}" — use fillTemplate */
    stepProgress: string;
  };
  howItWorks: { heading: string; steps: Step[] };
  proof: {
    heading: string;
    stats: TrustMetric[];
    quote: string;
    quoteAttribution: string;
  };
  faq: { heading: string; items: FAQItem[] };
  finalCta: {
    heading: string;
    body: string;
    cta: string;
    microcopy: string;
    bookingUrl: string;
  };
}
