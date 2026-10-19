import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { Grid } from "@/layout";
import { GRID_LINES, GRID_SPANS } from "@/types";

const classesOf = (element: HTMLElement) => Array.from(element.classList);

describe("Grid.Item", () => {
  it("renders a bare div with no classes by default", () => {
    render(<Grid.Item data-testid="item">Content</Grid.Item>);
    const element = screen.getByTestId("item");

    expect(element.tagName).toBe("DIV");
    expect(classesOf(element)).toEqual([]);
    expect(element).toHaveTextContent("Content");
  });

  it("renders with a custom element type", () => {
    render(<Grid.Item as="article" data-testid="item" />);

    expect(screen.getByTestId("item").tagName).toBe("ARTICLE");
  });

  it("applies the correct span classes", () => {
    for (const span of GRID_SPANS) {
      const { rerender } = render(<Grid.Item colSpan={span} data-testid="item" />);
      expect(classesOf(screen.getByTestId("item"))).toEqual([`col-span-${span}`]);
      rerender(<div />);
    }

    for (const span of GRID_SPANS) {
      const { rerender } = render(<Grid.Item data-testid="item" rowSpan={span} />);
      expect(classesOf(screen.getByTestId("item"))).toEqual([`row-span-${span}`]);
      rerender(<div />);
    }
  });

  it("applies the correct start-line classes", () => {
    for (const line of GRID_LINES) {
      const { rerender } = render(<Grid.Item colStart={line} data-testid="item" />);
      expect(classesOf(screen.getByTestId("item"))).toEqual([`col-start-${line}`]);
      rerender(<div />);
    }

    for (const line of GRID_LINES) {
      const { rerender } = render(<Grid.Item data-testid="item" rowStart={line} />);
      expect(classesOf(screen.getByTestId("item"))).toEqual([`row-start-${line}`]);
      rerender(<div />);
    }
  });

  it("applies responsive spans in mobile-first order", () => {
    render(<Grid.Item colSpan={{ base: "12", md: "6", lg: "3" }} data-testid="item" />);

    expect(classesOf(screen.getByTestId("item"))).toEqual(["col-span-12", "md:col-span-6", "lg:col-span-3"]);
  });

  it("combines responsive spans and start lines", () => {
    render(<Grid.Item colSpan={{ base: "full", md: "6" }} colStart={{ md: "2" }} data-testid="item" rowSpan="2" />);

    expect(classesOf(screen.getByTestId("item"))).toEqual([
      "col-span-full",
      "md:col-span-6",
      "row-span-2",
      "md:col-start-2",
    ]);
  });

  it("combines custom className with generated classes", () => {
    render(<Grid.Item className="custom-class" colSpan="4" data-testid="item" />);

    expect(classesOf(screen.getByTestId("item"))).toEqual(["col-span-4", "custom-class"]);
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Grid.Item data-testid="item" ref={ref} />);

    expect(ref.current).toBe(screen.getByTestId("item"));
  });

  it("passes additional props to the element", () => {
    render(<Grid.Item aria-label="cell" data-testid="item" />);

    expect(screen.getByTestId("item")).toHaveAttribute("aria-label", "cell");
  });

  it("composes inside a Grid", () => {
    render(
      <Grid cols={{ base: "1", md: "12" }} data-testid="grid" gap="4">
        <Grid.Item colSpan={{ base: "1", md: "8" }} data-testid="main" />
        <Grid.Item colSpan={{ base: "1", md: "4" }} data-testid="aside" />
      </Grid>,
    );

    expect(classesOf(screen.getByTestId("grid"))).toEqual(["grid", "grid-cols-1", "md:grid-cols-12", "gap-4"]);
    expect(classesOf(screen.getByTestId("main"))).toEqual(["col-span-1", "md:col-span-8"]);
    expect(classesOf(screen.getByTestId("aside"))).toEqual(["col-span-1", "md:col-span-4"]);
  });
});
