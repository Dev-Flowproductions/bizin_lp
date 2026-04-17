import type { Locale } from "@/lib/i18n/config";
import type { SiteDictionary } from "@/lib/i18n/types";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: SiteDictionary;
}) {
  const nav = dict.nav;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <a
            href="https://www.bizinportugal.com"
            className="flex shrink-0 items-center"
            aria-label={nav.logoAriaHome}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={nav.logoUrl}
              alt={nav.logoAlt}
              width={120}
              height={59}
              className="h-auto w-[100px] sm:w-[110px] md:w-[120px]"
            />
          </a>

          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher
              currentLocale={locale}
              ariaLabel={nav.languageMenuAria}
            />
            <div className="hidden h-5 w-px bg-gray-300 sm:block" aria-hidden />
            <a
              href={nav.bookingUrl}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#1c2544] px-4 py-2.5 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#2a3558] focus:outline-none focus:ring-2 focus:ring-[#1c2544] focus:ring-offset-2 sm:px-6 sm:text-sm md:px-7 md:text-base"
            >
              <span className="max-w-[9rem] truncate sm:max-w-none">{nav.cta}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
