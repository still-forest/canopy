import { render, screen } from "@testing-library/react";
import { Mailbox } from "lucide-react";
import { describe, expect, it } from "vitest";
import { LoadingPage } from "@/interstitials";

describe("LoadingPage", () => {
  it("renders with message", () => {
    render(<LoadingPage message="Loading a thing" />);

    expect(screen.getByText("Loading a thing")).toBeInTheDocument();

    const icon = screen.getByRole("status");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("interstitial-icon");
    expect(icon).toHaveClass("animate-spin");
  });

  it("renders with custom icon", () => {
    render(<LoadingPage icon={<Mailbox />} message="Loading a thing" />);

    expect(screen.getByText("Loading a thing")).toBeInTheDocument();

    const icon = document.querySelector(".interstitial-icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("lucide-mailbox");
  });
});
