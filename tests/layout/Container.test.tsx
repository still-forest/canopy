import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { Container } from "@/layout";

describe("Container", () => {
  it("renders with default props", () => {
    render(<Container data-testid="container-element">Content</Container>);
    const element = screen.getByTestId("container-element");

    expect(element.tagName).toBe("DIV");
    expect(element).toBeInTheDocument();
    expect(element.className).toBe("w-full max-w-6xl px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6");
    expect(element).toHaveTextContent("Content");
  });

  it("renders with custom classes", () => {
    render(
      <Container data-testid="container-element" className="p-8">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toBe("w-full max-w-6xl md:px-8 md:py-4 lg:px-12 lg:py-6 p-8");
  });

  it("renders with custom element type", () => {
    render(
      <Container as="section" data-testid="container-element">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.tagName).toBe("SECTION");
  });
});
