import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Label } from "@/forms";

describe("Label", () => {
  const EXPECTED_BASE_LABEL_CLASSES =
    "flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 font-display font-normal text-foreground text-base";

  it("renders with default props as children", () => {
    render(<Label>Some label</Label>);
    const label = screen.getByText("Some label");

    expect(label.tagName).toBe("LABEL");
    expect(label.className).toBe(EXPECTED_BASE_LABEL_CLASSES);
  });

  it("renders with default props as value", () => {
    render(<Label value="Some label" />);
    const label = screen.getByText("Some label");

    expect(label.tagName).toBe("LABEL");
    expect(label.className).toBe(EXPECTED_BASE_LABEL_CLASSES);
  });

  it("renders with htmlFor", () => {
    render(<Label htmlFor="some-field">Some label</Label>);
    const label = screen.getByText("Some label") as HTMLLabelElement;

    expect(label.tagName).toBe("LABEL");
    expect(label.htmlFor).toBe("some-field");
    expect(label.className).toBe(EXPECTED_BASE_LABEL_CLASSES);
  });

  it("combines custom className with generated classes", () => {
    render(<Label className="custom-class">With custom class</Label>);

    const label = screen.getByText("With custom class");
    expect(label.className).toBe(`${EXPECTED_BASE_LABEL_CLASSES} custom-class`);
  });

  it("renders with size xs", () => {
    render(<Label size="xs">Some label</Label>);
    const label = screen.getByText("Some label");
    const expectedClasses = EXPECTED_BASE_LABEL_CLASSES.replace("text-base", "text-xs");
    expect(label.className).toBe(expectedClasses);
  });

  it("renders with size sm", () => {
    render(<Label size="sm">Some label</Label>);
    const label = screen.getByText("Some label");
    const expectedClasses = EXPECTED_BASE_LABEL_CLASSES.replace("text-base", "text-sm");
    expect(label.className).toBe(expectedClasses);
  });

  it("renders with size md", () => {
    render(<Label size="md">Some label</Label>);
    const label = screen.getByText("Some label");
    expect(label.className).toBe(EXPECTED_BASE_LABEL_CLASSES);
  });

  it("renders with size lg", () => {
    render(<Label size="lg">Some label</Label>);
    const label = screen.getByText("Some label");
    const expectedClasses = EXPECTED_BASE_LABEL_CLASSES.replace("text-base", "text-lg");
    expect(label.className).toBe(expectedClasses);
  });

  it("renders with size xl", () => {
    render(<Label size="xl">Some label</Label>);
    const label = screen.getByText("Some label");
    const expectedClasses = EXPECTED_BASE_LABEL_CLASSES.replace("text-base", "text-xl");
    expect(label.className).toBe(expectedClasses);
  });
});
