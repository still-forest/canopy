import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import { Button } from "@/buttons";

describe("Button", () => {
  test("renders a Button with an onClick action", async () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).not.toBeDisabled();

    fireEvent.click(screen.getByText("Test Button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders a disabled Button", async () => {
    render(<Button disabled={true}>Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("renders a Button with submit type", async () => {
    render(<Button type="submit">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  test("renders a Button with reset type", async () => {
    render(<Button type="reset">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "reset");
  });

  test("renders a Button of size xs", async () => {
    render(<Button size="xs">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveClass("h-6", "text-xs");
  });

  test("renders a Button of size sm", async () => {
    render(<Button size="sm">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveClass("h-8", "text-sm");
  });

  test("renders a Button of size md", async () => {
    render(<Button size="md">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveClass("h-9", "text-sm");
  });

  test("renders a Button of size lg", async () => {
    render(<Button size="lg">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveClass("h-10", "text-sm");
  });

  test("renders a Button of size xl", async () => {
    render(<Button size="xl">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveClass("h-11", "text-lg");
  });

  test("renders a Button of size default", async () => {
    render(<Button>Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveClass("h-9", "text-sm");
  });
});
