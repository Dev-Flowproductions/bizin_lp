import { Section } from "@/components/layout/Section";
import type { SiteDictionary } from "@/lib/i18n/types";

export function Proof({ dict }: { dict: SiteDictionary }) {
  const { proof } = dict;
  const visibleStats = proof.stats.filter((s) => s.visible);

  return (
    <Section className="bg-[#1c2544]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 md:mb-14 text-center leading-tight">
        {proof.heading}
      </h2>

      {visibleStats.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {visibleStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-5 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
