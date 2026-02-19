import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { NativeSelectField } from "@/forms";

describe("NativeSelectField", () => {
  const OPTIONS = [
    {
      value: "earth",
      label: "Earth",
    },
    {
      value: "wind",
      label: "Wind",
    },
    {
      value: "fire",
      label: "Fire",
    },
    {
      value: "water",
      label: "Water",
    },
  ];

  const onSelect = vi.fn();

  it("renders with default props", async () => {
    const user = userEvent.setup();

    render(<NativeSelectField name="some_input" onChange={onSelect} options={OPTIONS} />);

    const select = screen.getByRole("combobox") as HTMLSelectElement;
    expect(select.tagName).toBe("SELECT");
    expect(select).toHaveTextContent("Select an optionEarthWindFireWater");

    const options = within(select).getAllByRole("option");
    expect(options).toHaveLength(5);

    expect(options[0]).toHaveTextContent("Select an option");
    expect(options[1]).toHaveTextContent("Earth");
    expect(options[2]).toHaveTextContent("Wind");
    expect(options[3]).toHaveTextContent("Fire");
    expect(options[4]).toHaveTextContent("Water");

    await user.selectOptions(select, "water");

    expect(onSelect).toHaveBeenCalledWith("water");
  });

  it("renders with a selected value", () => {
    render(<NativeSelectField name="some_input" onChange={onSelect} options={OPTIONS} value={OPTIONS[0].value} />);

    const trigger = screen.getByRole("combobox") as HTMLSelectElement;
    expect(trigger).toHaveTextContent("Earth");
  });

  it("renders with a label", () => {
    render(<NativeSelectField label="Some label" name="some_input" onChange={onSelect} options={OPTIONS} />);

    const label = screen.getByText("Some label") as HTMLLabelElement;
    expect(label.tagName).toBe("LABEL");
    expect(label.htmlFor).toBe("some_input");
  });

  it("renders with a placeholder", () => {
    render(
      <NativeSelectField name="some_input" onChange={onSelect} options={OPTIONS} placeholder="Some placeholder" />,
    );

    const trigger = screen.getByRole("combobox") as HTMLSelectElement;
    expect(trigger).toHaveTextContent("Some placeholder");
  });

  it("renders with a note", () => {
    render(<NativeSelectField name="some_input" note="Some note" onChange={onSelect} options={OPTIONS} />);

    const note = screen.getByText("Some note") as HTMLParagraphElement;
    expect(note.tagName).toBe("P");
  });

  it("renders with an error message", () => {
    render(<NativeSelectField error="What'd you do?" name="some_input" onChange={onSelect} options={OPTIONS} />);

    const error = screen.getByText("What'd you do?");
    expect(error.tagName).toBe("P");
  });

  it("combines custom className with generated classes", () => {
    render(<NativeSelectField className="custom-class" name="some_input" onChange={onSelect} options={OPTIONS} />);

    const trigger = screen.getByRole("combobox") as HTMLSelectElement;
    expect(trigger.className).toContain("custom-class");
  });

  it("allows selecting an option", async () => {
    const user = userEvent.setup();

    render(<NativeSelectField name="some_input" onChange={onSelect} options={OPTIONS} value="__none__" />);

    const select = screen.getByRole("combobox") as HTMLSelectElement;
    expect(select.value).toBe("");

    const options = within(select).getAllByRole("option");
    expect(options).toHaveLength(5);

    expect(options[0]).toHaveTextContent("Select an option");
    expect(options[1]).toHaveTextContent("Earth");
    expect(options[2]).toHaveTextContent("Wind");
    expect(options[3]).toHaveTextContent("Fire");
    expect(options[4]).toHaveTextContent("Water");

    await user.selectOptions(select, "fire");

    expect(onSelect).toHaveBeenCalledWith("fire");
  });

  it("renders with multiple groups", () => {
    const onSelect = vi.fn();
    const optionGroups = [
      {
        label: "Elements",
        options: OPTIONS,
      },
      {
        label: "Colors",
        options: [
          {
            value: "red",
            label: "Red",
          },
          {
            value: "yellow",
            label: "Yellow",
          },
          {
            value: "green",
            label: "Green",
          },
          {
            value: "blue",
            label: "Blue",
          },
        ],
      },
    ];
    render(<NativeSelectField name="some_input" onChange={onSelect} options={optionGroups} />);

    const select = screen.getByRole("combobox") as HTMLSelectElement;
    expect(select.value).toBe("");

    const options = within(select).getAllByRole("option");
    expect(options).toHaveLength(9);

    expect(options[0]).toHaveTextContent("Select an option");
    expect(options[1]).toHaveTextContent("Earth");
    expect(options[2]).toHaveTextContent("Wind");
    expect(options[3]).toHaveTextContent("Fire");
    expect(options[4]).toHaveTextContent("Water");
    expect(options[5]).toHaveTextContent("Red");
    expect(options[6]).toHaveTextContent("Yellow");
    expect(options[7]).toHaveTextContent("Green");
    expect(options[8]).toHaveTextContent("Blue");
  });
});
