import { render, screen, within } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { Alert } from "@/components";

describe("Alert", () => {
  test("renders info Alert", async () => {
    render(<Alert message="This is an important message." title="Important Information" type="info" />);

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert.className).toContain("bg-info-foreground");
    expect(alert.className).toContain("text-info");
    expect(alert.className).toContain("border-info");

    expect(within(alert).getByText("Important Information")).toBeInTheDocument();
    expect(within(alert).getByText("This is an important message.")).toBeInTheDocument();
    expect(within(alert).getByTestId("alert-icon-info")).toBeInTheDocument();
  });

  test("renders success Alert", async () => {
    render(<Alert message="This is an important message." title="Important Information" type="success" />);

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert.className).toContain("bg-success-foreground");
    expect(alert.className).toContain("text-success");
    expect(alert.className).toContain("border-success");

    expect(within(alert).getByText("Important Information")).toBeInTheDocument();
    expect(within(alert).getByText("This is an important message.")).toBeInTheDocument();
    expect(within(alert).getByTestId("alert-icon-success")).toBeInTheDocument();
  });

  test("renders warning Alert", async () => {
    render(<Alert message="This is an important message." title="Important Information" type="warning" />);

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert.className).toContain("bg-warning-foreground");
    expect(alert.className).toContain("text-warning");
    expect(alert.className).toContain("border-warning");

    expect(within(alert).getByText("Important Information")).toBeInTheDocument();
    expect(within(alert).getByText("This is an important message.")).toBeInTheDocument();
    expect(within(alert).getByTestId("alert-icon-warning")).toBeInTheDocument();
  });

  test("renders error Alert", async () => {
    render(<Alert message="This is an important message." title="Important Information" type="error" />);

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert.className).toContain("bg-destructive-foreground");
    expect(alert.className).toContain("text-destructive");
    expect(alert.className).toContain("border-destructive");

    expect(within(alert).getByText("Important Information")).toBeInTheDocument();
    expect(within(alert).getByText("This is an important message.")).toBeInTheDocument();
    expect(within(alert).getByTestId("alert-icon-error")).toBeInTheDocument();
  });

  test("renders without title", async () => {
    render(<Alert message="This is an important message." type="info" />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(within(alert).getByText("This is an important message.")).toBeInTheDocument();
    expect(within(alert).getByTestId("alert-icon-info")).toBeInTheDocument();
  });

  test("renders with children", async () => {
    render(
      <Alert title="Important Information" type="info">
        <div>
          <p>This is a child</p>
          <p>This is another child</p>
        </div>
      </Alert>,
    );

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(within(alert).getByText("This is a child")).toBeInTheDocument();
    expect(within(alert).getByText("This is another child")).toBeInTheDocument();
    expect(within(alert).getByTestId("alert-icon-info")).toBeInTheDocument();
  });

  test("errors when both message and children are provided", async () => {
    expect(() => {
      render(
        <Alert message="This is an important message." title="Important Information" type="info">
          <p>This is a child</p>
        </Alert>,
      );
    }).toThrow("Alert cannot have both message and children");
  });
});
