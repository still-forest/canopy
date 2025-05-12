import { render, screen } from "@testing-library/react";
import { EXPECTED_BASE_INPUT_CLASSES, EXPECTED_BASE_LABEL_CLASSES } from "@tests/utils";
import { describe, expect, it } from "vitest";
import { NumberInput } from "@/main";

describe("NumberInput", () => {
  it("renders with default props", () => {
    render(<NumberInput name="some_input" />);

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
    expect(input.placeholder).toBe("");
    expect(input.type).toBe("number");
    expect(input.step).toBe(".01");
  });

  it("renders with label", () => {
    render(<NumberInput name="some_input" label="Some thing" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toBe(EXPECTED_BASE_LABEL_CLASSES);

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with left-oriented label", () => {
    render(<NumberInput name="some_input" label="Some thing" labelOrientation="left" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toBe(`${EXPECTED_BASE_LABEL_CLASSES} text-nowrap`);

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with placeholder", () => {
    render(<NumberInput name="some_input" placeholder="Type here" />);

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.placeholder).toBe("Type here");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with note", () => {
    render(<NumberInput name="some_input" note="My cat's breath smells like cat food" />);

    const note = screen.getByText("My cat's breath smells like cat food");
    expect(note.tagName).toBe("P");
    expect(note.className).toBe("text-sm text-muted-foreground font-display");

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with custom step", () => {
    render(<NumberInput name="some_input" step="10" />);

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
    expect(input.placeholder).toBe("");
    expect(input.type).toBe("number");
    expect(input.step).toBe("10");
  });

  it("combines custom className with generated classes", () => {
    render(<NumberInput name="some_input" className="custom-class" />);

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(`${EXPECTED_BASE_INPUT_CLASSES} custom-class`);
  });
});
