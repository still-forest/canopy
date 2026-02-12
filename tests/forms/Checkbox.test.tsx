import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import { Checkbox } from "@/forms";

describe("Checkbox", () => {
  const handleClick = vi.fn();

  test("renders a Checkbox", async () => {
    render(<Checkbox checked={false} label="Test Checkbox" name="test-checkbox" />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-checked", "false");
    expect(checkbox).toHaveAttribute("data-unchecked", "");
    expect(checkbox).not.toBeDisabled();
    expect(checkbox).toHaveClass(
      "border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground data-checked:border-primary focus-visible:border-ring focus-visible:ring-ring/50 shrink-0 rounded-[4px] border shadow-xs outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50",
    );

    const label = screen.getByText("Test Checkbox");
    expect(label).toHaveAttribute("for", "test-checkbox");
    expect(label).toHaveClass(
      "font-display font-normal text-foreground text-base cursor-pointer flex items-center select-none",
    );

    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("aria-checked", "true");
    expect(checkbox).toHaveAttribute("data-checked", "");
  });

  test("renders a Checkbox with value", async () => {
    render(<Checkbox checked={false} label="Test Checkbox" name="test-checkbox" value="abc1" />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-checked", "false");
    expect(checkbox).toHaveAttribute("data-unchecked", "");
    expect(checkbox).not.toBeDisabled();

    const label = screen.getByText("Test Checkbox");
    expect(label).toHaveAttribute("for", "test-checkbox[abc1]");
  });

  test("renders a Checkbox with change handler", async () => {
    render(<Checkbox checked={false} label="Test Checkbox" name="test-checkbox" onCheckedChange={handleClick} />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-checked", "false");
    expect(checkbox).toHaveAttribute("data-unchecked", "");
    expect(checkbox).not.toBeDisabled();

    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("aria-checked", "true");
    expect(checkbox).toHaveAttribute("data-checked", "");
    expect(handleClick).toHaveBeenCalledWith(true);
  });
});
