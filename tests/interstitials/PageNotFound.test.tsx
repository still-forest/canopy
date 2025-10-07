import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PageNotFound } from "@/interstitials";

describe("PageNotFound", () => {
  it("renders with default message", () => {
    render(<PageNotFound />);

    expect(screen.getByText("404: Not found")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-file-question-mark text-warning size-32");
  });

  it("renders with custom message", () => {
    render(<PageNotFound message="You appear to be lost" />);

    expect(screen.getByText("You appear to be lost")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-file-question-mark text-warning size-32");
  });

  it("renders with onBack function", () => {
    const onBack = vi.fn();
    render(<PageNotFound onBack={onBack} />);

    const goHomeButton = screen.getByRole("button", { name: "Back" });
    fireEvent.click(goHomeButton);

    expect(onBack).toHaveBeenCalled();
  });

  it("renders with custom back label", () => {
    const onBack = vi.fn();
    render(<PageNotFound backLabel="Home" onBack={onBack} />);

    const backLabel = screen.getByRole("button", { name: "Home" });
    expect(backLabel).toBeInTheDocument();
  });
});
