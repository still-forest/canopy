import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TextareaField } from "@/forms";

describe("TextareaField", () => {
  it("renders with default props", () => {
    render(<TextareaField name="some_input" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLTextAreaElement;
    expect(input.tagName).toBe("TEXTAREA");
    expect(input.placeholder).toBe("");
  });

  it("renders with label", () => {
    render(<TextareaField label="Some thing" name="some_input" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("TEXTAREA");
  });

  it("renders with placeholder", () => {
    render(<TextareaField name="some_input" placeholder="Type here" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLTextAreaElement;
    expect(input.placeholder).toBe("Type here");
  });

  it("renders with note", () => {
    render(<TextareaField name="some_input" note="My cat's breath smells like cat food" />);

    const note = screen.getByText("My cat's breath smells like cat food");
    expect(note.tagName).toBe("P");

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLTextAreaElement;
    expect(input.tagName).toBe("TEXTAREA");
  });

  it("renders with an error message", () => {
    render(<TextareaField error="What'd you do?" name="some_input" />);

    const error = screen.getByText("What'd you do?");
    expect(error.tagName).toBe("P");

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLTextAreaElement;
    expect(input.tagName).toBe("TEXTAREA");
  });

  it("combines custom className with generated classes", () => {
    render(<TextareaField className="custom-class" name="some_input" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLTextAreaElement;
    expect(input.tagName).toBe("TEXTAREA");
    expect(input.className).toContain("custom-class");
  });

  it("renders in disabled state correctly", () => {
    render(<TextareaField disabled name="some_input" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLTextAreaElement;
    expect(input.disabled).toBe(true);
  });
});
