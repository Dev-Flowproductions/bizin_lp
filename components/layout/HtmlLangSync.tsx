"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { isLocale } from "@/lib/i18n/config";
import { localeHtmlLang } from "@/lib/i18n/config";

export function HtmlLangSync() {
  const pathname = usePathname();
  const seg = pathname.split("/").filter(Boolean)[0];

  useEffect(() => {
    if (seg && isLocale(seg)) {
      document.documentElement.lang = localeHtmlLang[seg];
    }
  }, [seg]);

  return null;
}
