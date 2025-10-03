import { render, screen } from "@testing-library/react";
import { EXPECTED_BASE_INPUT_CLASSES, EXPECTED_BASE_LABEL_CLASSES } from "@tests/forms/utils";
import { describe, expect, it } from "vitest";
import { TextInput } from "@/forms";

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
    render(<TextInput label="Some thing" name="some_input" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toBe(EXPECTED_BASE_LABEL_CLASSES);

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with left-oriented label", () => {
    render(<TextInput label="Some thing" labelOrientation="left" name="some_input" />);

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
    expect(note.className).toBe("text-sm text-muted-foreground font-body");

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with an error message", () => {
    render(<TextInput error="What'd you do?" name="some_input" />);

    const error = screen.getByText("What'd you do?");
    expect(error.tagName).toBe("P");
    expect(error.className).toBe("text-xs text-destructive font-body");

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
    render(<TextInput className="custom-class" name="some_input" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(`${EXPECTED_BASE_INPUT_CLASSES} custom-class`);
  });
});
