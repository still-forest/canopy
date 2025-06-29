import { render, screen } from "@testing-library/react";
import { EXPECTED_BASE_INPUT_CLASSES, EXPECTED_BASE_LABEL_CLASSES } from "@tests/forms/utils";
import { describe, expect, it } from "vitest";
import { DateInput } from "@/forms";

describe("DateInput", () => {
  it("renders with default props", () => {
    render(<DateInput name="some_input" />);

    const input = screen.getByLabelText("some_input") as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(`${EXPECTED_BASE_INPUT_CLASSES} max-w-[150px]`);
    expect(input.placeholder).toBe("");
    expect(input.type).toBe("date");
    expect(input.value).toBe("");
  });

  it("renders with initial value", () => {
    render(<DateInput name="some_input" value="2021-01-01" />);

    const input = screen.getByLabelText("some_input") as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.value).toBe("2021-01-01");
  });

  it("renders with label", () => {
    render(<DateInput label="Some thing" name="some_input" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toBe(EXPECTED_BASE_LABEL_CLASSES);

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
  });

  it("renders with left-oriented label", () => {
    render(<DateInput label="Some thing" labelOrientation="left" name="some_input" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toBe(`${EXPECTED_BASE_LABEL_CLASSES} text-nowrap`);

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
  });

  it("renders with note", () => {
    render(<DateInput name="some_input" note="My cat's breath smells like cat food" />);

    const note = screen.getByText("My cat's breath smells like cat food");
    expect(note.tagName).toBe("P");
    expect(note.className).toBe("text-sm text-muted-foreground font-display");

    const input = screen.getByLabelText("some_input") as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
  });

  it("combines custom className with generated classes", () => {
    render(<DateInput className="custom-class" name="some_input" />);

    const input = screen.getByLabelText("some_input") as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(`${EXPECTED_BASE_INPUT_CLASSES} max-w-[150px] custom-class`);
  });
});
