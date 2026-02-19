import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { Separator } from "@/components";

describe("Separator", () => {
  test("renders a Separator", async () => {
    render(<Separator />);

    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator.className).toContain("my-4");
  });

  test("renders with custom gap", async () => {
    render(<Separator gap="8" />);

    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator.className).toContain("my-8");
  });

  test("renders a vertical Separator", async () => {
    render(<Separator orientation="vertical" />);

    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator.className).toContain("mx-2");
  });

  test("renders a vertical Separator with custom gap", async () => {
    render(<Separator gap="4" orientation="vertical" />);

    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator.className).toContain("mx-4");
  });
});
