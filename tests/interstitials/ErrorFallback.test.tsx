import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ErrorFallback } from "@/interstitials";

describe("ErrorFallback", () => {
  it("renders with default message", () => {
    render(<ErrorFallback error={new Error()} />);

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Unknown error occurred")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-circle-x text-destructive size-32");

    const reloadButton = screen.getByRole("button", { name: "Reload" });
    expect(reloadButton).toBeInTheDocument();

    fireEvent.click(reloadButton);
  });

  it("renders with error message", () => {
    render(<ErrorFallback error={new Error("Kaboom!")} />);

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Kaboom!")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-circle-x text-destructive size-32");

    const reloadButton = screen.getByRole("button", { name: "Reload" });
    expect(reloadButton).toBeInTheDocument();

    fireEvent.click(reloadButton);
  });

  it("renders with custom onRetry", () => {
    const onRetry = vi.fn();
    render(<ErrorFallback error={new Error("Kaboom!")} onRetry={onRetry} />);

    const reloadButton = screen.getByRole("button", { name: "Reload" });
    fireEvent.click(reloadButton);

    expect(onRetry).toHaveBeenCalled();
  });
});
