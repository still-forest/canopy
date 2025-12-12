import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { Flex } from "@/layout";
import { FLEX_ALIGNS, FLEX_DIRECTIONS, FLEX_GROWS, FLEX_JUSTIFIES, FLEX_WRAPS, GAPS } from "@/types";

describe("Flex", () => {
  it("renders with default props", () => {
    render(<Flex data-testid="flex-element">Content</Flex>);
    const element = screen.getByTestId("flex-element");

    expect(element.tagName).toBe("DIV");
    expect(element.className).toBe("flex");
  });

  it("renders with custom element type", () => {
    render(
      <Flex as="section" data-testid="flex-element">
        Content
      </Flex>,
    );
    const element = screen.getByTestId("flex-element");
    expect(element.tagName).toBe("SECTION");
    expect(element.className).toBe("flex");
  });

  it("applies the correct flex direction classes", () => {
    for (const direction of FLEX_DIRECTIONS) {
      const { rerender } = render(
        <Flex data-testid="flex-element" direction={direction}>
          Direction {direction}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex flex-${direction}`);
      rerender(<div />);
    }
  });

  it("applies the correct alignment classes", () => {
    for (const align of FLEX_ALIGNS) {
      const { rerender } = render(
        <Flex align={align} data-testid="flex-element">
          Align {align}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex items-${align}`);
      rerender(<div />);
    }
  });

  it("applies the correct justify content classes", () => {
    for (const justify of FLEX_JUSTIFIES) {
      const { rerender } = render(
        <Flex data-testid="flex-element" justify={justify}>
          Justify {justify}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex justify-${justify}`);
      rerender(<div />);
    }
  });

  describe("grow", () => {
    it("applies the correct grow classes", () => {
      const STRING_FLEX_GROWS = FLEX_GROWS.filter((grow) => typeof grow === "string");

      for (const grow of STRING_FLEX_GROWS) {
        const { rerender } = render(
          <Flex data-testid="flex-element" grow={grow}>
            Grow {grow}
          </Flex>,
        );
        const element = screen.getByTestId("flex-element");
        expect(element.className).toBe(`flex grow-${grow}`);
        rerender(<div />);
      }
    });

    it("aliases true as grow-1", () => {
      render(
        <Flex data-testid="flex-element" grow>
          Grow true
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe("flex grow-1");
    });

    it("aliases false as grow-0", () => {
      render(
        <Flex data-testid="flex-element" grow={false}>
          Grow false
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe("flex grow-0");
    });
  });

  it("applies the correct flex wrap classes", () => {
    for (const wrap of FLEX_WRAPS) {
      const { rerender } = render(
        <Flex data-testid="flex-element" wrap={wrap}>
          Wrap {wrap}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex flex-${wrap}`);
      rerender(<div />);
    }
  });

  it("applies the correct gap classes", () => {
    for (const gap of GAPS) {
      const { rerender } = render(
        <Flex data-testid="flex-element" gap={gap}>
          Gap {gap}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex gap-${gap}`);
      rerender(<div />);
    }

    for (const gapX of GAPS) {
      const { rerender } = render(
        <Flex data-testid="flex-element" gapX={gapX}>
          GapX {gapX}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex gap-x-${gapX}`);
      rerender(<div />);
    }

    for (const gapY of GAPS) {
      const { rerender } = render(
        <Flex data-testid="flex-element" gapY={gapY}>
          GapY {gapY}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex gap-y-${gapY}`);
      rerender(<div />);
    }
  });

  it("combines gap, gapX, and gapY correctly", () => {
    render(
      <Flex data-testid="flex-element" gap="2" gapX="4" gapY="8">
        Mixed gaps
      </Flex>,
    );

    const element = screen.getByTestId("flex-element");
    expect(element.className).toBe("flex gap-2 gap-x-4 gap-y-8");
  });

  it("passes additional props to the element", () => {
    render(
      <Flex aria-label="flex container" data-testid="flex-component">
        Test flex
      </Flex>,
    );
    const element = screen.getByTestId("flex-component");
    expect(element).toHaveAttribute("aria-label", "flex container");
  });

  it("combines custom className with generated classes", () => {
    render(
      <Flex className="custom-class" data-testid="flex-element">
        With custom class
      </Flex>,
    );
    const element = screen.getByTestId("flex-element");
    expect(element.className).toBe("flex custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(
      <Flex data-testid="flex-element" ref={ref}>
        Ref test
      </Flex>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBe(screen.getByTestId("flex-element"));
  });

  it("applies different combinations of props correctly", () => {
    render(
      <Flex align="center" data-testid="flex-element" direction="col" gap="4" justify="between" wrap="wrap">
        Combined props
      </Flex>,
    );

    const element = screen.getByTestId("flex-element");

    expect(element.className).toBe("flex flex-col items-center justify-between flex-wrap gap-4");
  });

  it("renders children correctly", () => {
    render(
      <Flex>
        <div data-testid="child-element">Child content</div>
      </Flex>,
    );

    expect(screen.getByTestId("child-element")).toBeInTheDocument();
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("renders Flex.Item correctly", () => {
    render(
      <Flex>
        <Flex.Item data-testid="flex-item-1">Item 1</Flex.Item>
        <Flex.Item data-testid="flex-item-2" flex="1">
          Item 2
        </Flex.Item>
        <Flex.Item data-testid="flex-item-3" flex="auto">
          Item 3
        </Flex.Item>
        <Flex.Item data-testid="flex-item-4" flex="none">
          Item 4
        </Flex.Item>
        <Flex.Item data-testid="flex-item-5" flex="initial">
          Item 5
        </Flex.Item>
      </Flex>,
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();

    const item1 = screen.getByTestId("flex-item-1");
    const item2 = screen.getByTestId("flex-item-2");
    const item3 = screen.getByTestId("flex-item-3");
    const item4 = screen.getByTestId("flex-item-4");
    const item5 = screen.getByTestId("flex-item-5");

    expect(item1.className).toBe("");
    expect(item2.className).toBe("flex-1");
    expect(item3.className).toBe("flex-auto");
    expect(item4.className).toBe("flex-none");
    expect(item5.className).toBe("flex-initial");
  });

  describe("Responsive behavior", () => {
    it("applies responsive direction classes", () => {
      render(
        <Flex data-testid="flex-element" direction={{ base: "col", md: "row" }}>
          Responsive direction
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe("flex flex-col md:flex-row");
    });

    it("applies responsive align classes", () => {
      render(
        <Flex align={{ base: "start", lg: "center" }} data-testid="flex-element">
          Responsive align
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe("flex items-start lg:items-center");
    });

    it("applies responsive justify classes", () => {
      render(
        <Flex data-testid="flex-element" justify={{ base: "start", md: "between", xl: "center" }}>
          Responsive justify
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe("flex justify-start md:justify-between xl:justify-center");
    });

    it("applies responsive gap classes", () => {
      render(
        <Flex data-testid="flex-element" gap={{ base: "2", sm: "4", lg: "6" }}>
          Responsive gap
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe("flex gap-2 sm:gap-4 lg:gap-6");
    });

    it("applies responsive gapX and gapY classes", () => {
      render(
        <Flex data-testid="flex-element" gapX={{ base: "2", md: "4" }} gapY={{ base: "1", md: "3" }}>
          Responsive gaps
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe("flex gap-x-2 md:gap-x-4 gap-y-1 md:gap-y-3");
    });

    it("applies responsive wrap classes", () => {
      render(
        <Flex data-testid="flex-element" wrap={{ base: "wrap", lg: "nowrap" }}>
          Responsive wrap
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe("flex flex-wrap lg:flex-nowrap");
    });

    it("applies responsive grow classes", () => {
      render(
        <Flex data-testid="flex-element" grow={{ base: "0", md: "1" }}>
          Responsive grow
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe("flex grow-0 md:grow-1");
    });

    it("handles boolean grow values in responsive objects", () => {
      render(
        <Flex data-testid="flex-element" grow={{ base: false, md: true }}>
          Responsive boolean grow
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe("flex grow-0 md:grow-1");
    });

    it("combines multiple responsive properties", () => {
      render(
        <Flex
          align={{ base: "start", md: "center" }}
          data-testid="flex-element"
          direction={{ base: "col", md: "row" }}
          gap={{ base: "2", lg: "4" }}
          justify={{ base: "start", md: "between" }}
        >
          Multiple responsive props
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(
        "flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-2 lg:gap-4",
      );
    });

    it("mixes responsive and non-responsive properties", () => {
      render(
        <Flex data-testid="flex-element" direction="row" gap={{ base: "2", md: "4" }} wrap="wrap">
          Mixed props
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe("flex flex-row flex-wrap gap-2 md:gap-4");
    });

    it("applies all breakpoints correctly", () => {
      render(
        <Flex
          data-testid="flex-element"
          direction={{ base: "col", sm: "col", md: "row", lg: "row-reverse", xl: "col-reverse", "2xl": "row" }}
        >
          All breakpoints
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(
        "flex flex-col sm:flex-col md:flex-row lg:flex-row-reverse xl:flex-col-reverse 2xl:flex-row",
      );
    });
  });
});
