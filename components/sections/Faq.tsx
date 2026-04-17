"use client";

import { useState } from "react";
import type { SiteDictionary } from "@/lib/i18n/types";
import { track } from "@/lib/tracking";

export function Faq({ dict }: { dict: SiteDictionary }) {
  const { faq } = dict;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number, question: string) {
    if (openIndex !== i) track.faqExpanded(question);
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c2544] mb-12 text-center leading-tight">
            {faq.heading}
          </h2>

          <div className="space-y-3">
            {faq.items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(i, item.question)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c2544] focus-visible:ring-inset"
                >
                  <span className="text-[#1c2544] font-semibold leading-snug">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === i && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
