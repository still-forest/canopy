import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ErrorOverlay } from "@/interstitials";
import { Home } from "lucide-react";
import { Button } from "@/forms";

describe("ErrorOverlay", () => {
  it("renders with default message", () => {
    render(<ErrorOverlay />);

    expect(screen.getByText("Something went wrong.")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-circle-x text-destructive");
  });

  it("renders with custom message", () => {
    render(<ErrorOverlay message="What just happened?" />);

    expect(screen.getByText("What just happened?")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-circle-x text-destructive");
  });

  it("renders with children", () => {
    const goHome = vi.fn();
    render(
      <ErrorOverlay>
        <Button variant="primary" icon={<Home />} onClick={goHome}>
          Home
        </Button>
      </ErrorOverlay>,
    );

    const goHomeButton = screen.getByRole("button", { name: "Home" });
    fireEvent.click(goHomeButton);

    expect(goHome).toHaveBeenCalled();
  });
});
