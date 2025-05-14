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
    render(<RadioSelect options={OPTIONS} name="test" />);

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
        "aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
      );

      const labelElement = screen.getByText(label);
      expect(labelElement).toHaveAttribute("for", value);
      expect(labelElement.className).toBe(
        "flex select-none items-center gap-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 font-display font-normal text-base text-foreground",
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
    render(<RadioSelect options={OPTIONS} name="test" label="Test label" />);

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
    render(<RadioSelect options={OPTIONS} name="test" label="Test label" value="bart" />);

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
    render(<RadioSelect options={OPTIONS} name="test" label="Test label" onChange={onChange} />);

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
    render(<RadioSelect options={OPTIONS} name="test" label="Test label" onChange={onChange} value="bart" />);

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(OPTIONS.length);

    fireEvent.click(radioButtons[0]);
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.click(radioButtons[1]);
    expect(onChange).toHaveBeenCalledWith("lisa");

    fireEvent.click(radioButtons[2]);
    expect(onChange).toHaveBeenCalledWith("maggie");
  });
});
