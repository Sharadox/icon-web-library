import type { ICON_PATHS } from "@sharadox/icon-web-library/icon-path";

/** The icons there are. */
export type IconName = keyof typeof ICON_PATHS;

export interface IconProperties {
  name: IconName;
  /** What the icon means, for assistive technology; without it the icon is decorative and hidden from it. */
  label?: string;
  /** The line's weight on the 24 grid. 1.5 by default. */
  strokeWidth?: number;
  className?: string;
}
