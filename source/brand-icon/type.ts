import type { BRAND_ICON_PATHS } from "@sharadox/icon-web-library/brand-icon-path";

/** The brand marks there are. */
export type BrandIconName = keyof typeof BRAND_ICON_PATHS;

export interface BrandIconProperties {
  name: BrandIconName;
  /** What the mark stands for, for assistive technology; without it the mark is decorative and hidden from it. */
  label?: string;
  className?: string;
}
