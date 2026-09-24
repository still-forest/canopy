import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { Grid } from "@/layout";
import {
  GAPS,
  GRID_ALIGN_CONTENTS,
  GRID_ALIGNS,
  GRID_COLS,
  GRID_FLOWS,
  GRID_JUSTIFIES,
  GRID_JUSTIFY_ITEMS,
  GRID_ROWS,
} from "@/types";

// `className.toContain("grid-cols-3")` also matches "md:grid-cols-3", so it
// cannot tell a base class from a prefixed one. Compare exact class tokens.
const classesOf = (element: HTMLElement) => Array.from(element.classList);

describe("Grid", () => {
  it("renders with default props", () => {
    render(<Grid data-testid="grid-element">Content</Grid>);
    const element = screen.getByTestId("grid-element");

    expect(element.tagName).toBe("DIV");
    expect(classesOf(element)).toEqual(["grid"]);
  });

  it("renders with custom element type", () => {
    render(
      <Grid as="section" data-testid="grid-element">
        Content
      </Grid>,
    );
    const element = screen.getByTestId("grid-element");
    expect(element.tagName).toBe("SECTION");
    expect(classesOf(element)).toContain("grid");
  });

  it("applies the correct grid columns classes", () => {
    for (const cols of GRID_COLS) {
      const { rerender } = render(
        <Grid cols={cols} data-testid="grid-element">
          Columns {cols}
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(classesOf(element)).toEqual(["grid", `grid-cols-${cols}`]);
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
      expect(classesOf(element)).toEqual(["grid", `grid-rows-${rows}`]);
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
      expect(classesOf(element)).toEqual(["grid", `grid-flow-${flow}`]);
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
      expect(classesOf(screen.getByTestId("grid-element"))).toEqual(["grid", `gap-${gap}`]);
      rerender(<div />);
    }

    for (const gapX of GAPS) {
      const { rerender } = render(
        <Grid data-testid="grid-element" gapX={gapX}>
          GapX {gapX}
        </Grid>,
      );
      expect(classesOf(screen.getByTestId("grid-element"))).toEqual(["grid", `gap-x-${gapX}`]);
      rerender(<div />);
    }

    for (const gapY of GAPS) {
      const { rerender } = render(
        <Grid data-testid="grid-element" gapY={gapY}>
          GapY {gapY}
        </Grid>,
      );
      expect(classesOf(screen.getByTestId("grid-element"))).toEqual(["grid", `gap-y-${gapY}`]);
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
    expect(classesOf(element)).toEqual(["grid", "gap-2", "gap-x-4", "gap-y-8"]);
  });

  it("applies the correct alignment classes", () => {
    for (const align of GRID_ALIGNS) {
      const { rerender } = render(<Grid align={align} data-testid="grid-element" />);
      expect(classesOf(screen.getByTestId("grid-element"))).toEqual(["grid", `items-${align}`]);
      rerender(<div />);
    }

    for (const justify of GRID_JUSTIFIES) {
      const { rerender } = render(<Grid data-testid="grid-element" justify={justify} />);
      expect(classesOf(screen.getByTestId("grid-element"))).toEqual(["grid", `justify-${justify}`]);
      rerender(<div />);
    }

    for (const alignContent of GRID_ALIGN_CONTENTS) {
      const { rerender } = render(<Grid alignContent={alignContent} data-testid="grid-element" />);
      expect(classesOf(screen.getByTestId("grid-element"))).toEqual(["grid", `content-${alignContent}`]);
      rerender(<div />);
    }

    for (const justifyItems of GRID_JUSTIFY_ITEMS) {
      const { rerender } = render(<Grid data-testid="grid-element" justifyItems={justifyItems} />);
      expect(classesOf(screen.getByTestId("grid-element"))).toEqual(["grid", `justify-items-${justifyItems}`]);
      rerender(<div />);
    }
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
    expect(classesOf(element)).toEqual(["grid", "custom-class"]);
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

    expect(classesOf(screen.getByTestId("grid-element"))).toEqual([
      "grid",
      "grid-cols-3",
      "grid-rows-2",
      "gap-4",
      "grid-flow-row-dense",
    ]);
  });

  describe("responsive props", () => {
    it("treats a bare token as the base breakpoint, with no prefix", () => {
      render(<Grid cols="3" data-testid="grid-element" />);

      expect(classesOf(screen.getByTestId("grid-element"))).toEqual(["grid", "grid-cols-3"]);
    });

    it("emits one class per specified breakpoint, in mobile-first order", () => {
      render(<Grid cols={{ base: "1", md: "2", lg: "4" }} data-testid="grid-element" />);

      expect(classesOf(screen.getByTestId("grid-element"))).toEqual([
        "grid",
        "grid-cols-1",
        "md:grid-cols-2",
        "lg:grid-cols-4",
      ]);
    });

    it("emits nothing for omitted breakpoints", () => {
      render(<Grid cols={{ md: "2" }} data-testid="grid-element" />);

      expect(classesOf(screen.getByTestId("grid-element"))).toEqual(["grid", "md:grid-cols-2"]);
    });

    it("supports every breakpoint", () => {
      render(<Grid cols={{ base: "1", sm: "2", md: "3", lg: "4", xl: "6", "2xl": "12" }} data-testid="grid-element" />);

      expect(classesOf(screen.getByTestId("grid-element"))).toEqual([
        "grid",
        "grid-cols-1",
        "sm:grid-cols-2",
        "md:grid-cols-3",
        "lg:grid-cols-4",
        "xl:grid-cols-6",
        "2xl:grid-cols-12",
      ]);
    });

    it("applies responsive gaps, flow and alignment", () => {
      render(
        <Grid
          align={{ base: "start", md: "center" }}
          data-testid="grid-element"
          flow={{ base: "row", lg: "col" }}
          gap={{ base: "2", md: "8" }}
        />,
      );

      const classes = classesOf(screen.getByTestId("grid-element"));
      expect(classes).toEqual(
        expect.arrayContaining([
          "gap-2",
          "md:gap-8",
          "grid-flow-row",
          "lg:grid-flow-col",
          "items-start",
          "md:items-center",
        ]),
      );
    });

    it("lets className override a single breakpoint without clobbering the others", () => {
      render(<Grid className="md:grid-cols-6" cols={{ base: "1", md: "2", lg: "4" }} data-testid="grid-element" />);

      const classes = classesOf(screen.getByTestId("grid-element"));
      expect(classes).toContain("grid-cols-1");
      expect(classes).toContain("lg:grid-cols-4");
      expect(classes).toContain("md:grid-cols-6");
      expect(classes).not.toContain("md:grid-cols-2");
    });

    it("ignores undefined and empty maps", () => {
      render(<Grid cols={undefined} data-testid="grid-element" gap={{}} />);

      expect(classesOf(screen.getByTestId("grid-element"))).toEqual(["grid"]);
    });
  });
});
