import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { Footer } from "@/layout";

describe("Footer", () => {
  it("renders", () => {
    render(<Footer data-testid="footer-element">Important notes go here</Footer>);
    const element = screen.getByTestId("footer-element");

    expect(element.tagName).toBe("FOOTER");
    expect(element).toBeInTheDocument();
    expect(element.className).toContain("flex");
    expect(element.className).toContain("flex-col");
    expect(element.className).toContain("w-full");
    expect(element.className).toContain("bottom-0");
    expect(element.className).toContain("mt-auto");
    expect(element).toHaveTextContent("Important notes go here");
  });
});
