import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { RadioSelect } from "@/forms";

describe("RadioSelect", () => {
  const OPTIONS = [
    { value: "bart", label: "Bart" },
    { value: "lisa", label: "Lisa" },
    { value: "maggie", label: "Maggie" },
  ];

  it("renders a set of options", () => {
    render(<RadioSelect name="test" options={OPTIONS} />);

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(OPTIONS.length);

    radioButtons.forEach((radioButton, index) => {
      const { value, label } = OPTIONS[index];

      expect(radioButton).toHaveAttribute("value", value);
      expect(radioButton).toHaveAttribute("id", value);
      expect(radioButton).toHaveAttribute("aria-checked", "false");
      expect(radioButton).toHaveAttribute("data-state", "unchecked");
      expect(radioButton).toHaveAttribute("data-slot", "radio-group-item");
      expect(radioButton.className).toBe(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 bg-input dark:bg-input",
      );

      const labelElement = screen.getByText(label);
      expect(labelElement).toHaveAttribute("for", value);
      expect(labelElement.className).toBe(
        "flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 font-display font-normal text-foreground text-base",
      );
    });

    fireEvent.click(radioButtons[0]);
    expect(radioButtons[0]).toHaveAttribute("aria-checked", "true");
    expect(radioButtons[0]).toHaveAttribute("data-state", "checked");
    expect(radioButtons[1]).toHaveAttribute("aria-checked", "false");
    expect(radioButtons[1]).toHaveAttribute("data-state", "unchecked");
    expect(radioButtons[2]).toHaveAttribute("aria-checked", "false");
    expect(radioButtons[2]).toHaveAttribute("data-state", "unchecked");

    fireEvent.click(radioButtons[1]);
    expect(radioButtons[0]).toHaveAttribute("aria-checked", "false");
    expect(radioButtons[0]).toHaveAttribute("data-state", "unchecked");
    expect(radioButtons[1]).toHaveAttribute("aria-checked", "true");
    expect(radioButtons[1]).toHaveAttribute("data-state", "checked");
    expect(radioButtons[2]).toHaveAttribute("aria-checked", "false");
    expect(radioButtons[2]).toHaveAttribute("data-state", "unchecked");

    fireEvent.click(radioButtons[2]);
    expect(radioButtons[0]).toHaveAttribute("aria-checked", "false");
    expect(radioButtons[0]).toHaveAttribute("data-state", "unchecked");
    expect(radioButtons[1]).toHaveAttribute("aria-checked", "false");
    expect(radioButtons[1]).toHaveAttribute("data-state", "unchecked");
    expect(radioButtons[2]).toHaveAttribute("aria-checked", "true");
    expect(radioButtons[2]).toHaveAttribute("data-state", "checked");
  });

  it("renders a label", () => {
    render(<RadioSelect label="Test label" name="test" options={OPTIONS} />);

    const label = screen.getByText("Test label");
    expect(label).toBeInTheDocument();

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(OPTIONS.length);

    radioButtons.forEach((radioButton) => {
      expect(radioButton).toHaveAttribute("aria-checked", "false");
      expect(radioButton).toHaveAttribute("data-state", "unchecked");
    });
  });

  it("renders with a selected option", () => {
    render(<RadioSelect label="Test label" name="test" options={OPTIONS} value="bart" />);

    const label = screen.getByText("Test label");
    expect(label).toBeInTheDocument();

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(OPTIONS.length);

    radioButtons.forEach((radioButton, index) => {
      const { value } = OPTIONS[index];

      expect(radioButton).toHaveAttribute("aria-checked", value === "bart" ? "true" : "false");
      expect(radioButton).toHaveAttribute("data-state", value === "bart" ? "checked" : "unchecked");
    });
  });

  it("calls onChange when an option is selected", () => {
    const onChange = vi.fn();
    render(<RadioSelect label="Test label" name="test" onChange={onChange} options={OPTIONS} />);

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(OPTIONS.length);

    fireEvent.click(radioButtons[0]);
    expect(onChange).toHaveBeenCalledWith("bart");

    fireEvent.click(radioButtons[1]);
    expect(onChange).toHaveBeenCalledWith("lisa");

    fireEvent.click(radioButtons[2]);
    expect(onChange).toHaveBeenCalledWith("maggie");
  });

  it("does not call onChange when an option is already selected", () => {
    const onChange = vi.fn();
    render(<RadioSelect label="Test label" name="test" onChange={onChange} options={OPTIONS} value="bart" />);

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(OPTIONS.length);

    fireEvent.click(radioButtons[0]);
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.click(radioButtons[1]);
    expect(onChange).toHaveBeenCalledWith("lisa");

    fireEvent.click(radioButtons[2]);
    expect(onChange).toHaveBeenCalledWith("maggie");
  });

  it("renders an error message", () => {
    render(<RadioSelect error="What'd you do?!" label="Test label" name="test" options={OPTIONS} />);

    const error = screen.getByText("What'd you do?!");
    expect(error).toBeInTheDocument();
  });
});
