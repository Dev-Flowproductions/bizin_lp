import type { SiteDictionary } from "@/lib/i18n/types";

export function HowItWorks({ dict }: { dict: SiteDictionary }) {
  const { howItWorks } = dict;
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c2544] mb-14 text-center leading-tight">
          {howItWorks.heading}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {howItWorks.steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < howItWorks.steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-6 left-[calc(50%+2.5rem)] right-0 h-px bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <div className="text-center md:text-left">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1c2544] text-white font-bold text-lg mb-5">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-[#1c2544] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
