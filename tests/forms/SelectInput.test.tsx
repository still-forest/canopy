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

  const EXPECTED_BASE_BUTTON_CLASSES =
    "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 min-w-[180px]";

  const onSelect = vi.fn();

  it("renders with default props", () => {
    render(<SelectInput name="some_input" onValueChange={onSelect} options={OPTIONS} />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger.tagName).toBe("BUTTON");
    expect(trigger.className).toBe(EXPECTED_BASE_BUTTON_CLASSES);
    expect(trigger).toHaveTextContent("");

    expect(trigger.dataset.state).toBe("closed");
    expect(trigger.ariaExpanded).toBe("false");

    fireEvent.click(trigger);

    expect(trigger.dataset.state).toBe("open");
    expect(trigger.ariaExpanded).toBe("true");

    const optionContainer = screen.getByRole("presentation");
    const options = within(optionContainer).getAllByRole("option");
    expect(options).toHaveLength(OPTIONS.length);

    expect(options[0]).toHaveTextContent("Earth");
    expect(options[1]).toHaveTextContent("Wind");
    expect(options[2]).toHaveTextContent("Fire");
    expect(options[3]).toHaveTextContent("Water");

    fireEvent.click(options[2]);

    expect(trigger.dataset.state).toBe("closed");
    expect(trigger.ariaExpanded).toBe("false");

    expect(onSelect).toHaveBeenCalledWith(OPTIONS[2].value);
  });

  it("renders with a selected value", () => {
    render(<SelectInput name="some_input" onValueChange={onSelect} options={OPTIONS} value={OPTIONS[0].value} />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger).toHaveTextContent("Earth");
  });

  it("renders with a label", () => {
    render(<SelectInput label="Some label" name="some_input" onValueChange={onSelect} options={OPTIONS} />);

    const label = screen.getByText("Some label") as HTMLLabelElement;
    expect(label.tagName).toBe("LABEL");
    expect(label.htmlFor).toBe("some_input");
  });

  it("renders with a placeholder", () => {
    render(<SelectInput name="some_input" onValueChange={onSelect} options={OPTIONS} placeholder="Some placeholder" />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger).toHaveTextContent("Some placeholder");
  });

  it("renders with a note", () => {
    render(<SelectInput name="some_input" note="Some note" onValueChange={onSelect} options={OPTIONS} />);

    const note = screen.getByText("Some note") as HTMLParagraphElement;
    expect(note.tagName).toBe("P");
    expect(note.className).toBe("text-sm text-muted-foreground font-body");
  });

  it("renders with an error message", () => {
    render(<SelectInput error="What'd you do?" name="some_input" onValueChange={onSelect} options={OPTIONS} />);

    const error = screen.getByText("What'd you do?");
    expect(error.tagName).toBe("P");
    expect(error.className).toBe("text-xs text-destructive font-body");
  });

  it("combines custom className with generated classes", () => {
    render(<SelectInput className="custom-class" name="some_input" onValueChange={onSelect} options={OPTIONS} />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger.className).toBe(`${EXPECTED_BASE_BUTTON_CLASSES} custom-class`);
  });
});
