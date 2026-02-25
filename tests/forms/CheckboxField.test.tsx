import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import { CheckboxField } from "@/forms";

describe("CheckboxField", () => {
  const handleClick = vi.fn();

  test("renders a CheckboxField", async () => {
    render(<CheckboxField checked={false} label="Test CheckboxField" name="test-checkbox" />);

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

    expect(checkbox.checked).toBe(false);
    expect(checkbox).not.toBeDisabled();

    const label = screen.getByText("Test CheckboxField");
    expect(label).toHaveAttribute("for", "test-checkbox");

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  test("renders a CheckboxField with value", async () => {
    render(<CheckboxField checked={false} label="Test CheckboxField" name="test-checkbox" value="abc1" />);

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

    expect(checkbox.checked).toBe(false);
    expect(checkbox).not.toBeDisabled();

    const label = screen.getByText("Test CheckboxField");
    expect(label).toHaveAttribute("for", "test-checkbox[abc1]");
  });

  test("renders a CheckboxField with change handler", async () => {
    render(
      <CheckboxField checked={false} label="Test CheckboxField" name="test-checkbox" onCheckedChange={handleClick} />,
    );

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

    expect(checkbox.checked).toBe(false);
    expect(checkbox).not.toBeDisabled();

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    expect(handleClick).toHaveBeenCalledWith(true);
  });
});
