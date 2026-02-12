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
    expect(switchElement).toHaveAttribute("data-unchecked", "");
    expect(switchElement).toHaveClass(
      "peer data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-unchecked:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-3 data-disabled:cursor-not-allowed data-disabled:opacity-50",
    );

    const label = screen.getByText("Test Switch");
    expect(label).toHaveClass(
      "font-display font-normal text-foreground text-base cursor-pointer flex items-center select-none",
    );
  });

  it("renders a Switch with checked", () => {
    render(<Switch checked={true} label="Test Switch" name="test-switch" />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveAttribute("aria-checked", "true");
    expect(switchElement).toHaveAttribute("data-checked", "");
  });

  it("renders a Switch with left and right labels", () => {
    render(<Switch checked={false} label={["Leftie", "Rightie"]} name="test-switch" />);

    const leftLabel = screen.getByText("Leftie");
    expect(leftLabel).toBeInTheDocument();

    const rightLabel = screen.getByText("Rightie");
    expect(rightLabel).toBeInTheDocument();
  });

  it("renders a Switch with change handler", async () => {
    const handleClick = vi.fn();
    render(<Switch checked={false} label="Test Switch" name="test-switch" onCheckedChange={handleClick} />);

    const switchElement = screen.getByRole("switch");
    await userEvent.click(switchElement);
    expect(handleClick).toHaveBeenCalledWith(true, expect.anything());
  });

  it("renders a Switch with label class name", () => {
    render(
      <Switch
        checked={false}
        label={["Leftie", "Rightie"]}
        labelClassName={["text-blue-500", "text-red-500"]}
        name="test-switch"
      />,
    );

    const leftLabel = screen.getByText("Leftie");
    expect(leftLabel).toHaveClass("text-blue-500");

    const rightLabel = screen.getByText("Rightie");
    expect(rightLabel).toHaveClass("text-red-500");
  });
});
