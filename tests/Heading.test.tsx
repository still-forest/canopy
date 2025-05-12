import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Heading } from "@/main";
import {
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  type FontWeight,
  HEADING_LEVELS,
  TEXT_ALIGNS,
  TEXT_LEADINGS,
  TEXT_TRACKINGS,
  TYPOGRAPHY_VARIANTS,
  type TypographyVariant,
} from "@/types";

describe("Heading", () => {
  it("renders with default props", () => {
    render(<Heading>Hello world</Heading>);
    const element = screen.getByText("Hello world");

    expect(element.tagName).toBe("H2");
    expect(element.className).toBe("text-3xl font-bold text-foreground font-display scroll-m-20");
  });

  it("renders headings with different levels", () => {
    const levelSizeMap = {
      "1": "text-4xl",
      "2": "text-3xl",
      "3": "text-2xl",
      "4": "text-xl",
      "5": "text-lg",
      "6": "text-base",
    };

    for (const level of HEADING_LEVELS) {
      render(<Heading level={level}>Heading {level}</Heading>);
      const element = screen.getByText(`Heading ${level}`);
      expect(element.tagName).toBe(`H${level}`);
      expect(element.className).toBe(`${levelSizeMap[level]} font-bold text-foreground font-display scroll-m-20`);
    }
  });

  it("applies explicitly specified size regardless of level", () => {
    for (const size of FONT_SIZES) {
      render(
        <Heading level="3" size={size}>
          Heading {size}
        </Heading>,
      );
      const element = screen.getByText(`Heading ${size}`);

      const expectedCssClass = size === "md" ? "text-base" : `text-${size}`;
      expect(element.className).toBe(`${expectedCssClass} font-bold text-foreground font-display scroll-m-20`);
    }
  });

  it("applies the correct font weight classes", () => {
    for (const weight of FONT_WEIGHTS) {
      render(<Heading weight={weight as FontWeight}>Weight {weight}</Heading>);
      const element = screen.getByText(`Weight ${weight}`);
      expect(element.className).toBe(`text-3xl font-${weight} text-foreground font-display scroll-m-20`);
    }
  });

  describe("variant", () => {
    it("applies the correct variant classes", () => {
      for (const variant of TYPOGRAPHY_VARIANTS) {
        render(<Heading variant={variant as TypographyVariant}>Variant {variant}</Heading>);
        const element = screen.getByText(`Variant ${variant}`);

        let expectedCssClass = "";
        if (variant === "default") {
          expectedCssClass = "text-foreground";
        } else if (variant === "inherit") {
          expectedCssClass = "text-inherit";
        } else if (variant === "primary" || variant === "secondary" || variant === "muted" || variant === "accent") {
          expectedCssClass = `text-${variant}-foreground`;
        } else {
          expectedCssClass = `text-${variant}`;
        }

        expect(element.className).toBe(`text-3xl font-bold ${expectedCssClass} font-display scroll-m-20`);
      }
    });

    it("applies the correct variant classes for foreground variants", () => {
      for (const variant of TYPOGRAPHY_VARIANTS) {
        render(
          <Heading variant={variant as TypographyVariant} asForeground>
            Variant {variant}
          </Heading>,
        );
        const element = screen.getByText(`Variant ${variant}`);

        let expectedCssClass = "";
        if (variant === "default") {
          expectedCssClass = "text-foreground";
        } else if (variant === "inherit") {
          expectedCssClass = "text-inherit";
        } else {
          expectedCssClass = `text-${variant}-foreground`;
        }

        expect(element.className).toBe(`text-3xl font-bold ${expectedCssClass} font-display scroll-m-20`);
      }
    });
  });

  it("applies the correct text alignment classes", () => {
    for (const align of TEXT_ALIGNS) {
      render(<Heading align={align}>Align {align}</Heading>);
      const element = screen.getByText(`Align ${align}`);
      expect(element.className).toBe(`text-3xl font-bold text-foreground text-${align} font-display scroll-m-20`);
    }
  });

  it("applies the correct letter spacing classes", () => {
    for (const tracking of TEXT_TRACKINGS) {
      render(<Heading tracking={tracking}>Tracking {tracking}</Heading>);
      const element = screen.getByText(`Tracking ${tracking}`);
      expect(element.className).toBe(
        `text-3xl font-bold text-foreground tracking-${tracking} font-display scroll-m-20`,
      );
    }
  });

  it("applies the correct line height classes", () => {
    for (const leading of TEXT_LEADINGS) {
      render(<Heading leading={leading}>Leading {leading}</Heading>);
      const element = screen.getByText(`Leading ${leading}`);
      expect(element.className).toBe(`text-3xl font-bold text-foreground leading-${leading} font-display scroll-m-20`);
    }
  });

  it("applies the correct font family classes", () => {
    for (const family of FONT_FAMILIES) {
      render(<Heading family={family}>Family {family}</Heading>);
      const element = screen.getByText(`Family ${family}`);
      expect(element.className).toBe(`text-3xl font-bold text-foreground font-${family} scroll-m-20`);
    }
  });

  it("applies tabular-nums class when numeric is true", () => {
    render(<Heading numeric>123456</Heading>);
    const element = screen.getByText("123456");
    expect(element.className).toBe("text-3xl font-bold text-foreground font-display tabular-nums scroll-m-20");
  });

  it("does not apply tabular-nums class when numeric is false", () => {
    render(<Heading numeric={false}>123456</Heading>);
    const element = screen.getByText("123456");
    expect(element).not.toHaveClass("tabular-nums");
  });

  it("passes additional props to the element", () => {
    render(<Heading data-testid="heading-component">Test heading</Heading>);
    expect(screen.getByTestId("heading-component")).toBeInTheDocument();
  });

  it("combines custom className with generated classes", () => {
    render(<Heading className="custom-class">With custom class</Heading>);
    const element = screen.getByText("With custom class");
    expect(element.className).toBe("text-3xl font-bold text-foreground font-display scroll-m-20 custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Heading ref={ref}>Ref test</Heading>);

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBe(screen.getByText("Ref test"));
  });

  it("should always add scroll-m-20 class for better anchor navigation", () => {
    render(<Heading>Heading with scroll margin</Heading>);
    const element = screen.getByText("Heading with scroll margin");
    expect(element.className).toBe("text-3xl font-bold text-foreground font-display scroll-m-20");
  });

  it("applies different combinations of props correctly", () => {
    render(
      <Heading
        level="1"
        size="5xl"
        weight="extrabold"
        variant="accent"
        align="center"
        tracking="wide"
        family="serif"
        numeric
      >
        Combined props
      </Heading>,
    );

    const element = screen.getByText("Combined props");

    expect(element.tagName).toBe("H1");
    expect(element.className).toBe(
      "text-5xl font-extrabold text-accent-foreground text-center tracking-wide font-serif tabular-nums scroll-m-20",
    );
  });
});
