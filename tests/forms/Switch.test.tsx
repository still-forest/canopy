import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Switch } from "@/forms";

describe("Switch", () => {
  it("renders a Switch", () => {
    render(<Switch checked={false} label="Test Switch" name="test-switch" />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveAttribute("aria-checked", "false");
    expect(switchElement).toHaveAttribute("data-state", "unchecked");
    expect(switchElement).toHaveAttribute("type", "button");
    expect(switchElement).toHaveAttribute("value", "on");
    expect(switchElement).toHaveClass(
      "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 h-[18px] w-8",
    );

    const label = screen.getByText("Test Switch");
    expect(label.className).toBe(
      "flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 font-display font-normal text-foreground text-base cursor-pointer",
    );
  });

  it("renders a Switch with checked", () => {
    render(<Switch checked={true} label="Test Switch" name="test-switch" />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveAttribute("aria-checked", "true");
    expect(switchElement).toHaveAttribute("data-state", "checked");
  });

  it("renders a Switch with left label", () => {
    render(<Switch checked={false} label="Test Switch" leftLabel="Left" name="test-switch" />);

    const label = screen.getByText("Left");
    expect(label).toBeInTheDocument();
  });

  it("renders a Switch with right label", () => {
    render(<Switch checked={false} label="Test Switch" name="test-switch" rightLabel="Right" />);

    const label = screen.getByText("Right");
    expect(label).toBeInTheDocument();
  });

  it("renders a Switch with xs size", () => {
    render(<Switch checked={false} label="Test Switch" name="test-switch" size="xs" />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveClass("h-[10px] w-4");
  });

  it("renders a Switch with sm size", () => {
    render(<Switch checked={false} label="Test Switch" name="test-switch" size="sm" />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveClass("h-[14px] w-6");
  });

  it("renders a Switch with md size", () => {
    render(<Switch checked={false} label="Test Switch" name="test-switch" size="md" />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveClass("h-[18px] w-8");
  });

  it("renders a Switch with lg size", () => {
    render(<Switch checked={false} label="Test Switch" name="test-switch" size="lg" />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveClass("h-[22px] w-10");
  });

  it("renders a Switch with xl size", () => {
    render(<Switch checked={false} label="Test Switch" name="test-switch" size="xl" />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveClass("h-[26px] w-12");
  });

  it("renders a Switch with change handler", async () => {
    const handleClick = vi.fn();
    render(<Switch checked={false} label="Test Switch" name="test-switch" onCheckedChange={handleClick} />);

    const switchElement = screen.getByRole("switch");
    await userEvent.click(switchElement);
    expect(handleClick).toHaveBeenCalledWith(true);
  });

  it("renders a Switch with label class name", () => {
    render(
      <Switch
        checked={false}
        label="Test Switch"
        labelClassName="text-blue-500"
        leftLabel="Leftie"
        name="test-switch"
      />,
    );

    const rightLabel = screen.getByText("Test Switch");
    expect(rightLabel).toHaveClass("text-blue-500");

    const leftLabel = screen.getByText("Leftie");
    expect(leftLabel).toHaveClass("text-blue-500");
  });
});
