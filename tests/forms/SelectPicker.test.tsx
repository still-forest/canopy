import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SelectPicker, type SelectPickerOption } from "@/forms";

describe("SelectPicker", () => {
  const OPTION_GROUPS = [
    {
      label: "Elements",
      options: [
        {
          icon: "🌎",
          value: "earth",
          label: "Earth",
        },
        {
          icon: "🌪️",
          value: "wind",
          label: "Wind",
        },
        {
          icon: "🔥",
          value: "fire",
          label: "Fire",
        },
        {
          icon: "🌊",
          value: "water",
          label: "Water",
        },
      ],
    },
  ];

  const onSelect = vi.fn();

  it("renders with default props", () => {
    render(<SelectPicker name="some_input" onChange={onSelect} options={OPTION_GROUPS} />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger.tagName).toBe("BUTTON");
    expect(trigger).toHaveTextContent("Select an option");

    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(trigger.ariaExpanded).toBe("false");

    fireEvent.click(trigger);

    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(trigger.ariaExpanded).toBe("true");

    const popover = screen.getByRole("dialog");
    expect(popover.tagName).toBe("DIV");
    expect(popover).toHaveTextContent("🌎Earth🌪️Wind🔥Fire🌊Water");

    const optionContainer = screen.getByRole("listbox");
    const options = within(optionContainer).getAllByRole("option");
    expect(options).toHaveLength(OPTION_GROUPS[0].options.length);

    expect(optionContainer).toHaveTextContent("Elements");
    expect(options[0]).toHaveTextContent("🌎Earth");
    expect(options[1]).toHaveTextContent("🌪️Wind");
    expect(options[2]).toHaveTextContent("🔥Fire");
    expect(options[3]).toHaveTextContent("🌊Water");

    fireEvent.click(options[2]);

    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(trigger.ariaExpanded).toBe("false");

    expect(onSelect).toHaveBeenCalledWith(OPTION_GROUPS[0].options[2].value);
  });

  it("renders with no icons", () => {
    const optionGroups = OPTION_GROUPS.map((group) => ({
      ...group,
      options: group.options.map((option) => ({ ...option, icon: undefined })),
    }));
    render(<SelectPicker name="some_input" onChange={onSelect} options={optionGroups} />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger).toHaveTextContent("Select an option");

    fireEvent.click(trigger);

    const optionContainer = screen.getByRole("listbox");
    const options = within(optionContainer).getAllByRole("option");
    expect(options).toHaveLength(OPTION_GROUPS[0].options.length);

    expect(options[0]).toHaveTextContent("Earth");
    expect(options[1]).toHaveTextContent("Wind");
    expect(options[2]).toHaveTextContent("Fire");
    expect(options[3]).toHaveTextContent("Water");
  });

  it("renders with a selected value", () => {
    render(
      <SelectPicker
        name="some_input"
        onChange={onSelect}
        options={OPTION_GROUPS}
        value={OPTION_GROUPS[0].options[0].value}
      />,
    );

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger).toHaveTextContent("Earth");
  });

  it("renders with a custom renderSelected function", () => {
    const renderSelected = ({ label }: SelectPickerOption) => `The thing is ${label}`;
    render(
      <SelectPicker
        name="some_input"
        onChange={onSelect}
        options={OPTION_GROUPS}
        renderSelected={renderSelected}
        value={OPTION_GROUPS[0].options[0].value}
      />,
    );

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger).toHaveTextContent("The thing is Earth");
  });

  it("renders with multiple groups", () => {
    const optionGroups = [
      ...OPTION_GROUPS,
      {
        label: "Colors",
        options: [
          {
            icon: "🔴",
            value: "red",
            label: "Red",
          },
          {
            icon: "🟡",
            value: "yellow",
            label: "Yellow",
          },
          {
            icon: "🟢",
            value: "green",
            label: "Green",
          },
          {
            icon: "🔵",
            value: "blue",
            label: "Blue",
          },
        ],
      },
    ];
    render(<SelectPicker name="some_input" onChange={onSelect} options={optionGroups} />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger).toHaveTextContent("Select an option");
    fireEvent.click(trigger);

    const optionContainer = screen.getByRole("listbox");
    const options = within(optionContainer).getAllByRole("option");
    expect(options).toHaveLength(optionGroups[0].options.length + optionGroups[1].options.length);

    expect(optionContainer).toHaveTextContent("Elements");
    expect(options[0]).toHaveTextContent("Earth");
    expect(options[1]).toHaveTextContent("Wind");
    expect(options[2]).toHaveTextContent("Fire");
    expect(options[3]).toHaveTextContent("Water");

    expect(optionContainer).toHaveTextContent("Colors");
    expect(options[4]).toHaveTextContent("Red");
    expect(options[5]).toHaveTextContent("Yellow");
    expect(options[6]).toHaveTextContent("Green");
    expect(options[7]).toHaveTextContent("Blue");
  });
});
