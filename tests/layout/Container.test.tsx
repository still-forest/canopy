import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { Container } from "@/layout";

describe("Container", () => {
  it("renders as flex by default", () => {
    render(<Container data-testid="container-element">Content</Container>);
    const element = screen.getByTestId("container-element");

    expect(element.tagName).toBe("DIV");
    expect(element).toBeInTheDocument();
    expect(element.className).toBe("flex flex-col w-full max-w-6xl px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6");
    expect(element).toHaveTextContent("Content");
  });

  it("renders as block if specified", () => {
    render(
      <Container data-testid="container-element" display="block">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");

    expect(element.tagName).toBe("DIV");
    expect(element).toBeInTheDocument();
    expect(element.className).toBe("w-full max-w-6xl px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6");
    expect(element).toHaveTextContent("Content");
  });

  it("renders with custom classes", () => {
    render(
      <Container className="p-8" data-testid="container-element">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toBe("flex flex-col w-full max-w-6xl md:px-8 md:py-4 lg:px-12 lg:py-6 p-8");
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
