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
    expect(element.className).toContain("flex");
    expect(element.className).toContain("flex-col");
    expect(element.className).toContain("w-full");
    expect(element).toHaveTextContent("Content");
  });

  it("renders with no separation", () => {
    render(
      <Container data-testid="container-element" separation="none">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toContain("py-0");
  });

  it("renders with extra small separation", () => {
    render(
      <Container data-testid="container-element" separation="xs">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toContain("py-0.5");
  });

  it("renders with small separation", () => {
    render(
      <Container data-testid="container-element" separation="sm">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toContain("py-1");
  });

  it("renders with medium separation", () => {
    render(
      <Container data-testid="container-element" separation="md">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toContain("py-2");
  });

  it("renders with large separation", () => {
    render(
      <Container data-testid="container-element" separation="lg">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toContain("py-4");
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
    expect(element.className).toContain("w-full");
    expect(element.className).not.toContain("flex");
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
