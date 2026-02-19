import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { RadioField } from "@/forms";

describe("RadioField", () => {
  const OPTIONS = [
    { value: "bart", label: "Bart" },
    { value: "lisa", label: "Lisa" },
    { value: "maggie", label: "Maggie" },
  ];

  it("renders a set of options", () => {
    render(<RadioField name="test" options={OPTIONS} />);

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(OPTIONS.length);

    radioButtons.forEach((radioButton, index) => {
      const { label } = OPTIONS[index];

      expect(radioButton).toHaveAttribute("aria-checked", "false");
      expect(radioButton).toHaveAttribute("data-unchecked", "");
      expect(radioButton).toHaveAttribute("data-slot", "radio-group-item");

      const labelElement = screen.getByText(label);
      expect(labelElement).toBeInTheDocument();
    });

    fireEvent.click(radioButtons[0]);
    expect(radioButtons[0]).toHaveAttribute("aria-checked", "true");
    expect(radioButtons[0]).toHaveAttribute("data-checked", "");
    expect(radioButtons[1]).toHaveAttribute("aria-checked", "false");
    expect(radioButtons[1]).toHaveAttribute("data-unchecked", "");
    expect(radioButtons[2]).toHaveAttribute("aria-checked", "false");
    expect(radioButtons[2]).toHaveAttribute("data-unchecked", "");

    fireEvent.click(radioButtons[1]);
    expect(radioButtons[0]).toHaveAttribute("aria-checked", "false");
    expect(radioButtons[0]).toHaveAttribute("data-unchecked", "");
    expect(radioButtons[1]).toHaveAttribute("aria-checked", "true");
    expect(radioButtons[1]).toHaveAttribute("data-checked", "");
    expect(radioButtons[2]).toHaveAttribute("aria-checked", "false");
    expect(radioButtons[2]).toHaveAttribute("data-unchecked", "");

    fireEvent.click(radioButtons[2]);
    expect(radioButtons[0]).toHaveAttribute("aria-checked", "false");
    expect(radioButtons[0]).toHaveAttribute("data-unchecked", "");
    expect(radioButtons[1]).toHaveAttribute("aria-checked", "false");
    expect(radioButtons[1]).toHaveAttribute("data-unchecked", "");
    expect(radioButtons[2]).toHaveAttribute("aria-checked", "true");
    expect(radioButtons[2]).toHaveAttribute("data-checked", "");
  });

  it("renders a label", () => {
    render(<RadioField label="Test label" name="test" options={OPTIONS} />);

    const label = screen.getByText("Test label");
    expect(label).toBeInTheDocument();

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(OPTIONS.length);

    radioButtons.forEach((radioButton) => {
      expect(radioButton).toHaveAttribute("aria-checked", "false");
      expect(radioButton).toHaveAttribute("data-unchecked", "");
    });
  });

  it("renders with a selected option", () => {
    render(<RadioField label="Test label" name="test" options={OPTIONS} value="bart" />);

    const label = screen.getByText("Test label");
    expect(label).toBeInTheDocument();

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(OPTIONS.length);

    radioButtons.forEach((radioButton, index) => {
      const { value } = OPTIONS[index];

      expect(radioButton).toHaveAttribute("aria-checked", value === "bart" ? "true" : "false");
      if (value === "bart") {
        expect(radioButton).toHaveAttribute("data-checked", "");
      } else {
        expect(radioButton).toHaveAttribute("data-unchecked", "");
      }
    });
  });

  it("calls onChange when an option is selected", () => {
    const onChange = vi.fn();
    render(<RadioField label="Test label" name="test" onChange={onChange} options={OPTIONS} />);

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(OPTIONS.length);

    fireEvent.click(radioButtons[0]);
    expect(onChange).toHaveBeenCalledWith("bart", expect.anything());

    fireEvent.click(radioButtons[1]);
    expect(onChange).toHaveBeenCalledWith("lisa", expect.anything());

    fireEvent.click(radioButtons[2]);
    expect(onChange).toHaveBeenCalledWith("maggie", expect.anything());
  });

  it("does not call onChange when an option is already selected", () => {
    const onChange = vi.fn();
    render(<RadioField label="Test label" name="test" onChange={onChange} options={OPTIONS} value="bart" />);

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(OPTIONS.length);

    fireEvent.click(radioButtons[0]);
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.click(radioButtons[1]);
    expect(onChange).toHaveBeenCalledWith("lisa", expect.anything());

    fireEvent.click(radioButtons[2]);
    expect(onChange).toHaveBeenCalledWith("maggie", expect.anything());
  });

  it("renders an error message", () => {
    render(<RadioField error="What'd you do?!" label="Test label" name="test" options={OPTIONS} />);

    const error = screen.getByText("What'd you do?!");
    expect(error).toBeInTheDocument();
  });
});
