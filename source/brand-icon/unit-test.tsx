// @vitest-environment happy-dom
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { BrandIcon } from "@sharadox/icon-web-library/brand-icon";
import { BRAND_ICON_PATHS } from "@sharadox/icon-web-library/brand-icon-path";

test("draws the named mark filled in the current color, hidden from assistive technology", () => {
  const { container } = render(<BrandIcon name="youtube" className="mark" />);
  const svg = container.querySelector("svg")!;
  expect(svg.getAttribute("aria-hidden")).toBe("true");
  expect(svg.getAttribute("fill")).toBe("currentColor");
  expect(svg.getAttribute("class")).toBe("mark");
  expect(svg.querySelector("path")!.getAttribute("d")).toBe(BRAND_ICON_PATHS.youtube);
});

test("with a label it is an image with that name", () => {
  render(<BrandIcon name="linkedin" label="LinkedIn" />);
  expect(screen.getByRole("img", { name: "LinkedIn" })).toBeDefined();
});

test("has every network a site links to, each one path", () => {
  expect(Object.keys(BRAND_ICON_PATHS)).toEqual([
    "facebook",
    "instagram",
    "tiktok",
    "youtube",
    "x",
    "threads",
    "pinterest",
    "linkedin",
    "google",
  ]);
  // Arcs may have radii past the grid, so only the shape of the data is checked.
  for (const path of Object.values(BRAND_ICON_PATHS)) expect(path).toMatch(/^M[\d.\s,-]+.*[Zz]?$/);
});
