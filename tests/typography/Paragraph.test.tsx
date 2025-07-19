import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  TEXT_ALIGNS,
  TEXT_LEADINGS,
  TEXT_TRACKINGS,
  TYPOGRAPHY_VARIANTS,
} from "@/types";
import { Paragraph } from "@/typography";

describe("Paragraph", () => {
  it("renders with default props", () => {
    render(<Paragraph>Hello world</Paragraph>);
    const element = screen.getByText("Hello world");

    expect(element.tagName).toBe("P");
    expect(element.className).toBe("text-foreground font-display mb-4");
  });

  it("renders with custom element type", () => {
    render(<Paragraph as="section">Hello world</Paragraph>);
    const element = screen.getByText("Hello world");

    expect(element.tagName).toBe("SECTION");
    expect(element.className).toBe("text-foreground font-display mb-4");
  });
});
