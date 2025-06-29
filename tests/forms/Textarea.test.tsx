import { render, screen } from "@testing-library/react";
import { EXPECTED_BASE_LABEL_CLASSES } from "@tests/forms/utils";
import { describe, expect, it } from "vitest";
import { Textarea } from "@/forms";

describe("Textarea", () => {
  const EXPECTED_BASE_TEXTAREA_CLASSES =
    "field-sizing-content flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:ring-destructive/40";

  it("renders with default props", () => {
    render(<Textarea name="some_input" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLTextAreaElement;
    expect(input.tagName).toBe("TEXTAREA");
    expect(input.className).toBe(EXPECTED_BASE_TEXTAREA_CLASSES);
    expect(input.placeholder).toBe("");
  });

  it("renders with label", () => {
    render(<Textarea label="Some thing" name="some_input" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toBe(EXPECTED_BASE_LABEL_CLASSES);

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("TEXTAREA");
    expect(input.className).toBe(EXPECTED_BASE_TEXTAREA_CLASSES);
  });

  it("renders with placeholder", () => {
    render(<Textarea name="some_input" placeholder="Type here" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLTextAreaElement;
    expect(input.placeholder).toBe("Type here");
    expect(input.className).toBe(EXPECTED_BASE_TEXTAREA_CLASSES);
  });

  it("renders with note", () => {
    render(<Textarea name="some_input" note="My cat's breath smells like cat food" />);

    const note = screen.getByText("My cat's breath smells like cat food");
    expect(note.tagName).toBe("P");
    expect(note.className).toBe("text-sm text-muted-foreground font-display");

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLTextAreaElement;
    expect(input.tagName).toBe("TEXTAREA");
    expect(input.className).toBe(EXPECTED_BASE_TEXTAREA_CLASSES);
  });

  it("renders with an error message", () => {
    render(<Textarea error="What'd you do?" name="some_input" />);

    const error = screen.getByText("What'd you do?");
    expect(error.tagName).toBe("P");
    expect(error.className).toBe("text-xs text-destructive font-display");

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLTextAreaElement;
    expect(input.tagName).toBe("TEXTAREA");
    expect(input.className).toBe(EXPECTED_BASE_TEXTAREA_CLASSES);
  });

  it("combines custom className with generated classes", () => {
    render(<Textarea className="custom-class" name="some_input" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLTextAreaElement;
    expect(input.tagName).toBe("TEXTAREA");
    expect(input.className).toBe(`${EXPECTED_BASE_TEXTAREA_CLASSES} custom-class`);
  });

  it("renders in disabled state correctly", () => {
    render(<Textarea disabled name="some_input" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLTextAreaElement;
    expect(input.disabled).toBe(true);
  });
});
