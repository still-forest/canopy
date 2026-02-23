import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import { Checkbox } from "@/forms/inputs/Checkbox";

describe("Checkbox", () => {
  test("renders with checkbox class and data-slot", () => {
    render(<Checkbox name="test" onCheckedChange={() => {}} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.className).toBe("checkbox");
    expect(checkbox).toHaveAttribute("data-slot", "checkbox");
  });

  test("accepts className", () => {
    render(<Checkbox className="custom-class" name="test" onCheckedChange={() => {}} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.className).toBe("checkbox custom-class");
  });

  test("falls back to name for id when id is not provided", () => {
    render(<Checkbox name="my-name" onCheckedChange={() => {}} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("id", "my-name");
    expect(checkbox).toHaveAttribute("name", "my-name");
  });

  test("uses id when provided", () => {
    render(<Checkbox id="my-id" name="my-name" onCheckedChange={() => {}} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("id", "my-id");
    expect(checkbox).toHaveAttribute("name", "my-name");
  });

  test("calls onCheckedChange with true when checked", async () => {
    const onCheckedChange = vi.fn();
    render(<Checkbox name="test" onCheckedChange={onCheckedChange} />);

    await userEvent.click(screen.getByRole("checkbox"));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  test("calls onCheckedChange with false when unchecked", async () => {
    const onCheckedChange = vi.fn();
    render(<Checkbox defaultChecked name="test" onCheckedChange={onCheckedChange} />);

    await userEvent.click(screen.getByRole("checkbox"));
    expect(onCheckedChange).toHaveBeenCalledWith(false);
  });

  test("click does not bubble to parent", async () => {
    const parentClick = vi.fn();
    const onCheckedChange = vi.fn();
    render(
      <div onClick={parentClick} role="button">
        <Checkbox name="test" onCheckedChange={onCheckedChange} />
      </div>,
    );

    await userEvent.click(screen.getByRole("checkbox"));
    expect(onCheckedChange).toHaveBeenCalled();
    expect(parentClick).not.toHaveBeenCalled();
  });

  test("spreads additional props", () => {
    render(<Checkbox data-testid="my-checkbox" name="test" onCheckedChange={() => {}} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("data-testid", "my-checkbox");
  });
});
