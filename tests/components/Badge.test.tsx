import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Badge } from "@/components/Badge";

describe("Badge", () => {
  test("should render a badge", () => {
    render(<Badge label="Badge" />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
  });

  test("should render a badge with a custom className", () => {
    render(<Badge className="font-mono" label="Badge" />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
    expect(badge.className).toBe("badge font-mono");
  });

  test("should render a badge with a secondary variant", () => {
    render(<Badge label="Badge" variant="secondary" />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
    expect(badge.className).toBe("badge badge-secondary");
  });

  test("should render a badge with a danger variant", () => {
    render(<Badge label="Badge" variant="danger" />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
    expect(badge.className).toBe("badge badge-danger");
  });

  test("should render a badge with an outline style", () => {
    render(<Badge label="Badge" outline variant="primary" />);

    const badge = screen.getByText("Badge");

    expect(badge).toBeInTheDocument();
    expect(badge.className).toBe("badge badge-primary badge--outline");
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
    expect(() => render(<Badge />)).toThrow("Badge must have either a label or children, but not both");
  });
});
