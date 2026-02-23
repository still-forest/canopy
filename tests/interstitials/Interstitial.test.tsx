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
    expect(message).toHaveClass("interstitial-message");

    expect(document.querySelector(".interstitial-icon")).not.toBeInTheDocument();
  });

  it("renders with headline", () => {
    render(<Interstitial headline="This is a headline" message="This is a message" />);

    const headline = screen.getByText("This is a headline");
    expect(headline).toBeInTheDocument();
    expect(headline.tagName).toBe("H2");
    expect(headline).toHaveClass("interstitial-headline");

    const message = screen.getByText("This is a message");
    expect(message).toBeInTheDocument();
  });

  it("renders with icon", () => {
    render(<Interstitial icon={<Mailbox />} message="This is an Interstitial" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();

    const icon = document.querySelector(".interstitial-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders with icon and info variant", () => {
    const { container } = render(<Interstitial icon={<Mailbox />} message="This is an Interstitial" variant="info" />);

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("interstitial--info");

    const icon = document.querySelector(".interstitial-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders with icon and success variant", () => {
    const { container } = render(
      <Interstitial icon={<Mailbox />} message="This is an Interstitial" variant="success" />,
    );

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("interstitial--success");

    const icon = document.querySelector(".interstitial-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders with icon and warning variant", () => {
    const { container } = render(
      <Interstitial icon={<Mailbox />} message="This is an Interstitial" variant="warning" />,
    );

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("interstitial--warning");

    const icon = document.querySelector(".interstitial-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders with icon and error variant", () => {
    const { container } = render(
      <Interstitial icon={<Mailbox />} message="This is an Interstitial" variant="danger" />,
    );

    expect(screen.getByText("This is an Interstitial")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("interstitial--danger");

    const icon = document.querySelector(".interstitial-icon");
    expect(icon).toBeInTheDocument();
  });
});
