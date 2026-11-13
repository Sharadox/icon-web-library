import { ICON_PATHS } from "@sharadox/icon-web-library/icon-path";
import type { IconProperties } from "@sharadox/icon-web-library/icon/type";

/**
 * A line icon, one em square by default, stroked in the current color so it takes the text's color and size.
 * Decorative unless given a `label`.
 *
 * @example
 * <button aria-label="Next photo"><Icon name="chevron-right" /></button>
 */
export function Icon({ name, label, strokeWidth = 1.5, className }: IconProperties) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}
