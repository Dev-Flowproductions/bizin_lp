declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function push(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (window.gtag) {
    window.gtag("event", event, params);
  } else if (window.dataLayer) {
    window.dataLayer.push({ event, ...params });
  }
}

export const track = {
  pageView: () => push("page_view"),
  calculatorViewed: () => push("calculator_viewed"),
  calculatorStarted: () => push("calculator_started"),
  calculatorCompleted: (band: string, score: number) =>
    push("calculator_completed", { eligibility_band: band, score }),
  calculatorResultHigh: () => push("calculator_result_high"),
  calculatorResultMedium: () => push("calculator_result_medium"),
  calculatorResultLow: () => push("calculator_result_low"),
  calculatorCtaClicked: () => push("calculator_cta_clicked"),
  ctaClicked: (location: string) => push("cta_clicked", { location }),
  faqExpanded: (question: string) => push("faq_expanded", { question }),
  scrollDepth: (percent: number) => push("scroll_depth", { percent }),
};
