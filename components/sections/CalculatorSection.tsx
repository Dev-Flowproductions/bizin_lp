import { EligibilityCalculator } from "@/components/calculator/EligibilityCalculator";
import { Section } from "@/components/layout/Section";
import type { SiteDictionary } from "@/lib/i18n/types";

export function CalculatorSection({ dict }: { dict: SiteDictionary }) {
  const { calculatorSection } = dict;
  return (
    <Section id="calculadora" className="bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1c2544] leading-tight">
          {calculatorSection.heading}
        </h2>
        {calculatorSection.subheading ? (
          <p className="mt-3 text-base md:text-lg text-gray-600 leading-relaxed">
            {calculatorSection.subheading}
          </p>
        ) : null}
      </div>

      <EligibilityCalculator
        calculator={dict.calculator}
        bookingUrl={dict.finalCta.bookingUrl}
        locale={dict.locale}
      />
    </Section>
  );
}
