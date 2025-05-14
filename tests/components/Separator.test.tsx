import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { Separator } from "@/components";

describe("Separator", () => {
  const EXPECTED_CLASS_NAME =
    "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px";

  test("renders a Separator", async () => {
    render(<Separator />);

    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass(EXPECTED_CLASS_NAME);
  });

  test("renders with gap", async () => {
    render(<Separator gap="4" />);

    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass(`${EXPECTED_CLASS_NAME} my-4`);
  });

  test("renders a vertical Separator", async () => {
    render(<Separator orientation="vertical" />);

    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass(EXPECTED_CLASS_NAME);
  });

  test("renders a vertical Separator with gap", async () => {
    render(<Separator gap="4" />);

    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass(`${EXPECTED_CLASS_NAME} my-4`);
  });
});
