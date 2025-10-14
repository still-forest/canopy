import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SelectInput } from "@/forms";

describe("SelectInput", () => {
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

  const EXPECTED_BASE_TRIGGER_CLASSES =
    "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 min-w-[180px] h-9 text-base md:text-sm";

  it("renders with default props", () => {
    const onSelect = vi.fn();
    render(<SelectInput name="some_input" onValueChange={onSelect} options={OPTIONS} />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger.tagName).toBe("BUTTON");
    expect(trigger.className).toBe(EXPECTED_BASE_TRIGGER_CLASSES);
    expect(trigger).toHaveTextContent("");

    expect(trigger.dataset.state).toBe("closed");
    expect(trigger.ariaExpanded).toBe("false");

    fireEvent.click(trigger);

    expect(trigger.dataset.state).toBe("open");
    expect(trigger.ariaExpanded).toBe("true");

    const optionContainer = screen.getByRole("presentation");
    const options = within(optionContainer).getAllByRole("option");
    expect(options).toHaveLength(OPTIONS.length + 1);

    expect(options[0]).toHaveTextContent("");
    expect(options[1]).toHaveTextContent("Earth");
    expect(options[2]).toHaveTextContent("Wind");
    expect(options[3]).toHaveTextContent("Fire");
    expect(options[4]).toHaveTextContent("Water");

    fireEvent.click(options[3]);

    expect(trigger.dataset.state).toBe("closed");
    expect(trigger.ariaExpanded).toBe("false");

    expect(onSelect).toHaveBeenCalledWith(OPTIONS[2].value);
  });

  it("renders with a selected value", () => {
    const onSelect = vi.fn();
    render(<SelectInput name="some_input" onValueChange={onSelect} options={OPTIONS} value={OPTIONS[0].value} />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger).toHaveTextContent("Earth");
  });

  it("renders with a label", () => {
    const onSelect = vi.fn();
    render(<SelectInput label="Some label" name="some_input" onValueChange={onSelect} options={OPTIONS} />);

    const label = screen.getByText("Some label") as HTMLLabelElement;
    expect(label.tagName).toBe("LABEL");
    expect(label.htmlFor).toBe("some_input");
  });

  it("renders with a placeholder", () => {
    const onSelect = vi.fn();
    render(<SelectInput name="some_input" onValueChange={onSelect} options={OPTIONS} placeholder="Some placeholder" />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger).toHaveTextContent("Some placeholder");
  });

  it("renders with a note", () => {
    const onSelect = vi.fn();
    render(<SelectInput name="some_input" note="Some note" onValueChange={onSelect} options={OPTIONS} />);

    const note = screen.getByText("Some note") as HTMLParagraphElement;
    expect(note.tagName).toBe("P");
    expect(note.className).toBe("text-sm text-muted-foreground font-body");
  });

  it("renders with an error message", () => {
    const onSelect = vi.fn();
    render(<SelectInput error="What'd you do?" name="some_input" onValueChange={onSelect} options={OPTIONS} />);

    const error = screen.getByText("What'd you do?");
    expect(error.tagName).toBe("P");
    expect(error.className).toBe("text-xs text-destructive font-body");
  });

  it("combines custom className with generated classes", () => {
    const onSelect = vi.fn();
    render(<SelectInput className="custom-class" name="some_input" onValueChange={onSelect} options={OPTIONS} />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger.className).toBe(`${EXPECTED_BASE_TRIGGER_CLASSES} custom-class`);
  });

  it("allows selecting an option", async () => {
    const onSelect = vi.fn();
    render(<SelectInput name="some_input" onValueChange={onSelect} options={OPTIONS} value="__none__" />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger).toHaveTextContent("");

    fireEvent.click(trigger);

    const optionContainer = screen.getByRole("presentation");
    const options = within(optionContainer).getAllByRole("option");
    expect(options).toHaveLength(OPTIONS.length + 1);

    expect(options[0]).toHaveTextContent("");
    expect(options[1]).toHaveTextContent("Earth");
    expect(options[2]).toHaveTextContent("Wind");
    expect(options[3]).toHaveTextContent("Fire");
    expect(options[4]).toHaveTextContent("Water");

    fireEvent.click(options[3]);

    expect(trigger.dataset.state).toBe("closed");
    expect(trigger.ariaExpanded).toBe("false");

    expect(onSelect).toHaveBeenCalledWith("fire");
  });

  it("allows selecting the empty option", () => {
    const onSelect = vi.fn();
    render(<SelectInput name="some_input" onValueChange={onSelect} options={OPTIONS} value="__none__" />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger).toHaveTextContent("");

    fireEvent.click(trigger);

    const optionContainer = screen.getByRole("presentation");
    const options = within(optionContainer).getAllByRole("option");
    expect(options).toHaveLength(OPTIONS.length + 1);

    expect(options[0]).toHaveTextContent("");
    expect(options[1]).toHaveTextContent("Earth");
    expect(options[2]).toHaveTextContent("Wind");
    expect(options[3]).toHaveTextContent("Fire");
    expect(options[4]).toHaveTextContent("Water");

    fireEvent.click(options[0]);

    expect(trigger.dataset.state).toBe("closed");
    expect(trigger.ariaExpanded).toBe("false");
    expect(trigger).toHaveTextContent("");
  });

  it("renders with an empty option label", () => {
    const onSelect = vi.fn();
    render(
      <SelectInput emptyOptionLabel="Select a thing..." name="some_input" onValueChange={onSelect} options={OPTIONS} />,
    );
    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger).toHaveTextContent("");

    fireEvent.click(trigger);

    const optionContainer = screen.getByRole("presentation");
    const options = within(optionContainer).getAllByRole("option");
    expect(options).toHaveLength(OPTIONS.length + 1);

    expect(options[0]).toHaveTextContent("Select a thing...");
    expect(options[1]).toHaveTextContent("Earth");
    expect(options[2]).toHaveTextContent("Wind");
    expect(options[3]).toHaveTextContent("Fire");
    expect(options[4]).toHaveTextContent("Water");
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
    render(<SelectInput name="some_input" onValueChange={onSelect} options={optionGroups} />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger).toHaveTextContent("");

    fireEvent.click(trigger);

    const optionContainer = screen.getByRole("presentation");
    const options = within(optionContainer).getAllByRole("option");
    expect(options).toHaveLength(9);

    expect(options[0]).toHaveTextContent("");

    expect(optionContainer).toHaveTextContent("Elements");
    expect(options[1]).toHaveTextContent("Earth");
    expect(options[2]).toHaveTextContent("Wind");
    expect(options[3]).toHaveTextContent("Fire");
    expect(options[4]).toHaveTextContent("Water");

    expect(optionContainer).toHaveTextContent("Colors");
    expect(options[5]).toHaveTextContent("Red");
    expect(options[6]).toHaveTextContent("Yellow");
    expect(options[7]).toHaveTextContent("Green");
    expect(options[8]).toHaveTextContent("Blue");
  });
});
