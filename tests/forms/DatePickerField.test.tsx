import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DatePickerField } from "@/forms";

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

const waitForCalendarVisible = async () => {
  const calendar = screen.getByRole("dialog");
  // Wait for data-starting-style to be removed (animation complete)
  await waitFor(() => {
    expect(calendar).not.toHaveAttribute("data-starting-style");
  });
  return calendar;
};

describe("DatePickerField", () => {
  const onDateSelection = vi.fn();

  beforeEach(() => {
    vi.setSystemTime(new Date("2024-12-29T05:00:00.000Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders with calendar", async () => {
    render(<DatePickerField onDateSelection={onDateSelection} />);

    const trigger = screen.getByRole("button");
    expect(trigger).toBeInTheDocument();
    expect(trigger.textContent).toBe("Select a date");

    fireEvent.click(trigger);

    const calendar = await waitForCalendarVisible();
    expect(calendar.textContent).toBe(
      "December 2024SuMoTuWeThFrSa123456789101112131415161718192021222324252627282930311234",
    );

    const dates = within(calendar).getAllByRole("gridcell");
    expect(dates.length).toBe(35);

    // December 29 is today - should have rdp-today and rdp-focused classes
    const december29 = findDay(calendar, "29");
    expect(december29.cell).toBeInTheDocument();
    expect(december29.cell).toHaveClass("rdp-today", "rdp-focused");
    expect(december29.button).toBeInTheDocument();

    // December 25 is not selected initially
    let december25 = findDay(calendar, "25");
    expect(december25.cell).toBeInTheDocument();
    expect(december25.cell).not.toHaveAttribute("data-selected", "true");
    expect(december25.button).toBeInTheDocument();

    fireEvent.click(december25.button);

    expect(onDateSelection).toHaveBeenCalledWith(new Date("2024-12-25T05:00:00.000Z"));

    // After selection, December 25 should be selected
    december25 = findDay(calendar, "25");
    expect(december25.cell).toBeInTheDocument();
    expect(december25.cell).toHaveAttribute("data-selected", "true");
  });

  it("renders with initial value", async () => {
    render(<DatePickerField initialValue={new Date("2024-12-25T05:00:00.000Z")} onDateSelection={onDateSelection} />);

    const trigger = screen.getByRole("button");
    expect(trigger.textContent).toBe("2024-12-25");

    fireEvent.click(trigger);

    const calendar = await waitForCalendarVisible();
    const december25 = findDay(calendar, "25");
    expect(december25.cell).toBeInTheDocument();
    expect(december25.cell).toHaveAttribute("data-selected", "true");
  });

  it("renders with initial value that is today", async () => {
    render(<DatePickerField initialValue={new Date()} onDateSelection={onDateSelection} />);

    const trigger = screen.getByRole("button");
    expect(trigger.textContent).toBe("2024-12-29");

    fireEvent.click(trigger);

    const calendar = await waitForCalendarVisible();

    // December 29 is both today and selected
    const december29 = findDay(calendar, "29");
    expect(december29.cell).toBeInTheDocument();
    expect(december29.cell).toHaveClass("rdp-today", "rdp-focused");
    expect(december29.cell).toHaveAttribute("data-selected", "true");
  });

  it("renders with an error message", () => {
    render(<DatePickerField error="What'd you do?!" onDateSelection={onDateSelection} />);

    const error = screen.getByText("What'd you do?!");
    expect(error).toBeInTheDocument();
  });

  it("renders with custom className", async () => {
    render(<DatePickerField className="custom-class" onDateSelection={onDateSelection} />);

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveClass("custom-class");

    fireEvent.click(trigger);

    const calendar = await waitForCalendarVisible();
    expect(calendar).toBeInTheDocument();
  });

  it("renders with custom size", () => {
    render(<DatePickerField onDateSelection={onDateSelection} size="sm" />);

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveClass("btn--sm");
  });

  it("can select from past month", async () => {
    render(<DatePickerField onDateSelection={onDateSelection} />);

    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    const calendar = await waitForCalendarVisible();

    const previousMonthButton = within(calendar).getByLabelText("Go to the Previous Month");
    fireEvent.click(previousMonthButton);

    expect(calendar.textContent).toBe(
      "November 2024SuMoTuWeThFrSa2728293031123456789101112131415161718192021222324252627282930",
    );

    const dates = screen.getAllByRole("gridcell");
    expect(dates.length).toBe(35);

    let november12 = findDay(calendar, "12");
    expect(november12.cell).toBeInTheDocument();
    expect(november12.cell).not.toHaveAttribute("data-selected", "true");

    fireEvent.click(november12.button);

    expect(onDateSelection).toHaveBeenCalledWith(new Date("2024-11-12T05:00:00.000Z"));

    november12 = findDay(calendar, "12");
    expect(november12.cell).toHaveAttribute("data-selected", "true");
  });

  it("can select from future month", async () => {
    render(<DatePickerField onDateSelection={onDateSelection} />);

    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    const calendar = await waitForCalendarVisible();

    const nextMonthButton = within(calendar).getByLabelText("Go to the Next Month");
    fireEvent.click(nextMonthButton);

    expect(calendar.textContent).toBe(
      "January 2025SuMoTuWeThFrSa293031123456789101112131415161718192021222324252627282930311",
    );

    const dates = screen.getAllByRole("gridcell");
    expect(dates.length).toBe(35);

    let january12 = findDay(calendar, "12");
    expect(january12.cell).toBeInTheDocument();
    expect(january12.cell).not.toHaveAttribute("data-selected", "true");

    fireEvent.click(january12.button);
    expect(onDateSelection).toHaveBeenCalledWith(new Date("2025-01-12T05:00:00.000Z"));

    january12 = findDay(calendar, "12");
    expect(january12.cell).toHaveAttribute("data-selected", "true");
  });

  it("can select from different year by navigating months", async () => {
    render(<DatePickerField onDateSelection={onDateSelection} />);

    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    const calendar = await waitForCalendarVisible();

    // Navigate back 12 months to reach December 2023
    const previousMonthButton = within(calendar).getByLabelText("Go to the Previous Month");
    for (let i = 0; i < 12; i++) {
      fireEvent.click(previousMonthButton);
    }

    // Verify we're in December 2023
    expect(calendar.textContent).toContain("December 2023");

    let december19 = findDay(calendar, "19");
    expect(december19.cell).toBeInTheDocument();
    expect(december19.cell).not.toHaveAttribute("data-selected", "true");

    fireEvent.click(december19.button);

    expect(onDateSelection).toHaveBeenCalledWith(new Date("2023-12-19T05:00:00.000Z"));
    december19 = findDay(calendar, "19");
    expect(december19.cell).toHaveAttribute("data-selected", "true");
  });
});
