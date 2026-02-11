import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import { Button } from "@/forms";

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
    expect(screen.getByRole("button")).toHaveClass(
      "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-3 aria-invalid:ring-3 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground hover:bg-primary/80 h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
    );
  });

  test("renders a Button of size sm", async () => {
    render(<Button size="sm">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveClass(
      "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground hover:bg-primary/80 h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
    );
  });

  test("renders a Button of size md", async () => {
    render(<Button size="md">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveClass("h-9 px-4 py-2 has-[>svg]:px-3 text-sm");
  });

  test("renders a Button of size lg", async () => {
    render(<Button size="lg">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveClass(
      "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground hover:bg-primary/80 h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
    );
  });

  test("renders a Button of size xl", async () => {
    render(<Button size="xl">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveClass("h-11 px-8 py-3 has-[>svg]:px-5 text-lg");
  });

  test("renders an unstyled Button", async () => {
    render(<Button variant="unstyled">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveClass("h-auto p-0 text-sm");
    expect(screen.getByRole("button")).toHaveClass(
      "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 justify-start",
    );
  });

  test("renders a Button of size default", async () => {
    render(<Button size="default">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveClass("h-9 px-4 py-2 has-[>svg]:px-3 text-sm");
  });
});
