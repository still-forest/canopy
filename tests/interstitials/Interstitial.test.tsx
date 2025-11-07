import { render, screen } from "@testing-library/react";
import { Mailbox } from "lucide-react";
import { describe, expect, it } from "vitest";
import { Interstitial } from "@/interstitials";

describe("Interstitial", () => {
  it("renders with message", () => {
    render(<Interstitial message="This is a message" />);

    const message = screen.getByText("This is a message");
    expect(message).toBeInTheDocument();
    expect(message.tagName).toBe("H4");
    expect(message.className).toBe("text-xl font-normal text-foreground text-center font-heading scroll-m-20");

    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });

  it("renders with headline", () => {
    render(<Interstitial headline="This is a headline" message="This is a message" />);

    const headline = screen.getByText("This is a headline");
    expect(headline).toBeInTheDocument();
    expect(headline.tagName).toBe("H2");
    expect(headline.className).toBe("text-3xl font-bold text-foreground text-center font-heading scroll-m-20");

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
    expect(headline.className).toBe("text-xl font-normal text-foreground text-center font-heading scroll-m-20");
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
