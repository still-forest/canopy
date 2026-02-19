import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import { Badge } from "@/components/Badge";
import { TAILWIND_COLORS } from "@/types/color";

describe("Badge", () => {
  test("should render a badge", () => {
    render(<Badge label="Badge" />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
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
    render(<Badge className="font-mono" label="Badge" />);

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
    expect(badge.className).toContain("bg-muted");
    expect(badge.className).toContain("text-muted-foreground");
    expect(badge.className).not.toContain("bg-primary");
    expect(badge.className).not.toContain("text-primary-foreground");
  });

  test("should render a badge with a custom color", () => {
    for (const color of TAILWIND_COLORS) {
      render(<Badge color={color} label={color} />);
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
    expect(() => render(<Badge color="red" label="Badge" variant="secondary" />)).toThrow(
      "Color red is not allowed for variant 'secondary'. Only default and outline variants support color.",
    );
  });

  test("should render with children", () => {
    render(
      <Badge>
        <span>A badge with children</span>
      </Badge>,
    );
    const badge = screen.getByText("A badge with children");
    expect(badge).toBeInTheDocument();
  });

  test("should throw an error if both label and children are not provided", () => {
    expect(() => render(<Badge />)).toThrow("Badge must have either a label or children");
  });
});
