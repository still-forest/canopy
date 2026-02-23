import { fireEvent, render, screen } from "@testing-library/react";
import { Home } from "lucide-react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "@/buttons";
import { ErrorPage } from "@/interstitials";

describe("ErrorPage", () => {
  it("renders with default message", () => {
    const { container } = render(<ErrorPage />);

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("interstitial--danger");

    const icon = document.querySelector(".interstitial-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders with custom message", () => {
    render(<ErrorPage message="What just happened?" />);

    expect(screen.getByText("What just happened?")).toBeInTheDocument();

    const icon = document.querySelector(".interstitial-icon");
    expect(icon).toBeInTheDocument();
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
