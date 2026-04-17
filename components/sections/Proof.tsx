import type { SiteDictionary } from "@/lib/i18n/types";

export function Proof({ dict }: { dict: SiteDictionary }) {
  const { proof } = dict;
  const visibleStats = proof.stats.filter((s) => s.visible);

  return (
    <section className="bg-[#1c2544] py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-14 text-center leading-tight">
          {proof.heading}
        </h2>

        {visibleStats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-14">
            {visibleStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center">
            <svg
              className="w-10 h-10 text-white/40 mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-white/80 text-lg leading-relaxed italic">{proof.quote}</p>
            <p className="text-white/50 text-sm mt-4">— {proof.quoteAttribution}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
