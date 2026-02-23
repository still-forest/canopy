import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import { Input } from "@/forms/inputs/Input";

describe("Input", () => {
  test("renders an input element", () => {
    render(<Input name="test" />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input.className).toBe("input");
  });

  test("uses id when provided", () => {
    render(<Input id="my-id" name="my-name" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "my-id");
    expect(input).toHaveAttribute("name", "my-name");
  });

  test("falls back to name for id when id is not provided", () => {
    render(<Input name="my-name" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "my-name");
    expect(input).toHaveAttribute("name", "my-name");
  });

  test("accepts className", () => {
    render(<Input className="custom-class" name="test" />);

    const input = screen.getByRole("textbox");
    expect(input.className).toBe("input custom-class");
  });

  test("spreads additional props", () => {
    render(<Input data-testid="my-input" name="test" placeholder="Enter text" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("placeholder", "Enter text");
    expect(input).toHaveAttribute("data-testid", "my-input");
  });

  test("renders with default size md (no size class)", () => {
    render(<Input name="test" />);

    const input = screen.getByRole("textbox");
    expect(input.className).toBe("input");
  });

  test("renders with size sm", () => {
    render(<Input name="test" size="sm" />);

    const input = screen.getByRole("textbox");
    expect(input.className).toBe("input input--sm");
  });

  test("renders with size lg", () => {
    render(<Input name="test" size="lg" />);

    const input = screen.getByRole("textbox");
    expect(input.className).toBe("input input--lg");
  });
});
