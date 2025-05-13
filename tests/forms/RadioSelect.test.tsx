import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { RadioSelect } from "@/forms";

describe("RadioSelect", () => {
  const OPTIONS = [
    { value: "homer", label: "Homer" },
    { value: "marge", label: "Marge" },
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
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
      );

      const labelElement = screen.getByText(label);
      expect(labelElement).toHaveAttribute("for", value);
      expect(labelElement.className).toBe(
        "flex select-none items-center gap-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 font-display font-normal text-base text-foreground",
      );
    });
  });
});
