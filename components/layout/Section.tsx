import type { ReactNode } from "react";
import {
  heroSectionPaddingClass,
  sectionPaddingBottomClass,
  sectionPaddingYClass,
  siteContainerClass,
} from "@/lib/layout/site-layout";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  /** First section under the fixed header (hero). */
  underFixedHeader?: boolean;
  /** Drop top padding when the previous section already provides the gap. */
  omitTopPadding?: boolean;
  children: ReactNode;
};

function joinClasses(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function resolvePaddingClass(
  underFixedHeader: boolean,
  omitTopPadding: boolean,
) {
  if (underFixedHeader) return heroSectionPaddingClass;
  if (omitTopPadding) return sectionPaddingBottomClass;
  return sectionPaddingYClass;
}

export function Section({
  id,
  className,
  containerClassName,
  underFixedHeader = false,
  omitTopPadding = false,
  children,
}: SectionProps) {
  const paddingClass = resolvePaddingClass(underFixedHeader, omitTopPadding);

  return (
    <section id={id} className={joinClasses(paddingClass, className)}>
      <div className={joinClasses(siteContainerClass, containerClassName)}>
        {children}
      </div>
    </section>
  );
}
