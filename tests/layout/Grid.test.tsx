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
    expect(element.className).toContain("grid");
  });

  it("renders with custom element type", () => {
    render(
      <Grid as="section" data-testid="grid-element">
        Content
      </Grid>,
    );
    const element = screen.getByTestId("grid-element");
    expect(element.tagName).toBe("SECTION");
    expect(element.className).toContain("grid");
  });

  it("applies the correct grid columns classes", () => {
    for (const cols of GRID_COLS) {
      const { rerender } = render(
        <Grid cols={cols} data-testid="grid-element">
          Columns {cols}
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toContain("grid");
      expect(element.className).toContain(`grid-cols-${cols}`);
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
      expect(element.className).toContain("grid");
      expect(element.className).toContain(`grid-rows-${rows}`);
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
      expect(element.className).toContain("grid");
      expect(element.className).toContain(`grid-flow-${flow}`);
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
      expect(element.className).toContain("grid");
      expect(element.className).toContain(`gap-${gap}`);
      rerender(<div />);
    }

    for (const gapX of GAPS) {
      const { rerender } = render(
        <Grid data-testid="grid-element" gapX={gapX}>
          GapX {gapX}
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toContain("grid");
      expect(element.className).toContain(`gap-x-${gapX}`);
      rerender(<div />);
    }

    for (const gapY of GAPS) {
      const { rerender } = render(
        <Grid data-testid="grid-element" gapY={gapY}>
          GapY {gapY}
        </Grid>,
      );
      const element = screen.getByTestId("grid-element");
      expect(element.className).toContain("grid");
      expect(element.className).toContain(`gap-y-${gapY}`);
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
    expect(element.className).toContain("grid");
    expect(element.className).toContain("gap-2");
    expect(element.className).toContain("gap-x-4");
    expect(element.className).toContain("gap-y-8");
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
    expect(element.className).toContain("grid");
    expect(element.className).toContain("custom-class");
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

    expect(element.className).toContain("grid");
    expect(element.className).toContain("grid-cols-3");
    expect(element.className).toContain("grid-rows-2");
    expect(element.className).toContain("gap-4");
    expect(element.className).toContain("grid-flow-row-dense");
  });
});
