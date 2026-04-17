import type { SiteDictionary } from "@/lib/i18n/types";

export function Hero({ dict }: { dict: SiteDictionary }) {
  const { hero, trustMetrics } = dict;
  const visibleMetrics = trustMetrics.filter((m) => m.visible);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] bg-gray-50 overflow-hidden pt-[88px] md:pt-[96px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c2544] mb-6 leading-tight tracking-tight">
              {hero.heading}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {hero.subheading}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
              <a
                href="#calculadora"
                className="flex w-full min-h-[3.25rem] flex-1 items-center justify-center px-6 py-4 text-center text-balance text-lg font-medium leading-snug text-white shadow-sm transition-all duration-200 rounded-full bg-[#1c2544] hover:bg-[#2a3558] focus:outline-none focus:ring-2 focus:ring-[#1c2544] focus:ring-offset-2 sm:min-h-[3.5rem] sm:px-8"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href={hero.bookingUrl}
                className="flex w-full min-h-[3.25rem] flex-1 items-center justify-center border border-[#1c2544] bg-white px-6 py-4 text-center text-balance text-lg font-medium leading-snug text-[#1c2544] shadow-sm transition-all duration-200 rounded-full hover:bg-[#f3f9f0] focus:outline-none focus:ring-2 focus:ring-[#1c2544] focus:ring-offset-2 sm:min-h-[3.5rem] sm:px-8"
              >
                {hero.ctaSecondary}
              </a>
            </div>

            {visibleMetrics.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-6">
                {visibleMetrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <span className="text-2xl font-bold text-[#1c2544]">
                      {metric.value}
                    </span>
                    <span className="text-sm text-gray-500">{metric.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative h-64 sm:h-80 md:h-[480px] lg:h-[560px] order-1 lg:order-2">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hero.imageUrl}
                alt={hero.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
