import { BRAND_ICON_PATHS } from "@sharadox/icon-web-library/brand-icon-path";
import type { BrandIconProperties } from "@sharadox/icon-web-library/brand-icon/type";

/**
 * A brand's mark (a social network, a review site), one em square by default, filled in the current color so it
 * takes the text's color and size. Decorative unless given a `label`; a link with only a mark needs one.
 *
 * @example
 * <a href="https://instagram.com/sharadoxcom"><BrandIcon name="instagram" label="Instagram" /></a>
 */
export function BrandIcon({ name, label, className }: BrandIconProperties) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className={className}
      fill="currentColor"
      fillRule="evenodd"
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <path d={BRAND_ICON_PATHS[name]} />
    </svg>
  );
}
