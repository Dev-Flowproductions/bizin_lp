"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { languageMenu, localeHtmlLang } from "@/lib/i18n/config";

function pathForLocale(pathname: string, target: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  const rest = parts.slice(1).join("/");
  return rest ? `/${target}/${rest}` : `/${target}`;
}

export function LanguageSwitcher({
  currentLocale,
  ariaLabel,
}: {
  currentLocale: Locale;
  ariaLabel: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = languageMenu.find((l) => l.locale === currentLocale);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-label={ariaLabel}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-[13px] uppercase tracking-[-0.14px] text-[rgba(28,37,68,0.7)] transition-colors hover:text-[#1c2544] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c2544] focus-visible:ring-offset-2 rounded-md px-1 py-1"
      >
        <svg
          className="h-4 w-4 shrink-0 2xl:h-5 2xl:w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <span className="hidden font-medium sm:inline">
          {current?.compactLabel ?? currentLocale}
        </span>
        <svg
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute right-0 z-[60] mt-2 min-w-[11rem] rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
        >
          {languageMenu.map((opt) => {
            const href = pathForLocale(pathname, opt.locale);
            const active = opt.locale === currentLocale;
            return (
              <li key={opt.locale} role="presentation">
                <a
                  role="option"
                  aria-selected={active}
                  href={href}
                  hrefLang={localeHtmlLang[opt.locale]}
                  lang={localeHtmlLang[opt.locale]}
                  className={`block px-4 py-2.5 text-sm transition-colors ${
                    active
                      ? "bg-gray-50 font-semibold text-[#1c2544]"
                      : "text-[#1c2544] hover:bg-[#f3f9f0]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {opt.label}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
