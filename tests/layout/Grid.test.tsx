import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { Grid } from "@/layout";
import { GAPS, GRID_COLS, GRID_FLOWS, GRID_ROWS } from "@/types";

describe("Grid", () => {
  it("renders with default props", () => {
    render(<Grid data-testid="grid-element">Content</Grid>);
    const element = screen.getByTestId("grid-element");

    expect(element.tagName).toBe("DIV");
    expect(element.className).toBe("grid");
  });

  it("renders with custom element type", () => {
    render(
      <Grid as="section" data-testid="grid-element">
        Content
      </Grid>,
    );
    const element = screen.getByTestId("grid-element");
    expect(element.tagName).toBe("SECTION");
    expect(element.className).toBe("grid");
  });

  it("applies the correct grid columns classes", () => {
    for (const cols of GRID_COLS) {
      const { rerender } = render(
        <Grid cols={cols} data-testid="grid-element">
          Columns {cols}
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe(`grid grid-cols-${cols}`);
      rerender(<div />);
    }
  });

  it("applies the correct grid rows classes", () => {
    for (const rows of GRID_ROWS) {
      const { rerender } = render(
        <Grid data-testid="grid-element" rows={rows}>
          Rows {rows}
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe(`grid grid-rows-${rows}`);
      rerender(<div />);
    }
  });

  it("applies the correct grid flow classes", () => {
    for (const flow of GRID_FLOWS) {
      const { rerender } = render(
        <Grid data-testid="grid-element" flow={flow}>
          Flow {flow}
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe(`grid grid-flow-${flow}`);
      rerender(<div />);
    }
  });

  it("applies the correct gap classes", () => {
    for (const gap of GAPS) {
      const { rerender } = render(
        <Grid data-testid="grid-element" gap={gap}>
          Gap {gap}
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe(`grid gap-${gap}`);
      rerender(<div />);
    }

    for (const gapX of GAPS) {
      const { rerender } = render(
        <Grid data-testid="grid-element" gapX={gapX}>
          GapX {gapX}
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe(`grid gap-x-${gapX}`);
      rerender(<div />);
    }

    for (const gapY of GAPS) {
      const { rerender } = render(
        <Grid data-testid="grid-element" gapY={gapY}>
          GapY {gapY}
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe(`grid gap-y-${gapY}`);
      rerender(<div />);
    }
  });

  it("combines gap, gapX, and gapY correctly", () => {
    render(
      <Grid data-testid="grid-element" gap="2" gapX="4" gapY="8">
        Mixed gaps
      </Grid>,
    );

    const element = screen.getByTestId("grid-element");
    expect(element.className).toBe("grid gap-2 gap-x-4 gap-y-8");
  });

  it("passes additional props to the element", () => {
    render(
      <Grid aria-label="grid container" data-testid="grid-component">
        Test grid
      </Grid>,
    );
    const element = screen.getByTestId("grid-component");
    expect(element).toHaveAttribute("aria-label", "grid container");
  });

  it("combines custom className with generated classes", () => {
    render(
      <Grid className="custom-class" data-testid="grid-element">
        With custom class
      </Grid>,
    );
    const element = screen.getByTestId("grid-element");
    expect(element.className).toBe("grid custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(
      <Grid data-testid="grid-element" ref={ref}>
        Ref test
      </Grid>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBe(screen.getByTestId("grid-element"));
  });

  it("renders children correctly", () => {
    render(
      <Grid>
        <div data-testid="child-element">Child content</div>
      </Grid>,
    );

    expect(screen.getByTestId("child-element")).toBeInTheDocument();
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("applies multiple grid properties simultaneously", () => {
    render(
      <Grid cols="3" data-testid="grid-element" flow="row-dense" gap="4" rows="2">
        Combined grid properties
      </Grid>,
    );

    const element = screen.getByTestId("grid-element");

    expect(element.className).toBe("grid grid-cols-3 grid-rows-2 grid-flow-row-dense gap-4");
  });

  describe("Responsive behavior", () => {
    it("applies responsive columns classes", () => {
      render(
        <Grid cols={{ base: "1", md: "2", lg: "4" }} data-testid="grid-element">
          Responsive columns
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4");
    });

    it("applies responsive rows classes", () => {
      render(
        <Grid data-testid="grid-element" rows={{ base: "2", lg: "4" }}>
          Responsive rows
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe("grid grid-rows-2 lg:grid-rows-4");
    });

    it("applies responsive flow classes", () => {
      render(
        <Grid data-testid="grid-element" flow={{ base: "row", md: "col" }}>
          Responsive flow
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe("grid grid-flow-row md:grid-flow-col");
    });

    it("applies responsive gap classes", () => {
      render(
        <Grid data-testid="grid-element" gap={{ base: "2", sm: "4", lg: "8" }}>
          Responsive gap
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe("grid gap-2 sm:gap-4 lg:gap-8");
    });

    it("applies responsive gapX and gapY classes", () => {
      render(
        <Grid data-testid="grid-element" gapX={{ base: "2", md: "6" }} gapY={{ base: "1", md: "4" }}>
          Responsive gaps
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe("grid gap-x-2 md:gap-x-6 gap-y-1 md:gap-y-4");
    });

    it("combines multiple responsive properties", () => {
      render(
        <Grid
          cols={{ base: "1", md: "2", lg: "3" }}
          data-testid="grid-element"
          flow={{ base: "row", lg: "col" }}
          gap={{ base: "2", md: "4" }}
          rows={{ base: "2", md: "4" }}
        >
          Multiple responsive props
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 md:grid-rows-4 grid-flow-row lg:grid-flow-col gap-2 md:gap-4",
      );
    });

    it("mixes responsive and non-responsive properties", () => {
      render(
        <Grid cols={{ base: "1", md: "3" }} data-testid="grid-element" flow="row" gap="4">
          Mixed props
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe("grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4");
    });

    it("applies all breakpoints correctly", () => {
      render(
        <Grid cols={{ base: "1", sm: "2", md: "3", lg: "4", xl: "6", "2xl": "12" }} data-testid="grid-element">
          All breakpoints
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12",
      );
    });

    it("handles common responsive grid patterns", () => {
      render(
        <Grid cols={{ base: "1", sm: "2", lg: "4" }} data-testid="grid-element" gap={{ base: "4", lg: "6" }}>
          Common pattern
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6");
    });
  });
});
