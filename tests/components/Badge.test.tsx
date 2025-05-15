import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import { Badge } from "@/components/Badge";
import { TAILWIND_COLORS } from "@/types/color";

describe("Badge", () => {
  const EXPECTED_DEFAULT_CLASSES =
    "bg-primary text-primary-foreground [a&]:hover:bg-primary/90 cursor-default inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent";

  test("should render a badge", () => {
    render(<Badge label="Badge" />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
    expect(badge.className).toBe(EXPECTED_DEFAULT_CLASSES);
  });

  test("should render a clickable badge", async () => {
    const onClick = vi.fn();

    render(<Badge label="Badge" onClick={onClick} />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
    expect(badge.className).toContain("cursor-pointer");
    expect(badge.className).not.toContain("cursor-default");

    userEvent.click(badge);

    await waitFor(() => {
      expect(onClick).toHaveBeenCalled();
    });
  });

  test("should render a badge with a custom className", () => {
    render(<Badge label="Badge" className="font-mono" />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
    expect(badge.className).toContain("font-mono");
  });

  test("should render a badge with a secondary variant", () => {
    render(<Badge label="Badge" variant="secondary" />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
    expect(badge.className).toContain("bg-secondary");
    expect(badge.className).toContain("text-secondary-foreground");
    expect(badge.className).not.toContain("bg-primary");
    expect(badge.className).not.toContain("text-primary-foreground");
  });

  test("should render a badge with a destructive variant", () => {
    render(<Badge label="Badge" variant="destructive" />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
    expect(badge.className).toContain("bg-destructive");
    expect(badge.className).toContain("text-white");
    expect(badge.className).not.toContain("bg-primary");
    expect(badge.className).not.toContain("text-primary-foreground");
  });

  test("should render a badge with an outline variant", () => {
    render(<Badge label="Badge" variant="outline" />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
    expect(badge.className).toContain("bg-accent");
    expect(badge.className).toContain("text-accent-foreground");
    expect(badge.className).not.toContain("bg-primary");
    expect(badge.className).not.toContain("text-primary-foreground");
  });

  test("should render a badge with a custom color", () => {
    for (const color of TAILWIND_COLORS) {
      render(<Badge label={color} color={color} />);
      const badge = screen.getByText(color);

      if (color === "white") {
        expect(badge.className).toContain("bg-white text-black border-1 border-black");
      } else if (color === "black") {
        expect(badge.className).toContain("bg-black");
        expect(badge.className).toContain("text-white");
      } else {
        expect(badge.className).toContain(`bg-${color}-500`);
      }
    }
  });

  test("should throw an error if color is used with a non-outline variant", () => {
    expect(() => render(<Badge label="Badge" color="red" variant="secondary" />)).toThrow(
      "Color red is not allowed for variant 'secondary'. Only default and outline variants support color.",
    );
  });
});
