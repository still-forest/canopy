import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { Box } from "@/layout";
import {
  BOX_SIZINGS,
  DISPLAYS,
  HEIGHTS,
  LAYOUT_ELEMENTS,
  LAYOUT_VARIANTS,
  OVERFLOWS,
  POSITIONS,
  ROUNDED_SIZES,
  SIZES,
  WIDTHS,
} from "@/types";

describe("Box", () => {
  it("renders with default props", () => {
    render(<Box data-testid="box-element">Content</Box>);
    const element = screen.getByTestId("box-element");

    expect(element.tagName).toBe("DIV");
    expect(element).toBeInTheDocument();
  });

  it("renders with custom element type", () => {
    render(
      <Box as="section" data-testid="box-element">
        Content
      </Box>,
    );
    const element = screen.getByTestId("box-element");
    expect(element.tagName).toBe("SECTION");
  });

  describe("variants", () => {
    it("applies the correct variant classes", () => {
      const NON_DEFAULT_VARIANTS = LAYOUT_VARIANTS.filter((variant) => variant !== "default");

      for (const variant of NON_DEFAULT_VARIANTS) {
        const { rerender } = render(
          <Box data-testid="box-element" variant={variant}>
            Variant {variant}
          </Box>,
        );
        const element = screen.getByTestId("box-element");
        expect(element.className).toBe(`bg-${variant} text-${variant}-foreground`);
        rerender(<div />);
      }
    });

    it("does not apply classes with default variant", () => {
      render(
        <Box data-testid="box-element" variant={"default"}>
          Default variant
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe("");
    });
  });

  it("applies the correct size classes", () => {
    for (const size of SIZES) {
      const { rerender } = render(
        <Box data-testid="box-element" size={size}>
          Size {size}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`size-${size}`);
      rerender(<div />);
    }
  });

  it("applies the correct width classes", () => {
    for (const width of WIDTHS) {
      const { rerender } = render(
        <Box data-testid="box-element" width={width}>
          Width {width}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`w-${width}`);
      rerender(<div />);
    }
  });

  it("applies the correct height classes", () => {
    for (const height of HEIGHTS) {
      const { rerender } = render(
        <Box data-testid="box-element" height={height}>
          Height {height}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`h-${height}`);
      rerender(<div />);
    }
  });

  it("applies the correct box display classes", () => {
    for (const display of DISPLAYS) {
      const { rerender } = render(
        <Box data-testid="box-element" display={display}>
          Display {display}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(display);
      rerender(<div />);
    }
  });

  it("applies the correct box sizing classes", () => {
    for (const sizing of BOX_SIZINGS) {
      const { rerender } = render(
        <Box data-testid="box-element" sizing={sizing}>
          Sizing {sizing}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`box-${sizing}`);
      rerender(<div />);
    }
  });

  it("applies the correct position classes", () => {
    for (const position of POSITIONS) {
      const { rerender } = render(
        <Box data-testid="box-element" position={position}>
          Position {position}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(position);
      rerender(<div />);
    }
  });

  it("applies the correct overflow classes", () => {
    for (const overflow of OVERFLOWS) {
      const { rerender } = render(
        <Box data-testid="box-element" overflow={overflow}>
          Overflow {overflow}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`overflow-${overflow}`);
      rerender(<div />);
    }

    for (const overflow of OVERFLOWS) {
      const { rerender } = render(
        <Box data-testid="box-element" overflowX={overflow}>
          OverflowX {overflow}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`overflow-x-${overflow}`);
      rerender(<div />);
    }

    for (const overflow of OVERFLOWS) {
      const { rerender } = render(
        <Box data-testid="box-element" overflowY={overflow}>
          OverflowY {overflow}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`overflow-y-${overflow}`);
      rerender(<div />);
    }
  });

  describe("rounded corners", () => {
    it("applies the correct rounded corner classes", () => {
      const STRING_ROUNDED_SIZES = ROUNDED_SIZES.filter((size) => typeof size === "string");

      for (const roundedSize of STRING_ROUNDED_SIZES) {
        const { rerender } = render(
          <Box data-testid="box-element" rounded={roundedSize}>
            Rounded size {roundedSize}
          </Box>,
        );
        const element = screen.getByTestId("box-element");
        expect(element.className).toBe(`rounded-${roundedSize}`);
        rerender(<div />);
      }
    });

    it("applies default rounding with a true value", () => {
      render(
        <Box data-testid="box-element" rounded>
          Default rounded size
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe("rounded");
    });

    it("does not rounding with a false value", () => {
      render(
        <Box data-testid="box-element" rounded={false}>
          No rounded corners
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe("");
    });
  });

  it("applies custom className", () => {
    render(
      <Box className="custom-class" data-testid="box-element">
        With custom class
      </Box>,
    );
    const element = screen.getByTestId("box-element");
    expect(element.className).toBe("custom-class");
  });

  it("can render as different HTML elements", () => {
    for (const elementType of LAYOUT_ELEMENTS) {
      const { rerender } = render(
        <Box as={elementType} data-testid="box-element">
          {elementType} box
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.tagName).toBe(elementType.toUpperCase());
      rerender(<div />);
    }
  });

  it("passes additional props to the element", () => {
    render(
      // biome-ignore lint/a11y/useSemanticElements: Testing custom elements, up to the user to ensure accessibility
      <Box aria-label="box container" as="section" data-testid="box-component" role="region">
        Test box
      </Box>,
    );
    const element = screen.getByTestId("box-component");
    expect(element).toHaveAttribute("aria-label", "box container");
    expect(element).toHaveAttribute("role", "region");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(
      <Box data-testid="box-element" ref={ref}>
        Ref test
      </Box>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBe(screen.getByTestId("box-element"));
  });

  it("renders children correctly", () => {
    render(
      <Box>
        <div data-testid="child-element">Child content</div>
      </Box>,
    );

    expect(screen.getByTestId("child-element")).toBeInTheDocument();
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("renders nested children", () => {
    render(
      <Box data-testid="parent-box">
        <Box data-testid="child-box">
          <Box data-testid="grandchild-box">Nested content</Box>
        </Box>
      </Box>,
    );

    expect(screen.getByTestId("parent-box")).toBeInTheDocument();
    expect(screen.getByTestId("child-box")).toBeInTheDocument();
    expect(screen.getByTestId("grandchild-box")).toBeInTheDocument();
    expect(screen.getByText("Nested content")).toBeInTheDocument();
  });

  it("works with multiple classNames", () => {
    render(
      <Box className="class1 class2 class3" data-testid="box-element">
        Multiple classes
      </Box>,
    );

    const element = screen.getByTestId("box-element");
    expect(element.className).toBe("class1 class2 class3");
  });

  it("can be styled with inline styles", () => {
    render(
      <Box data-testid="box-element" style={{ padding: "10px" }}>
        Styled box
      </Box>,
    );

    const element = screen.getByTestId("box-element");
    expect(element).toHaveStyle({
      padding: "10px",
    });
  });
});
