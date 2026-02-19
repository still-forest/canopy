import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NotFoundPage } from "@/interstitials";

describe("NotFoundPage", () => {
  it("renders with default headline", () => {
    render(<NotFoundPage />);

    const headline = screen.getByText("Page not found");
    expect(headline).toBeInTheDocument();
    expect(headline.tagName).toBe("H2");
    expect(headline.className).toContain("font-bold");
    expect(headline.className).toContain("text-foreground");
    expect(headline.className).toContain("text-center");

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toContain("text-warning");
    expect(icon.getAttribute("class")).toContain("size-32");
  });

  it("renders with custom headline", () => {
    render(<NotFoundPage headline="You appear to be lost" headlineLevel="4" headlineWeight="normal" />);

    const headline = screen.getByText("You appear to be lost");
    expect(headline).toBeInTheDocument();
    expect(headline.tagName).toBe("H4");
    expect(headline.className).toContain("text-xl");
    expect(headline.className).toContain("font-normal");
    expect(headline.className).toContain("text-center");

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toContain("text-warning");
  });

  it("renders with message", () => {
    render(<NotFoundPage message="You appear to be lost" />);

    const headline = screen.getByText("Page not found");
    expect(headline).toBeInTheDocument();

    const message = screen.getByText("You appear to be lost");
    expect(message).toBeInTheDocument();
    expect(message.tagName).toBe("P");
    expect(message.className).toContain("text-foreground");
    expect(message.className).toContain("text-center");
    expect(message.className).toContain("font-body");
  });

  it("renders with onBack function", () => {
    const onBack = vi.fn();
    render(<NotFoundPage onBack={onBack} />);

    const goHomeButton = screen.getByRole("button", { name: "Back" });
    fireEvent.click(goHomeButton);

    expect(onBack).toHaveBeenCalled();
  });

  it("renders with custom back label", () => {
    const onBack = vi.fn();
    render(<NotFoundPage backLabel="Home" onBack={onBack} />);

    const backLabel = screen.getByRole("button", { name: "Home" });
    expect(backLabel).toBeInTheDocument();
  });
});
