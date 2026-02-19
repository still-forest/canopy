import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ToggleField } from "@/forms";

describe("ToggleField", () => {
  it("renders a ToggleField", () => {
    render(<ToggleField checked={false} label="Test Switch" name="test-switch" />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveAttribute("aria-checked", "false");
    expect(switchElement).toHaveAttribute("data-unchecked", "");

    const label = screen.getByText("Test Switch");
    expect(label).toBeInTheDocument();
  });

  it("renders a Switch with checked", () => {
    render(<ToggleField checked={true} label="Test Switch" name="test-switch" />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveAttribute("aria-checked", "true");
    expect(switchElement).toHaveAttribute("data-checked", "");
  });

  it("renders a Switch with left and right labels", () => {
    render(<ToggleField checked={false} label={["Leftie", "Rightie"]} name="test-switch" />);

    const leftLabel = screen.getByText("Leftie");
    expect(leftLabel).toBeInTheDocument();

    const rightLabel = screen.getByText("Rightie");
    expect(rightLabel).toBeInTheDocument();
  });

  it("renders a Switch with change handler", async () => {
    const handleClick = vi.fn();
    render(<ToggleField checked={false} label="Test Switch" name="test-switch" onCheckedChange={handleClick} />);

    const switchElement = screen.getByRole("switch");
    await userEvent.click(switchElement);
    expect(handleClick).toHaveBeenCalledWith(true, expect.anything());
  });

  it("renders a Switch with label class name", () => {
    render(
      <ToggleField
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
