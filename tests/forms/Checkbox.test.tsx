import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import { Checkbox } from "@/forms";

describe("Checkbox", () => {
  const handleClick = vi.fn();

  test("renders a Checkbox", async () => {
    render(<Checkbox checked={false} label="Test Checkbox" name="test-checkbox" />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAccessibleName("Test Checkbox");
    expect(checkbox).toHaveAttribute("type", "button");
    expect(checkbox).toHaveAttribute("id", "test-checkbox");
    expect(checkbox).toHaveAttribute("aria-checked", "false");
    expect(checkbox).toHaveAttribute("data-state", "unchecked");
    expect(checkbox).toHaveAttribute("value", "test-checkbox");
    expect(checkbox).not.toBeDisabled();
    expect(checkbox).toHaveClass(
      "border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
    );

    const label = screen.getByText("Test Checkbox");
    expect(label).toHaveAttribute("for", "test-checkbox");
    expect(label.className).toBe(
      "flex select-none items-center gap-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 font-display font-normal text-base text-foreground cursor-pointer",
    );

    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("aria-checked", "true");
    expect(checkbox).toHaveAttribute("data-state", "checked");
  });

  test("renders a Checkbox with value", async () => {
    render(<Checkbox checked={false} label="Test Checkbox" name="test-checkbox" value="abc1" />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAccessibleName("Test Checkbox");
    expect(checkbox).toHaveAttribute("type", "button");
    expect(checkbox).toHaveAttribute("id", "test-checkbox[abc1]");
    expect(checkbox).toHaveAttribute("aria-checked", "false");
    expect(checkbox).toHaveAttribute("data-state", "unchecked");
    expect(checkbox).toHaveAttribute("value", "abc1");
    expect(checkbox).not.toBeDisabled();

    const label = screen.getByText("Test Checkbox");
    expect(label).toHaveAttribute("for", "test-checkbox[abc1]");
  });

  test("renders a Checkbox with change handler", async () => {
    render(<Checkbox checked={false} label="Test Checkbox" name="test-checkbox" onCheckedChange={handleClick} />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAccessibleName("Test Checkbox");
    expect(checkbox).toHaveAttribute("aria-checked", "false");
    expect(checkbox).toHaveAttribute("data-state", "unchecked");
    expect(checkbox).not.toBeDisabled();

    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("aria-checked", "true");
    expect(checkbox).toHaveAttribute("data-state", "checked");
    expect(handleClick).toHaveBeenCalledWith(true);
  });
});
