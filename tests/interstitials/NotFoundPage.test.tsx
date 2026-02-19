import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NotFoundPage } from "@/interstitials";

describe("NotFoundPage", () => {
  it("renders with default headline", () => {
    render(<NotFoundPage />);

    const headline = screen.getByText("Page not found");
    expect(headline).toBeInTheDocument();
    expect(headline.tagName).toBe("H2");
    expect(headline.className).toBe("text-3xl font-bold text-foreground text-center font-heading scroll-m-20");

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-file-question-mark text-warning size-32");
  });

  it("renders with custom headline", () => {
    render(<NotFoundPage headline="You appear to be lost" headlineLevel="4" headlineWeight="normal" />);

    const headline = screen.getByText("You appear to be lost");
    expect(headline).toBeInTheDocument();
    expect(headline.tagName).toBe("H4");
    expect(headline.className).toBe("text-xl font-normal text-foreground text-center font-heading scroll-m-20");

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-file-question-mark text-warning size-32");
  });

  it("renders with message", () => {
    render(<NotFoundPage message="You appear to be lost" />);

    const headline = screen.getByText("Page not found");
    expect(headline).toBeInTheDocument();

    const message = screen.getByText("You appear to be lost");
    expect(message).toBeInTheDocument();
    expect(message.tagName).toBe("P");
    expect(message.className).toBe("text-foreground text-center font-body");
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
