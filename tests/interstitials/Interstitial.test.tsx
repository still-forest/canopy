import { render, screen } from "@testing-library/react";
import { Mailbox } from "lucide-react";
import { describe, expect, it } from "vitest";
import { Interstitial } from "@/interstitials";

describe("Interstitial", () => {
  it("renders with message", () => {
    render(<Interstitial message="This is a message" />);

    const message = screen.getByText("This is a message");
    expect(message).toBeInTheDocument();
    expect(message.tagName).toBe("P");
    expect(message.className).toContain("text-foreground");
    expect(message.className).toContain("text-center");
    expect(message.className).toContain("font-body");

    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });

  it("renders with message className", () => {
    render(<Interstitial message="This is a message" messageClassName="text-red-500 truncate" />);

    const message = screen.getByText("This is a message");
    expect(message).toBeInTheDocument();
    expect(message.tagName).toBe("P");
    expect(message.className).toContain("text-center");
    expect(message.className).toContain("font-body");
    expect(message.className).toContain("text-red-500");
    expect(message.className).toContain("truncate");
  });

  it("renders with headline", () => {
    render(<Interstitial headline="This is a headline" message="This is a message" />);

    const headline = screen.getByText("This is a headline");
    expect(headline).toBeInTheDocument();
    expect(headline.tagName).toBe("H2");
    expect(headline.className).toContain("font-bold");
    expect(headline.className).toContain("text-foreground");
    expect(headline.className).toContain("text-center");
    expect(headline.className).toContain("font-heading");

    const message = screen.getByText("This is a message");
    expect(message).toBeInTheDocument();
  });

  it("renders with headline options", () => {
    render(
      <Interstitial
        headline="This is a headline"
        headlineLevel="4"
        headlineWeight="normal"
        message="This is a message"
      />,
    );

    const headline = screen.getByText("This is a headline");
    expect(headline).toBeInTheDocument();
    expect(headline.tagName).toBe("H4");
    expect(headline.className).toContain("text-xl");
    expect(headline.className).toContain("font-normal");
    expect(headline.className).toContain("text-center");
  });

  it("renders with icon", () => {
    render(<Interstitial iconComponent={Mailbox} message="This is an Interstitial" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toContain("size-32");
  });

  it("renders with icon and info variant", () => {
    render(<Interstitial iconComponent={Mailbox} message="This is an Interstitial" variant="info" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toContain("text-info");
    expect(icon.getAttribute("class")).toContain("size-32");
  });

  it("renders with icon and success variant", () => {
    render(<Interstitial iconComponent={Mailbox} message="This is an Interstitial" variant="success" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toContain("text-success");
    expect(icon.getAttribute("class")).toContain("size-32");
  });

  it("renders with icon and warning variant", () => {
    render(<Interstitial iconComponent={Mailbox} message="This is an Interstitial" variant="warning" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toContain("text-warning");
    expect(icon.getAttribute("class")).toContain("size-32");
  });

  it("renders with icon and error variant", () => {
    render(<Interstitial iconComponent={Mailbox} message="This is an Interstitial" variant="error" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("class")).toContain("text-destructive");
    expect(icon.getAttribute("class")).toContain("size-32");
  });
});
