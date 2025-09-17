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
    expect(element.className).toBe(
      "flex flex-col justify-between w-full px-4 md:px-8 lg:px-12 bottom-0 mt-auto py-2 md:py-4",
    );
    expect(element).toHaveTextContent("Important notes go here");
  });
});
