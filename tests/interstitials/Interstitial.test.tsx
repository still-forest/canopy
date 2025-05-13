import { render, screen } from "@testing-library/react";
import { Mailbox } from "lucide-react";
import { describe, expect, it } from "vitest";
import { Interstitial } from "@/interstitials";

describe("Interstitial", () => {
  it("renders with message", () => {
    render(<Interstitial message="This is an Interstitial" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });

  it("renders with icon", () => {
    render(<Interstitial iconComponent={Mailbox} message="This is an Interstitial" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-mailbox");
  });

  it("renders with icon and info variant", () => {
    render(<Interstitial variant="info" iconComponent={Mailbox} message="This is an Interstitial" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-mailbox text-info");
  });

  it("renders with icon and success variant", () => {
    render(<Interstitial variant="success" iconComponent={Mailbox} message="This is an Interstitial" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-mailbox text-success");
  });

  it("renders with icon and warning variant", () => {
    render(<Interstitial variant="warning" iconComponent={Mailbox} message="This is an Interstitial" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-mailbox text-warning");
  });

  it("renders with icon and error variant", () => {
    render(<Interstitial variant="error" iconComponent={Mailbox} message="This is an Interstitial" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-mailbox text-destructive");
  });
});
