import { render, screen, within } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { Alert } from "@/components";

describe("Alert", () => {
  test("renders info Alert", async () => {
    render(<Alert message="This is an important message." title="Important Information" type="info" />);

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert.className).toBe(
      "relative w-full rounded-lg border px-3 py-2 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 bg-info-foreground text-info border-info [&>svg]:text-current *:data-[slot=alert-description]:text-info-600",
    );

    expect(within(alert).getByText("Important Information")).toBeInTheDocument();
    expect(within(alert).getByText("This is an important message.")).toBeInTheDocument();
    expect(within(alert).getByTestId("alert-icon-info")).toBeInTheDocument();
  });

  test("renders success Alert", async () => {
    render(<Alert message="This is an important message." title="Important Information" type="success" />);

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert.className).toBe(
      "relative w-full rounded-lg border px-3 py-2 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 bg-success-foreground text-success border-success [&>svg]:text-current *:data-[slot=alert-description]:text-success-600",
    );
    expect(within(alert).getByText("Important Information")).toBeInTheDocument();
    expect(within(alert).getByText("This is an important message.")).toBeInTheDocument();
    expect(within(alert).getByTestId("alert-icon-success")).toBeInTheDocument();
  });

  test("renders warning Alert", async () => {
    render(<Alert message="This is an important message." title="Important Information" type="warning" />);

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert.className).toBe(
      "relative w-full rounded-lg border px-3 py-2 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 bg-warning-foreground text-warning border-warning [&>svg]:text-current *:data-[slot=alert-description]:text-warning/80",
    );
    expect(within(alert).getByText("Important Information")).toBeInTheDocument();
    expect(within(alert).getByText("This is an important message.")).toBeInTheDocument();
    expect(within(alert).getByTestId("alert-icon-warning")).toBeInTheDocument();
  });

  test("renders error Alert", async () => {
    render(<Alert message="This is an important message." title="Important Information" type="error" />);

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert.className).toBe(
      "relative w-full rounded-lg border px-3 py-2 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 bg-destructive-foreground text-destructive border-destructive [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/80",
    );
    expect(within(alert).getByText("Important Information")).toBeInTheDocument();
    expect(within(alert).getByText("This is an important message.")).toBeInTheDocument();
    expect(within(alert).getByTestId("alert-icon-error")).toBeInTheDocument();
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
});
