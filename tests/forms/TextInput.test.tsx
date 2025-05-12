import { render, screen } from "@testing-library/react";
import { EXPECTED_BASE_INPUT_CLASSES, EXPECTED_BASE_LABEL_CLASSES } from "@tests/forms/utils";
import { describe, expect, it } from "vitest";
import { TextInput } from "@/main";

describe("TextInput", () => {
  it("renders with default props", () => {
    render(<TextInput name="some_input" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
    expect(input.placeholder).toBe("");
    expect(input.type).toBe("text");
  });

  it("renders with label", () => {
    render(<TextInput name="some_input" label="Some thing" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toBe(EXPECTED_BASE_LABEL_CLASSES);

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with left-oriented label", () => {
    render(<TextInput name="some_input" label="Some thing" labelOrientation="left" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toBe(`${EXPECTED_BASE_LABEL_CLASSES} text-nowrap`);

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with placeholder", () => {
    render(<TextInput name="some_input" placeholder="Type here" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLInputElement;
    expect(input.placeholder).toBe("Type here");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with note", () => {
    render(<TextInput name="some_input" note="My cat's breath smells like cat food" />);

    const note = screen.getByText("My cat's breath smells like cat food");
    expect(note.tagName).toBe("P");
    expect(note.className).toBe("text-sm text-muted-foreground font-display");

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with custom type", () => {
    render(<TextInput name="some_input" type="email" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLInputElement;
    expect(input.type).toBe("email");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("combines custom className with generated classes", () => {
    render(<TextInput name="some_input" className="custom-class" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(`${EXPECTED_BASE_INPUT_CLASSES} custom-class`);
  });
});
