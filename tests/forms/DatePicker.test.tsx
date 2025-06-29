import { fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DatePicker } from "@/forms";

const findDay = (calendar: HTMLElement, dayOfMonth: string) => {
  const button = within(calendar).getByText(dayOfMonth);
  if (!button) {
    throw new Error(`Button not found: ${dayOfMonth}`);
  }
  if (button.tagName !== "BUTTON") {
    throw new Error(`Unexpected button element type: ${button.tagName}`);
  }

  const cell = button.parentElement;
  if (!cell) {
    throw new Error(`Day cell not found: ${dayOfMonth}`);
  }
  if (cell.tagName !== "TD") {
    throw new Error(`Unexpected cell element type: ${cell.tagName}`);
  }

  return {
    button,
    cell,
  };
};

describe("DatePicker", () => {
  const onDateSelection = vi.fn();

  beforeEach(() => {
    vi.setSystemTime(new Date("2024-12-29T05:00:00.000Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const EXPECTED_TRIGGER_CLASSES =
    "inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 w-[280px] justify-start text-left font-normal text-muted-foreground";

  const EXPECTED_CALENDAR_CLASSES =
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in w-auto p-0";

  const EXPECTED_DATE_BUTTON_CLASSES =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[>svg]:px-3 size-8 rounded-md p-0 font-normal transition-none aria-selected:opacity-100";

  const EXPECTED_UNSELECTED_DATE_CLASSES = "flex size-8 flex-1 items-center justify-center p-0 text-sm";

  const EXPECTED_CURRENT_DATE_INCREMENTAL_CLASSES =
    "rdp-focused [&>button]:bg-accent [&>button]:text-accent-foreground";
  const EXPECTED_SELECTED_DATE_INCREMENTAL_CLASSES =
    "[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground";

  const EXPECTED_SELECTED_DATE_CLASSES = `${EXPECTED_UNSELECTED_DATE_CLASSES} rdp-focused ${EXPECTED_SELECTED_DATE_INCREMENTAL_CLASSES}`;

  it("renders with calendar", () => {
    render(<DatePicker onDateSelection={onDateSelection} />);

    const trigger = screen.getByRole("button");
    expect(trigger.tagName).toBe("BUTTON");
    expect(trigger.className).toBe(EXPECTED_TRIGGER_CLASSES);
    expect(trigger.textContent).toBe("Select a date");

    fireEvent.click(trigger);

    const calendar = screen.getByRole("dialog");
    expect(calendar.tagName).toBe("DIV");
    expect(calendar.className).toBe(EXPECTED_CALENDAR_CLASSES);
    expect(calendar.textContent).toBe(
      "December 2024SuMoTuWeThFrSa123456789101112131415161718192021222324252627282930311234",
    );

    const dates = within(calendar).getAllByRole("gridcell");
    expect(dates.length).toBe(35);

    const december29 = findDay(calendar, "29");
    expect(december29.cell).toBeInTheDocument();
    expect(december29.cell.className).toBe(
      `${EXPECTED_UNSELECTED_DATE_CLASSES} ${EXPECTED_CURRENT_DATE_INCREMENTAL_CLASSES}`,
    );
    expect(december29.button).toBeInTheDocument();
    expect(december29.button.className).toBe(EXPECTED_DATE_BUTTON_CLASSES);

    let december25 = findDay(calendar, "25");
    expect(december25.cell).toBeInTheDocument();
    expect(december25.cell.className).toBe(EXPECTED_UNSELECTED_DATE_CLASSES);
    expect(december25.button).toBeInTheDocument();
    expect(december25.button.className).toBe(EXPECTED_DATE_BUTTON_CLASSES);

    fireEvent.click(december25.button);

    expect(onDateSelection).toHaveBeenCalledWith(new Date("2024-12-25T05:00:00.000Z"));

    december25 = findDay(calendar, "25");
    expect(december25.cell).toBeInTheDocument();
    expect(december25.cell.className).toBe(EXPECTED_SELECTED_DATE_CLASSES);
    expect(december25.button).toBeInTheDocument();
    expect(december25.button.className).toBe(EXPECTED_DATE_BUTTON_CLASSES);
  });

  it("renders with initial value", () => {
    render(<DatePicker onDateSelection={onDateSelection} initialValue={new Date("2024-12-25T05:00:00.000Z")} />);

    const trigger = screen.getByRole("button");
    expect(trigger.textContent).toBe("2024-12-25");

    fireEvent.click(trigger);

    const calendar = screen.getByRole("dialog");
    const december25 = findDay(calendar, "25");
    expect(december25.cell).toBeInTheDocument();
    expect(december25.cell.className).toBe(EXPECTED_SELECTED_DATE_CLASSES);
  });

  it("renders with initial value that is today", () => {
    render(<DatePicker onDateSelection={onDateSelection} initialValue={new Date()} />);

    const trigger = screen.getByRole("button");
    expect(trigger.textContent).toBe("2024-12-29");

    fireEvent.click(trigger);

    const calendar = screen.getByRole("dialog");

    const december29 = findDay(calendar, "29");
    expect(december29.cell).toBeInTheDocument();
    expect(december29.cell.className).toBe(
      `${EXPECTED_UNSELECTED_DATE_CLASSES} ${EXPECTED_CURRENT_DATE_INCREMENTAL_CLASSES} ${EXPECTED_SELECTED_DATE_INCREMENTAL_CLASSES}`,
    );
  });

  it("renders with an error message", () => {
    render(<DatePicker onDateSelection={onDateSelection} error="What'd you do?!" />);

    const error = screen.getByText("What'd you do?!");
    expect(error).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    render(<DatePicker onDateSelection={onDateSelection} className="custom-class" />);

    const trigger = screen.getByRole("button");
    expect(trigger.className).toBe(`${EXPECTED_TRIGGER_CLASSES} custom-class`);

    fireEvent.click(trigger);

    const calendar = screen.getByRole("dialog");
    expect(calendar.tagName).toBe("DIV");
    expect(calendar.className).toBe(EXPECTED_CALENDAR_CLASSES);
  });

  it("renders with custom size", () => {
    render(<DatePicker onDateSelection={onDateSelection} size="sm" />);

    const trigger = screen.getByRole("button");
    expect(trigger.className).toBe(
      "inline-flex items-center whitespace-nowrap text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 w-[280px] justify-start text-left font-normal text-muted-foreground",
    );
  });

  it("can select from past month", () => {
    render(<DatePicker onDateSelection={onDateSelection} />);

    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    const calendar = screen.getByRole("dialog");
    expect(calendar).toBeVisible();

    const previousMonthButton = within(calendar).getByLabelText("Go to the Previous Month");
    fireEvent.click(previousMonthButton);

    expect(calendar.textContent).toBe(
      "November 2024SuMoTuWeThFrSa2728293031123456789101112131415161718192021222324252627282930",
    );

    const dates = screen.getAllByRole("gridcell");
    expect(dates.length).toBe(35);

    let november12 = findDay(calendar, "12");
    expect(november12.cell).toBeInTheDocument();
    expect(november12.cell.className).toBe(EXPECTED_UNSELECTED_DATE_CLASSES);

    fireEvent.click(november12.button);

    expect(onDateSelection).toHaveBeenCalledWith(new Date("2024-11-12T05:00:00.000Z"));

    november12 = findDay(calendar, "12");
    expect(november12.cell.className).toBe(EXPECTED_SELECTED_DATE_CLASSES);
  });

  it("can select from future month", () => {
    render(<DatePicker onDateSelection={onDateSelection} />);

    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    const calendar = screen.getByRole("dialog");
    expect(calendar).toBeVisible();

    const nextMonthButton = within(calendar).getByLabelText("Go to the Next Month");
    fireEvent.click(nextMonthButton);

    expect(calendar.textContent).toBe(
      "January 2025SuMoTuWeThFrSa293031123456789101112131415161718192021222324252627282930311",
    );

    const dates = screen.getAllByRole("gridcell");
    expect(dates.length).toBe(35);

    let january12 = findDay(calendar, "12");
    expect(january12.cell).toBeInTheDocument();
    expect(january12.cell.className).toBe(EXPECTED_UNSELECTED_DATE_CLASSES);

    fireEvent.click(january12.button);
    expect(onDateSelection).toHaveBeenCalledWith(new Date("2025-01-12T05:00:00.000Z"));

    january12 = findDay(calendar, "12");
    expect(january12.cell.className).toBe(EXPECTED_SELECTED_DATE_CLASSES);
  });

  it("can select from different year", async () => {
    render(<DatePicker onDateSelection={onDateSelection} />);

    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    let calendar = screen.getByRole("dialog");
    expect(calendar).toBeVisible();

    const currentMonthButton = within(calendar).getByRole("button", { name: "December 2024" });
    fireEvent.click(currentMonthButton);

    expect(calendar.textContent).toBe("2019 - 2030201920202021202220232024202520262027202820292030");

    fireEvent.click(within(calendar).getByRole("button", { name: "2023" }));
    expect(calendar.textContent).toBe(
      "January 2023SuMoTuWeThFrSa123456789101112131415161718192021222324252627282930311234",
    );

    const dates = screen.getAllByRole("gridcell");
    expect(dates.length).toBe(35);

    calendar = screen.getByRole("dialog");
    let january19 = findDay(calendar, "19");
    expect(january19.cell).toBeInTheDocument();
    expect(january19.cell.className).toBe(EXPECTED_UNSELECTED_DATE_CLASSES);

    fireEvent.click(january19.button);

    expect(onDateSelection).toHaveBeenCalledWith(new Date("2023-01-19T05:00:00.000Z"));
    january19 = findDay(calendar, "19");
    expect(january19.cell.className).toBe(EXPECTED_SELECTED_DATE_CLASSES);
  });
});
