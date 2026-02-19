import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DateField } from "@/forms";

describe("DateField", () => {
  it("renders with default props", () => {
    render(<DateField name="some_input" />);

    const input = screen.getByLabelText("some_input") as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.placeholder).toBe("");
    expect(input.type).toBe("date");
    expect(input.value).toBe("");
  });

  it("renders with initial value", () => {
    render(<DateField name="some_input" value="2021-01-01" />);

    const input = screen.getByLabelText("some_input") as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.value).toBe("2021-01-01");
  });

  it("renders with label", () => {
    render(<DateField label="Some thing" name="some_input" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
  });

  it("renders with left-oriented label", () => {
    render(<DateField label="Some thing" labelOrientation="left" name="some_input" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toContain("text-nowrap");

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
  });

  it("renders with note", () => {
    render(<DateField name="some_input" note="My cat's breath smells like cat food" />);

    const note = screen.getByText("My cat's breath smells like cat food");
    expect(note.tagName).toBe("P");

    const input = screen.getByLabelText("some_input") as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
  });

  it("combines custom className with generated classes", () => {
    render(<DateField className="custom-class" name="some_input" />);

    const input = screen.getByLabelText("some_input") as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toContain("custom-class");
  });
});
