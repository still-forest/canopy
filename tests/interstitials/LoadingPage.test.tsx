import { render, screen } from "@testing-library/react";
import { Mailbox } from "lucide-react";
import { describe, expect, it } from "vitest";
import { LoadingPage } from "@/interstitials";

describe("LoadingPage", () => {
  it("renders with message", () => {
    render(<LoadingPage message="Loading a thing" />);

    expect(screen.getByText("Loading a thing")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-loader-circle animate-spin size-12 text-info");
  });

  it("renders with custom icon", () => {
    render(<LoadingPage iconComponent={Mailbox} message="Loading a thing" />);

    expect(screen.getByText("Loading a thing")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-mailbox size-12 text-info");
  });
});
