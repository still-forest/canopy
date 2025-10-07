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
    expect(icon.getAttribute("class")).toBe("lucide lucide-mailbox size-32");
  });

  it("renders with icon and info variant", () => {
    render(<Interstitial iconComponent={Mailbox} message="This is an Interstitial" variant="info" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-mailbox text-info size-32");
  });

  it("renders with icon and success variant", () => {
    render(<Interstitial iconComponent={Mailbox} message="This is an Interstitial" variant="success" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-mailbox text-success size-32");
  });

  it("renders with icon and warning variant", () => {
    render(<Interstitial iconComponent={Mailbox} message="This is an Interstitial" variant="warning" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-mailbox text-warning size-32");
  });

  it("renders with icon and error variant", () => {
    render(<Interstitial iconComponent={Mailbox} message="This is an Interstitial" variant="error" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toBe("lucide lucide-mailbox text-destructive size-32");
  });
});
