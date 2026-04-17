import type { SiteDictionary } from "@/lib/i18n/types";

export function FinalCta({ dict }: { dict: SiteDictionary }) {
  const { finalCta } = dict;
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c2544] mb-6 leading-tight">
            {finalCta.heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">{finalCta.body}</p>

          <a
            href={finalCta.bookingUrl}
            className="inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1c2544] bg-[#1c2544] text-white hover:bg-[#2a3558] shadow-sm text-lg px-10 py-4"
          >
            {finalCta.cta}
          </a>

          <p className="text-gray-400 text-sm mt-4">{finalCta.microcopy}</p>
        </div>
      </div>
    </section>
  );
}
