import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { Grid } from "@/primitives";
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
        <Grid rows={rows} data-testid="grid-element">
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
        <Grid flow={flow} data-testid="grid-element">
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
        <Grid gap={gap} data-testid="grid-element">
          Gap {gap}
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe(`grid gap-${gap}`);
      rerender(<div />);
    }

    for (const gapX of GAPS) {
      const { rerender } = render(
        <Grid gapX={gapX} data-testid="grid-element">
          GapX {gapX}
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toBe(`grid gap-x-${gapX}`);
      rerender(<div />);
    }

    for (const gapY of GAPS) {
      const { rerender } = render(
        <Grid gapY={gapY} data-testid="grid-element">
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
      <Grid gap="2" gapX="4" gapY="8" data-testid="grid-element">
        Mixed gaps
      </Grid>,
    );

    const element = screen.getByTestId("grid-element");
    expect(element.className).toBe("grid gap-2 gap-x-4 gap-y-8");
  });

  it("passes additional props to the element", () => {
    render(
      <Grid data-testid="grid-component" aria-label="grid container">
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
      <Grid ref={ref} data-testid="grid-element">
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
      <Grid cols="3" rows="2" flow="row-dense" gap="4" data-testid="grid-element">
        Combined grid properties
      </Grid>,
    );

    const element = screen.getByTestId("grid-element");

    expect(element.className).toBe("grid grid-cols-3 grid-rows-2 gap-4 grid-flow-row-dense");
  });
});
