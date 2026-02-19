import { fireEvent, render, screen } from "@testing-library/react";
import { Home } from "lucide-react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "@/forms";
import { ErrorPage } from "@/interstitials";

describe("ErrorPage", () => {
  it("renders with default message", () => {
    render(<ErrorPage />);

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-circle-x text-destructive size-32");
  });

  it("renders with custom message", () => {
    render(<ErrorPage message="What just happened?" />);

    expect(screen.getByText("What just happened?")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-circle-x text-destructive size-32");
  });

  it("renders with children", () => {
    const goHome = vi.fn();
    render(
      <ErrorPage>
        <Button icon={<Home />} onClick={goHome} variant="primary">
          Home
        </Button>
      </ErrorPage>,
    );

    const goHomeButton = screen.getByRole("button", { name: "Home" });
    fireEvent.click(goHomeButton);

    expect(goHome).toHaveBeenCalled();
  });
});
