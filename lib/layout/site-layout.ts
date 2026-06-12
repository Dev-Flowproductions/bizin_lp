/** Horizontal inset aligned with the fixed navbar (`Header`). */
export const siteContainerClass = "container mx-auto px-4 md:px-6 lg:px-8";

/** Standard vertical padding for every page section. */
export const sectionPaddingTopClass = "pt-16 md:pt-24";
export const sectionPaddingBottomClass = "pb-16 md:pb-24";
export const sectionPaddingYClass = `${sectionPaddingTopClass} ${sectionPaddingBottomClass}`;

/**
 * Hero only: same vertical rhythm as other sections, plus clearance for the
 * fixed header. Keep header heights in sync with `Header`.
 */
export const heroSectionPaddingClass =
  `${sectionPaddingBottomClass} pt-[calc(68px+4rem)] md:pt-[calc(76px+6rem)]`;
