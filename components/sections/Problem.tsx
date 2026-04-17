import type { SiteDictionary } from "@/lib/i18n/types";

export function Problem({ dict }: { dict: SiteDictionary }) {
  const { problem } = dict;
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c2544] mb-6 leading-tight">
            {problem.heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{problem.body}</p>
        </div>
      </div>
    </section>
  );
}
