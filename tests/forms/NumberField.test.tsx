import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NumberField } from "@/forms";

describe("NumberField", () => {
  it("renders with default props", () => {
    render(<NumberField name="some_input" />);

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.placeholder).toBe("");
    expect(input.type).toBe("number");
    expect(input.step).toBe(".01");
  });

  it("renders with label", () => {
    render(<NumberField label="Some thing" name="some_input" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
  });

  it("renders with left-oriented label", () => {
    render(<NumberField label="Some thing" labelOrientation="left" name="some_input" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toContain("text-nowrap");

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
  });

  it("renders with placeholder", () => {
    render(<NumberField name="some_input" placeholder="Type here" />);

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.placeholder).toBe("Type here");
  });

  it("renders with note", () => {
    render(<NumberField name="some_input" note="My cat's breath smells like cat food" />);

    const note = screen.getByText("My cat's breath smells like cat food");
    expect(note.tagName).toBe("P");

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
  });

  it("renders with custom step", () => {
    render(<NumberField name="some_input" step="10" />);

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.placeholder).toBe("");
    expect(input.type).toBe("number");
    expect(input.step).toBe("10");
  });

  it("combines custom className with generated classes", () => {
    render(<NumberField className="custom-class" name="some_input" />);

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toContain("custom-class");
  });
});
