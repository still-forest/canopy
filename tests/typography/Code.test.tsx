import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Code } from "@/typography";

describe("Code", () => {
  it("renders with default props", () => {
    render(<Code>Does not compute</Code>);
    const element = screen.getByText("Does not compute");

    expect(element.tagName).toBe("P");
    expect(element.className).toBe(
      "text-sm text-accent-foreground font-mono inline-block w-fit rounded bg-accent px-2",
    );
  });

  it("renders with size prop", () => {
    render(<Code size="2xl">Does not compute</Code>);
    const element = screen.getByText("Does not compute");

    expect(element.className).toBe(
      "text-2xl text-accent-foreground font-mono inline-block w-fit rounded bg-accent px-2",
    );
  });

  it("renders with custom className", () => {
    render(<Code className="custom-class">Does not compute</Code>);
    const element = screen.getByText("Does not compute");

    expect(element.className).toBe("text-sm text-accent-foreground font-mono custom-class");
  });
});
