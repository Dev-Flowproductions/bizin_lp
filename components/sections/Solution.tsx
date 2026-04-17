import type { SiteDictionary } from "@/lib/i18n/types";

export function Solution({ dict }: { dict: SiteDictionary }) {
  const { solution } = dict;
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-widest font-medium mb-3">
              {solution.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c2544] mb-6 leading-tight">
              {solution.heading}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{solution.body}</p>
          </div>

          <div className="space-y-4">
            {solution.bullets.map((bullet, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c2544] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-[#1c2544] font-medium leading-snug pt-0.5">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
