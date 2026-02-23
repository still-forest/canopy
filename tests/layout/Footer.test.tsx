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
    expect(element.className).toBe("layout-container bottom-0 mt-auto pb-2 justify-between");
    expect(element).toHaveTextContent("Important notes go here");
  });
});
