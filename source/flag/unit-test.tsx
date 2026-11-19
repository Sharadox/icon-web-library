// @vitest-environment happy-dom
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Flag } from "@sharadox/icon-web-library/flag";
import { FLAG_SVGS } from "@sharadox/icon-web-library/flag-svg";

test("draws the country's flag at 3 by 2, hidden from assistive technology", () => {
  const { container } = render(<Flag country="PT" className="flag" />);
  const svg = container.querySelector("svg")!;
  expect(svg.getAttribute("aria-hidden")).toBe("true");
  expect(svg.getAttribute("viewBox")).toBe(FLAG_SVGS.PT.viewBox);
  expect(svg.getAttribute("width")).toBe("1.5em");
  expect(svg.getAttribute("class")).toBe("flag");
  expect(svg.querySelector("circle")).not.toBeNull();
});

test("with a label it is an image with that name", () => {
  render(<Flag country="BR" label="Brasil" />);
  expect(screen.getByRole("img", { name: "Brasil" })).toBeDefined();
});

test("has every country with a calling code, as plain drawings without links or scripts", () => {
  expect(Object.keys(FLAG_SVGS)).toHaveLength(245);
  for (const { body } of Object.values(FLAG_SVGS)) expect(body).not.toMatch(/<script|href|\son\w+=/i);
});
