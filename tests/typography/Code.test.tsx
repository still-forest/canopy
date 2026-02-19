import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Code } from "@/typography";

describe("Code", () => {
  it("renders with default props", () => {
    render(<Code>Does not compute</Code>);
    const element = screen.getByText("Does not compute");

    expect(element.tagName).toBe("P");
    expect(element.className).toContain("text-sm");
    expect(element.className).toContain("text-accent-foreground");
    expect(element.className).toContain("font-mono");
    expect(element.className).toContain("bg-accent");
    expect(element.className).toContain("rounded");
  });

  it("renders with size prop", () => {
    render(<Code size="2xl">Does not compute</Code>);
    const element = screen.getByText("Does not compute");

    expect(element.className).toContain("text-2xl");
    expect(element.className).toContain("font-mono");
  });

  it("renders with custom className", () => {
    render(<Code className="custom-class">Does not compute</Code>);
    const element = screen.getByText("Does not compute");

    expect(element.className).toContain("custom-class");
    expect(element.className).toContain("font-mono");
  });
});
