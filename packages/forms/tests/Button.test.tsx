import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import { Button } from "@/main";

describe("Button", () => {
  test("renders a Button with an onClick action", async () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).not.toBeDisabled();

    fireEvent.click(screen.getByText("Test Button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders a disabled Button", async () => {
    render(<Button disabled={true}>Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("renders a Button with submit type", async () => {
    render(<Button type="submit">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  test("renders a Button with reset type", async () => {
    render(<Button type="reset">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "reset");
  });
});
