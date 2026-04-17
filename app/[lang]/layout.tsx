import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { defaultLocale, isLocale, locales, localeHtmlLang } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getSiteUrl } from "@/lib/i18n/site";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(lang);
  const site = getSiteUrl();

  const languages: Record<string, string> = {
    "x-default": `${site}/${defaultLocale}`,
  };
  for (const l of locales) {
    languages[localeHtmlLang[l]] = `${site}/${l}`;
  }

  return {
    title: dict.seo.title,
    description: dict.seo.description,
    authors: [{ name: "Bizin Portugal" }],
    keywords: [
      "Portugal 2030",
      "investment incentives",
      "incentivos Portugal",
      "Bizin Portugal",
      "European funds",
    ],
    alternates: {
      canonical: `${site}/${lang}`,
      languages,
    },
    openGraph: {
      title: dict.seo.title,
      description: dict.seo.description,
      siteName: "Bizin Portugal",
      locale: dict.seo.ogLocale,
      alternateLocale: locales
        .filter((l) => l !== lang)
        .map((l) => getDictionary(l).seo.ogLocale),
      type: "website",
      url: `${site}/${lang}`,
      images: [{ url: "https://www.bizinportugal.com/og-image.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.title,
      description: dict.seo.description,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(lang);

  return (
    <>
      <Header locale={lang} dict={dict} />
      {children}
    </>
  );
}
