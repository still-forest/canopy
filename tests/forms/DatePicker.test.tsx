import { fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DatePicker } from "@/forms";

describe("DatePicker", () => {
  const onDateSelection = vi.fn();

  beforeEach(() => {
    vi.setSystemTime(new Date("2024-12-25T16:00:00.000Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const EXPECTED_TRIGGER_CLASSES =
    "inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 w-[280px] justify-start text-left font-normal text-muted-foreground";

  const EXPECTED_CALENDAR_CLASSES =
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in w-auto p-0";

  const EXPECTED_UNSELECTED_DATE_CLASSES =
    "rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[>svg]:px-3 size-8 p-0 font-normal aria-selected:opacity-100";

  const EXPECTED_SELECTED_DATE_CLASSES =
    EXPECTED_UNSELECTED_DATE_CLASSES +
    " bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground";

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

    const dates = screen.getAllByRole("gridcell");
    expect(dates.length).toBe(35);

    const december25 = dates.find((date) => date.textContent === "25") as HTMLElement;
    expect(december25).toBeInTheDocument();
    expect(december25.className).toBe(EXPECTED_UNSELECTED_DATE_CLASSES);

    fireEvent.click(december25);

    expect(onDateSelection).toHaveBeenCalledWith(new Date("2024-12-24T16:00:00.000Z"));
    expect(december25.className).toBe(EXPECTED_SELECTED_DATE_CLASSES);
  });

  it("renders with initial value", () => {
    render(<DatePicker onDateSelection={onDateSelection} initialValue={new Date("2024-12-25")} />);

    const trigger = screen.getByRole("button");
    expect(trigger.textContent).toBe("25/12/2024");

    fireEvent.click(trigger);

    const dates = screen.getAllByRole("gridcell");
    const december25 = dates.find((date) => date.textContent === "25") as HTMLElement;
    expect(december25).toBeInTheDocument();
    expect(december25.className).toBe(EXPECTED_SELECTED_DATE_CLASSES);
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

    const previousMonthButton = within(calendar).getByLabelText("Go to previous month");
    fireEvent.click(previousMonthButton);

    expect(calendar.textContent).toBe(
      "November 2024SuMoTuWeThFrSa2728293031123456789101112131415161718192021222324252627282930",
    );

    const dates = screen.getAllByRole("gridcell");
    expect(dates.length).toBe(35);

    const january12 = dates.find((date) => date.textContent === "12") as HTMLElement;
    expect(january12).toBeInTheDocument();
    expect(january12.className).toBe(EXPECTED_UNSELECTED_DATE_CLASSES);

    fireEvent.click(january12);

    expect(onDateSelection).toHaveBeenCalledWith(new Date("2024-11-11T16:00:00.000Z"));
    expect(january12.className).toBe(EXPECTED_SELECTED_DATE_CLASSES);
  });

  it("can select from future month", () => {
    render(<DatePicker onDateSelection={onDateSelection} />);

    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    const calendar = screen.getByRole("dialog");
    expect(calendar).toBeVisible();

    const nextMonthButton = within(calendar).getByLabelText("Go to next month");
    fireEvent.click(nextMonthButton);

    expect(calendar.textContent).toBe(
      "January 2025SuMoTuWeThFrSa293031123456789101112131415161718192021222324252627282930311",
    );

    const dates = screen.getAllByRole("gridcell");
    expect(dates.length).toBe(35);

    const january12 = dates.find((date) => date.textContent === "12") as HTMLElement;
    expect(january12).toBeInTheDocument();
    expect(january12.className).toBe(EXPECTED_UNSELECTED_DATE_CLASSES);

    fireEvent.click(january12);

    expect(onDateSelection).toHaveBeenCalledWith(new Date("2025-01-11T16:00:00.000Z"));
    expect(january12.className).toBe(EXPECTED_SELECTED_DATE_CLASSES);
  });

  // TODO: Need to update to 9.6.7, but that's a challenging update.
  it.skip("can select from different year", () => {
    render(<DatePicker onDateSelection={onDateSelection} />);

    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    const calendar = screen.getByRole("dialog");
    expect(calendar).toBeVisible();

    const currentMonthButton = within(calendar).getByLabelText("Go to current month");
    fireEvent.click(currentMonthButton);

    expect(calendar.textContent).toBe(
      "December 2024SuMoTuWeThFrSa293031123456789101112131415161718192021222324252627282930311",
    );

    const dates = screen.getAllByRole("gridcell");
    expect(dates.length).toBe(35);

    const january12 = dates.find((date) => date.textContent === "12") as HTMLElement;
    expect(january12).toBeInTheDocument();
    expect(january12.className).toBe(EXPECTED_UNSELECTED_DATE_CLASSES);

    fireEvent.click(january12);

    expect(onDateSelection).toHaveBeenCalledWith(new Date("2025-01-11T16:00:00.000Z"));
    expect(january12.className).toBe(EXPECTED_SELECTED_DATE_CLASSES);
  });
});
