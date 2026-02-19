import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TextField } from "@/forms";

describe("TextField", () => {
  it("renders with default props", () => {
    render(<TextField name="some_input" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.placeholder).toBe("");
    expect(input.type).toBe("text");
  });

  it("renders with label", () => {
    render(<TextField label="Some thing" name="some_input" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
  });

  it("renders with left-oriented label", () => {
    render(<TextField label="Some thing" labelOrientation="left" name="some_input" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toContain("text-nowrap");

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
  });

  it("renders with placeholder", () => {
    render(<TextField name="some_input" placeholder="Type here" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLInputElement;
    expect(input.placeholder).toBe("Type here");
  });

  it("renders with note", () => {
    render(<TextField name="some_input" note="My cat's breath smells like cat food" />);

    const note = screen.getByText("My cat's breath smells like cat food");
    expect(note.tagName).toBe("P");

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
  });

  it("renders with an error message", () => {
    render(<TextField error="What'd you do?" name="some_input" />);

    const error = screen.getByText("What'd you do?");
    expect(error.tagName).toBe("P");

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
  });

  it("renders with custom type", () => {
    render(<TextField name="some_input" type="email" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLInputElement;
    expect(input.type).toBe("email");
  });

  it("combines custom className with generated classes", () => {
    render(<TextField className="custom-class" name="some_input" />);

    const input = screen.getByRole("textbox", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toContain("custom-class");
  });
});
