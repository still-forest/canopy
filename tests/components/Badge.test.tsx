import { Badge } from "@/components/Badge";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

describe("Badge", () => {
  const EXPECTED_DEFAULT_CLASSES =
    "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90 cursor-default";

  test("should render a badge", () => {
    render(<Badge label="Badge" />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
    expect(badge.className).toBe(EXPECTED_DEFAULT_CLASSES);
  });

  test("should render a badge with a clickable badge", async () => {
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
    expect(badge.className).toContain(EXPECTED_DEFAULT_CLASSES + " font-mono");
  });
});
