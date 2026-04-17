import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Problem } from "@/components/sections/Problem";
import { Proof } from "@/components/sections/Proof";
import { Solution } from "@/components/sections/Solution";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getSiteUrl } from "@/lib/i18n/site";
import {
  buildFaqSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
} from "@/lib/schema";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(lang);
  const site = getSiteUrl();
  const pageUrl = `${site}/${lang}`;

  const faqSchema = buildFaqSchema(dict.faq.items);
  const pageSchema = buildWebPageSchema({
    title: dict.seo.title,
    description: dict.seo.description,
    url: pageUrl,
    inLanguage: dict.htmlLang,
  });
  const orgSchema = buildOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <Hero dict={dict} />
      <Problem dict={dict} />
      <Solution dict={dict} />
      <CalculatorSection dict={dict} />
      <HowItWorks dict={dict} />
      <Proof dict={dict} />
      <Faq dict={dict} />
      <FinalCta dict={dict} />
    </>
  );
}
