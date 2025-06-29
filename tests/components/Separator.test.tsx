import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { Separator } from "@/components";

describe("Separator", () => {
  const EXPECTED_CLASS_NAME =
    "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px";

  test("renders a Separator", async () => {
    render(<Separator />);

    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator.className).toBe(`${EXPECTED_CLASS_NAME} my-4`);
  });

  test("renders with custom gap", async () => {
    render(<Separator gap="8" />);

    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator.className).toBe(`${EXPECTED_CLASS_NAME} my-8`);
  });

  test("renders a vertical Separator", async () => {
    render(<Separator orientation="vertical" />);

    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator.className).toBe(`${EXPECTED_CLASS_NAME} mx-2`);
  });

  test("renders a vertical Separator with custom gap", async () => {
    render(<Separator gap="4" orientation="vertical" />);

    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator.className).toBe(`${EXPECTED_CLASS_NAME} mx-4`);
  });
});
