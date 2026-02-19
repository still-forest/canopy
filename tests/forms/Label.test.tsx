import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Label } from "@/forms";

describe("Label", () => {
  it("renders with default props as children", () => {
    render(<Label>Some label</Label>);
    const label = screen.getByText("Some label");

    expect(label.tagName).toBe("LABEL");
  });

  it("renders with default props as value", () => {
    render(<Label value="Some label" />);
    const label = screen.getByText("Some label");

    expect(label.tagName).toBe("LABEL");
  });

  it("renders with htmlFor", () => {
    render(<Label htmlFor="some-field">Some label</Label>);
    const label = screen.getByText("Some label") as HTMLLabelElement;

    expect(label.tagName).toBe("LABEL");
    expect(label.htmlFor).toBe("some-field");
  });

  it("combines custom className with generated classes", () => {
    render(<Label className="custom-class">With custom class</Label>);

    const label = screen.getByText("With custom class");
    expect(label.className).toContain("custom-class");
  });

  it("renders with size xs", () => {
    render(<Label size="xs">Some label</Label>);
    const label = screen.getByText("Some label");
    expect(label.className).toContain("text-xs");
  });

  it("renders with size sm", () => {
    render(<Label size="sm">Some label</Label>);
    const label = screen.getByText("Some label");
    expect(label.className).toContain("text-sm");
  });

  it("renders with size md", () => {
    render(<Label size="md">Some label</Label>);
    const label = screen.getByText("Some label");
    expect(label.className).toContain("text-base");
  });

  it("renders with size lg", () => {
    render(<Label size="lg">Some label</Label>);
    const label = screen.getByText("Some label");
    expect(label.className).toContain("text-lg");
  });

  it("renders with size xl", () => {
    render(<Label size="xl">Some label</Label>);
    const label = screen.getByText("Some label");
    expect(label.className).toContain("text-xl");
  });
});
