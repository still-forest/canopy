import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PageNotFound } from "@/interstitials";

describe("PageNotFound", () => {
  it("renders with default headline", () => {
    render(<PageNotFound />);

    const headline = screen.getByText("Page not found");
    expect(headline).toBeInTheDocument();
    expect(headline.tagName).toBe("H2");
    expect(headline.className).toBe("text-3xl font-bold text-foreground text-center font-heading scroll-m-20");

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-file-question-mark text-warning size-32");
  });

  it("renders with custom headline", () => {
    render(<PageNotFound message="You appear to be lost" />);

    expect(screen.getByText("You appear to be lost")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-file-question-mark text-warning size-32");
  });

  it("renders with message", () => {
    render(<PageNotFound message="You appear to be lost" />);

    const headline = screen.getByText("Page not found");
    expect(headline).toBeInTheDocument();

    const message = screen.getByText("You appear to be lost");
    expect(message).toBeInTheDocument();
    expect(message.tagName).toBe("P");
    expect(message.className).toBe("text-foreground text-center font-body");
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
