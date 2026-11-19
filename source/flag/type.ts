import type { FlagCountry } from "@sharadox/icon-web-library/flag-svg";

export interface FlagProperties {
  /** The country, by its ISO 3166-1 alpha-2 code. */
  country: FlagCountry;
  /** The country's name, for assistive technology; without it the flag is decorative and hidden from it. */
  label?: string;
  className?: string;
}
