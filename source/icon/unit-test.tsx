// @vitest-environment happy-dom
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Icon } from "@sharadox/icon-web-library/icon";
import { ICON_PATHS } from "@sharadox/icon-web-library/icon-path";

test("draws the named icon as a line in the current color, hidden from assistive technology", () => {
  const { container } = render(<Icon name="chevron-right" className="arrow" />);
  const svg = container.querySelector("svg")!;
  expect(svg.getAttribute("aria-hidden")).toBe("true");
  expect(svg.getAttribute("stroke")).toBe("currentColor");
  expect(svg.getAttribute("stroke-width")).toBe("1.5");
  expect(svg.getAttribute("class")).toBe("arrow");
  expect(svg.querySelector("path")!.getAttribute("d")).toBe(ICON_PATHS["chevron-right"]);
});

test("with a label it is an image with that name, and can be drawn heavier", () => {
  render(<Icon name="zoom-in" label="Zoom" strokeWidth={2} />);
  expect(screen.getByRole("img", { name: "Zoom" }).getAttribute("stroke-width")).toBe("2");
});

test("every icon is drawn on the 24 grid", () => {
  for (const path of Object.values(ICON_PATHS)) {
    const numbers = path.match(/-?\d*\.?\d+/g)!.map(Number);
    expect(Math.max(...numbers.map(Math.abs))).toBeLessThanOrEqual(24);
  }
});
