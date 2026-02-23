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
    expect(element.className).toBe("layout-container");
    expect(element).toHaveTextContent("Content");
  });

  it("renders with custom classes", () => {
    render(
      <Container className="p-8" data-testid="container-element">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toContain("p-8");
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
