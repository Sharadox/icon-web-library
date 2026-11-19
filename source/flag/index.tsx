import { FLAG_SVGS } from "@sharadox/icon-web-library/flag-svg";
import type { FlagProperties } from "@sharadox/icon-web-library/flag/type";

/**
 * A country's flag, one and a half em wide and one em tall (3 by 2), filling that box whatever its own proportions.
 * Decorative unless given a `label`. All flags are in one module, so import it where flags are wanted, not on every
 * page.
 *
 * @example
 * <Flag country="PT" label="Portugal" />
 */
export function Flag({ country, label, className }: FlagProperties) {
  const { viewBox, body } = FLAG_SVGS[country];
  return (
    <svg
      viewBox={viewBox}
      width="1.5em"
      height="1em"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
      // The flags are this library's own static drawings, never anything a visitor typed.
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
