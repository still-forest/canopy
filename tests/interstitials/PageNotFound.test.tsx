import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { PageNotFound } from "@/interstitials";
import { Mailbox } from "lucide-react";

describe("PageNotFound", () => {
  it("renders with default message", () => {
    render(<PageNotFound />);

    expect(screen.getByText("404: Not found")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-file-question text-warning");
  });

  it("renders with custom message", () => {
    render(<PageNotFound message="You appear to be lost" />);

    expect(screen.getByText("You appear to be lost")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-file-question text-warning");
  });

  it("renders with goHome button", () => {
    const goHome = vi.fn();
    render(<PageNotFound goHome={goHome} />);

    const goHomeButton = screen.getByRole("button", { name: "Home" });
    fireEvent.click(goHomeButton);

    expect(goHome).toHaveBeenCalled();
  });
});
