import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Paragraph } from "@/typography";

describe("Paragraph", () => {
  it("renders with default props", () => {
    render(<Paragraph>Hello world</Paragraph>);
    const element = screen.getByText("Hello world");

    expect(element.tagName).toBe("P");
    expect(element.className).toContain("text-foreground");
    expect(element.className).toContain("font-body");
    expect(element.className).toContain("mb-4");
  });

  it("renders with custom element type", () => {
    render(<Paragraph as="div">Hello world</Paragraph>);
    const element = screen.getByText("Hello world");

    expect(element.tagName).toBe("DIV");
    expect(element.className).toContain("text-foreground");
    expect(element.className).toContain("font-body");
  });
});
