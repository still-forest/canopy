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

  const EXPECTED_BASE_BUTTON_CLASSES =
    "inline-flex items-center gap-2 whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 text-sm w-full justify-between font-normal";

  const EXPECTED_BASE_POPOVER_CLASSES =
    "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 origin-(--radix-popover-content-transform-origin) rounded-md border shadow-md outline-hidden w-[400px] p-0";

  const onSelect = vi.fn();

  it("renders with default props", () => {
    render(<SelectPicker name="some_input" onChange={onSelect} options={OPTION_GROUPS} />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger.tagName).toBe("BUTTON");
    expect(trigger.className).toBe(EXPECTED_BASE_BUTTON_CLASSES);
    expect(trigger).toHaveTextContent("Select an option");

    expect(trigger.dataset.state).toBe("closed");
    expect(trigger.ariaExpanded).toBe("false");

    fireEvent.click(trigger);

    expect(trigger.dataset.state).toBe("open");
    expect(trigger.ariaExpanded).toBe("true");

    const popover = screen.getByRole("dialog");
    expect(popover.tagName).toBe("DIV");
    expect(popover.className).toBe(EXPECTED_BASE_POPOVER_CLASSES);
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

    expect(trigger.dataset.state).toBe("closed");
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
