import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  type FontWeight,
  HEADING_LEVELS,
  HEADING_SIZES,
  type HeadingSize,
  TEXT_ALIGNS,
  TEXT_LEADINGS,
  TEXT_TRACKINGS,
  TYPOGRAPHY_VARIANTS,
  type TypographyVariant,
} from "@/types";
import { Heading } from "@/typography";

describe("Heading", () => {
  it("renders with default props", () => {
    render(<Heading>Hello world</Heading>);
    const element = screen.getByText("Hello world");

    expect(element.tagName).toBe("H2");
    expect(element.className).toBe("text-3xl font-bold text-foreground font-heading scroll-m-20");
  });

  it("renders headings with different levels", () => {
    const levelSizeMap = {
      "1": "text-4xl",
      "2": "text-3xl",
      "3": "text-2xl",
      "4": "text-xl",
      "5": "text-lg",
      "6": "text-lg",
    };

    for (const level of HEADING_LEVELS) {
      render(<Heading level={level}>Heading {level}</Heading>);
      const element = screen.getByText(`Heading ${level}`);
      expect(element.tagName).toBe(`H${level}`);
      expect(element.className).toBe(`${levelSizeMap[level]} font-bold text-foreground font-heading scroll-m-20`);
    }
  });

  it("applies explicitly specified size regardless of level", () => {
    const sizeClassMap: Record<HeadingSize, string> = {
      xs: "text-lg",
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl",
      xl: "text-4xl",
    };

    for (const size of HEADING_SIZES) {
      render(
        <Heading level="3" size={size}>
          Heading {size}
        </Heading>,
      );
      const element = screen.getByText(`Heading ${size}`);
      expect(element.className).toBe(`${sizeClassMap[size]} font-bold text-foreground font-heading scroll-m-20`);
    }
  });

  it("applies the correct font weight classes", () => {
    for (const weight of FONT_WEIGHTS) {
      render(<Heading weight={weight as FontWeight}>Weight {weight}</Heading>);
      const element = screen.getByText(`Weight ${weight}`);
      expect(element.className).toBe(`text-3xl font-${weight} text-foreground font-heading scroll-m-20`);
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

        let expectedFontClass = "";
        if (variant === "brand") {
          expectedFontClass = "font-brand";
        } else {
          expectedFontClass = "font-heading";
        }

        expect(element.className).toBe(`text-3xl font-bold ${expectedCssClass} ${expectedFontClass} scroll-m-20`);
      }
    });

    it("applies the correct variant classes for foreground variants", () => {
      for (const variant of TYPOGRAPHY_VARIANTS) {
        render(
          <Heading asForeground variant={variant as TypographyVariant}>
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

        let expectedFontClass = "";
        if (variant === "brand") {
          expectedFontClass = "font-brand";
        } else {
          expectedFontClass = "font-heading";
        }

        expect(element.className).toBe(`text-3xl font-bold ${expectedCssClass} ${expectedFontClass} scroll-m-20`);
      }
    });
  });

  it("applies the correct text alignment classes", () => {
    for (const align of TEXT_ALIGNS) {
      render(<Heading align={align}>Align {align}</Heading>);
      const element = screen.getByText(`Align ${align}`);
      expect(element.className).toBe(`text-3xl font-bold text-foreground text-${align} font-heading scroll-m-20`);
    }
  });

  it("applies the correct letter spacing classes", () => {
    for (const tracking of TEXT_TRACKINGS) {
      render(<Heading tracking={tracking}>Tracking {tracking}</Heading>);
      const element = screen.getByText(`Tracking ${tracking}`);
      expect(element.className).toBe(
        `text-3xl font-bold text-foreground tracking-${tracking} font-heading scroll-m-20`,
      );
    }
  });

  it("applies the correct line height classes", () => {
    for (const leading of TEXT_LEADINGS) {
      render(<Heading leading={leading}>Leading {leading}</Heading>);
      const element = screen.getByText(`Leading ${leading}`);
      expect(element.className).toBe(`text-3xl font-bold text-foreground leading-${leading} font-heading scroll-m-20`);
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
    expect(element.className).toBe("text-3xl font-bold text-foreground font-heading tabular-nums scroll-m-20");
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
    expect(element.className).toBe("text-3xl font-bold text-foreground font-heading scroll-m-20 custom-class");
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
    expect(element.className).toBe("text-3xl font-bold text-foreground font-heading scroll-m-20");
  });

  it("applies different combinations of props correctly", () => {
    render(
      <Heading
        align="center"
        family="serif"
        level="1"
        numeric
        size="xl"
        tracking="wide"
        variant="accent"
        weight="semibold"
      >
        Combined props
      </Heading>,
    );

    const element = screen.getByText("Combined props");

    expect(element.tagName).toBe("H1");
    expect(element.className).toBe(
      "text-4xl font-semibold text-accent-foreground text-center tracking-wide font-serif tabular-nums scroll-m-20",
    );
  });
});
