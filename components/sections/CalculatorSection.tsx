import { EligibilityCalculator } from "@/components/calculator/EligibilityCalculator";
import type { SiteDictionary } from "@/lib/i18n/types";

export function CalculatorSection({ dict }: { dict: SiteDictionary }) {
  const { calculatorSection } = dict;
  return (
    <section id="calculadora" className="bg-white py-20 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c2544] mb-5 leading-tight">
            {calculatorSection.heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {calculatorSection.subheading}
          </p>
        </div>

        <EligibilityCalculator
          calculator={dict.calculator}
          bookingUrl={dict.finalCta.bookingUrl}
          locale={dict.locale}
        />
      </div>
    </section>
  );
}
