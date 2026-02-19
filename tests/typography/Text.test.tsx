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
import { Text } from "@/typography";

describe("Text", () => {
  it("renders with default props", () => {
    render(<Text>Hello world</Text>);
    const element = screen.getByText("Hello world");

    expect(element.tagName).toBe("P");
    expect(element.className).toContain("text-foreground");
    expect(element.className).toContain("font-body");
  });

  it("renders with custom element type", () => {
    render(<Text as="span">Hello world</Text>);
    const element = screen.getByText("Hello world");
    expect(element.tagName).toBe("SPAN");
  });

  it("renders with h1-h6 elements", () => {
    const headingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

    for (const level of headingLevels) {
      render(<Text as={level}>Heading {level}</Text>);
      const element = screen.getByText(`Heading ${level}`);
      expect(element.tagName).toBe(level.toUpperCase());
    }
  });

  it("applies the correct text size classes", () => {
    for (const size of FONT_SIZES) {
      render(<Text size={size}>Text {size}</Text>);
      const element = screen.getByText(`Text ${size}`);

      const expectedCssClass = size === "md" ? "text-base" : `text-${size}`;
      expect(element.className).toContain(expectedCssClass);
    }
  });

  it("applies the correct font weight classes", () => {
    for (const weight of FONT_WEIGHTS) {
      render(<Text weight={weight}>Weight {weight}</Text>);
      const element = screen.getByText(`Weight ${weight}`);
      expect(element.className).toContain(`font-${weight}`);
    }
  });

  describe("variant", () => {
    it("applies the correct variant classes", () => {
      for (const variant of TYPOGRAPHY_VARIANTS) {
        render(<Text variant={variant}>Variant {variant}</Text>);
        const element = screen.getByText(`Variant ${variant}`);

        if (variant === "default") {
          expect(element.className).toContain("text-foreground");
        } else if (variant === "inherit") {
          expect(element.className).toContain("text-inherit");
        } else if (variant === "primary" || variant === "secondary" || variant === "muted" || variant === "accent") {
          expect(element.className).toContain(`text-${variant}-foreground`);
        } else {
          expect(element.className).toContain(`text-${variant}`);
        }

        if (variant === "brand") {
          expect(element.className).toContain("font-brand");
        } else {
          expect(element.className).toContain("font-body");
        }
      }
    });

    it("applies the correct variant classes for foreground variants", () => {
      for (const variant of TYPOGRAPHY_VARIANTS) {
        render(
          <Text asForeground variant={variant}>
            Variant {variant}
          </Text>,
        );
        const element = screen.getByText(`Variant ${variant}`);

        if (variant === "default") {
          expect(element.className).toContain("text-foreground");
        } else if (variant === "inherit") {
          expect(element.className).toContain("text-inherit");
        } else {
          expect(element.className).toContain(`text-${variant}-foreground`);
        }
      }
    });
  });

  it("applies the correct text alignment classes", () => {
    for (const align of TEXT_ALIGNS) {
      render(<Text align={align}>Align {align}</Text>);
      const element = screen.getByText(`Align ${align}`);
      expect(element.className).toContain(`text-${align}`);
    }
  });

  it("applies the correct letter spacing classes", () => {
    for (const tracking of TEXT_TRACKINGS) {
      render(<Text tracking={tracking}>Tracking {tracking}</Text>);
      const element = screen.getByText(`Tracking ${tracking}`);
      expect(element.className).toContain(`tracking-${tracking}`);
    }
  });

  it("applies the correct line height classes", () => {
    for (const leading of TEXT_LEADINGS) {
      render(<Text leading={leading}>Leading {leading}</Text>);
      const element = screen.getByText(`Leading ${leading}`);
      expect(element.className).toContain(`leading-${leading}`);
    }
  });

  it("applies the correct font family classes", () => {
    for (const family of FONT_FAMILIES) {
      render(<Text family={family}>Family {family}</Text>);
      const element = screen.getByText(`Family ${family}`);
      expect(element.className).toContain(`font-${family}`);
    }
  });

  it("applies truncate class when truncate is true", () => {
    render(<Text truncate>Truncated text</Text>);
    const element = screen.getByText("Truncated text");
    expect(element.className).toContain("truncate");
  });

  it("does not apply truncate class when truncate is false", () => {
    render(<Text truncate={false}>Non-truncated text</Text>);
    const element = screen.getByText("Non-truncated text");
    expect(element).not.toHaveClass("truncate");
  });

  it("applies tabular-nums class when numeric is true", () => {
    render(<Text numeric>123456</Text>);
    const element = screen.getByText("123456");
    expect(element.className).toContain("tabular-nums");
  });

  it("does not apply tabular-nums class when numeric is false", () => {
    render(<Text numeric={false}>123456</Text>);
    const element = screen.getByText("123456");
    expect(element).not.toHaveClass("tabular-nums");
  });

  it("passes additional props to the element", () => {
    render(<Text data-testid="text-component">Test text</Text>);
    expect(screen.getByTestId("text-component")).toBeInTheDocument();
  });

  it("combines custom className with generated classes", () => {
    render(<Text className="custom-class">With custom class</Text>);
    const element = screen.getByText("With custom class");
    expect(element.className).toContain("custom-class");
    expect(element.className).toContain("font-body");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Text ref={ref}>Ref test</Text>);

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBe(screen.getByText("Ref test"));
  });
});
