import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import { Textarea } from "@/forms/inputs/Textarea";

describe("Textarea", () => {
  test("renders a textarea element", () => {
    render(<Textarea />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe("TEXTAREA");
  });

  test("has data-slot attribute", () => {
    render(<Textarea />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("data-slot", "textarea");
  });

  test("applies default className", () => {
    render(<Textarea />);

    const textarea = screen.getByRole("textbox");
    expect(textarea.className).toBe("textarea");
  });

  test("accepts custom className", () => {
    render(<Textarea className="custom-class" />);

    const textarea = screen.getByRole("textbox");
    expect(textarea.className).toBe("textarea custom-class");
  });

  test("forwards placeholder prop", () => {
    render(<Textarea placeholder="Enter text here" />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("placeholder", "Enter text here");
  });

  test("forwards value and onChange props", () => {
    const handleChange = vi.fn();
    render(<Textarea onChange={handleChange} value="hello" />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveValue("hello");

    fireEvent.change(textarea, { target: { value: "world" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("spreads additional props", () => {
    render(<Textarea data-testid="my-textarea" rows={5} />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("rows", "5");
    expect(textarea).toHaveAttribute("data-testid", "my-textarea");
  });
});
