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
    expect(element.className).toBe("flex flex-col w-full px-4 md:px-8 lg:px-12 py-2 md:py-4");
    expect(element).toHaveTextContent("Content");
  });

  it("renders with no vertical padding", () => {
    render(
      <Container data-testid="container-element" verticalPadding="none">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toBe("flex flex-col w-full px-4 md:px-8 lg:px-12 py-0");
  });

  it("renders with extra small vertical padding", () => {
    render(
      <Container data-testid="container-element" verticalPadding="xs">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toBe("flex flex-col w-full px-4 md:px-8 lg:px-12 py-0.5 md:py-1");
  });

  it("renders with small vertical padding", () => {
    render(
      <Container data-testid="container-element" verticalPadding="sm">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toBe("flex flex-col w-full px-4 md:px-8 lg:px-12 py-1 md:py-2");
  });

  it("renders with medium vertical padding", () => {
    render(
      <Container data-testid="container-element" verticalPadding="md">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toBe("flex flex-col w-full px-4 md:px-8 lg:px-12 py-2 md:py-4");
  });

  it("renders with large vertical padding", () => {
    render(
      <Container data-testid="container-element" verticalPadding="lg">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toBe("flex flex-col w-full px-4 md:px-8 lg:px-12 py-4 md:py-6");
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
    expect(element.className).toBe("w-full px-4 md:px-8 lg:px-12 py-2 md:py-4");
    expect(element).toHaveTextContent("Content");
  });

  it("renders with custom classes", () => {
    render(
      <Container className="p-8" data-testid="container-element">
        Content
      </Container>,
    );
    const element = screen.getByTestId("container-element");
    expect(element.className).toBe("flex flex-col w-full md:px-8 lg:px-12 p-8 py-2 md:py-4");
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
