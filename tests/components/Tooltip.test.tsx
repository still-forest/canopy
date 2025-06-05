import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { Tooltip } from "@/components";

describe("Tooltip", () => {
  test("renders a Tooltip", async () => {
    const user = userEvent.setup();

    render(
      <Tooltip>
        <Tooltip.Trigger>
          <button type="button">Hover over me</button>
        </Tooltip.Trigger>
        <Tooltip.Content>This is a tooltip</Tooltip.Content>
      </Tooltip>
    );

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveTextContent("Hover over me");
    expect(trigger.className).toBe("cursor-pointer");

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

    await user.hover(trigger);

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveTextContent("This is a tooltip");
  });

  test("renders a Tooltip with an arrow cursor", async () => {
    render(
      <Tooltip>
        <Tooltip.Trigger cursor="arrow">
          <button type="button">Hover over me</button>
        </Tooltip.Trigger>
        <Tooltip.Content>This is a tooltip</Tooltip.Content>
      </Tooltip>
    );

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveTextContent("Hover over me");
    expect(trigger.className).toBe("cursor-default");
  });
  test("renders a Tooltip with a pointer cursor", async () => {
    render(
      <Tooltip>
        <Tooltip.Trigger cursor="pointer">
          <button type="button">Hover over me</button>
        </Tooltip.Trigger>
        <Tooltip.Content>This is a tooltip</Tooltip.Content>
      </Tooltip>
    );

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveTextContent("Hover over me");
    expect(trigger.className).toBe("cursor-pointer");
  });
  test("renders a Tooltip with a text cursor", async () => {
    render(
      <Tooltip>
        <Tooltip.Trigger cursor="text">
          <button type="button">Hover over me</button>
        </Tooltip.Trigger>
        <Tooltip.Content>This is a tooltip</Tooltip.Content>
      </Tooltip>
    );

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveTextContent("Hover over me");
    expect(trigger.className).toBe("cursor-text");
  });
  test("renders a Tooltip with an not-allowed cursor", async () => {
    render(
      <Tooltip>
        <Tooltip.Trigger cursor="not-allowed">
          <button type="button">Hover over me</button>
        </Tooltip.Trigger>
        <Tooltip.Content>This is a tooltip</Tooltip.Content>
      </Tooltip>
    );

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveTextContent("Hover over me");
    expect(trigger.className).toBe("cursor-not-allowed");
  });

  test("renders a pre-opened Tooltip", async () => {
    render(
      <Tooltip open={true}>
        <Tooltip.Trigger>
          <button type="button">Hover over me</button>
        </Tooltip.Trigger>
        <Tooltip.Content>This is a tooltip</Tooltip.Content>
      </Tooltip>
    );

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveTextContent("Hover over me");

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveTextContent("This is a tooltip");
  });

  test("renders a Tooltip with onOpenChange", async () => {
    const user = userEvent.setup();

    const onOpenChange = vi.fn();

    render(
      <Tooltip onOpenChange={onOpenChange}>
        <Tooltip.Trigger>
          <button type="button">Hover over me</button>
        </Tooltip.Trigger>
        <Tooltip.Content>This is a tooltip</Tooltip.Content>
      </Tooltip>
    );

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveTextContent("Hover over me");
    await user.hover(trigger);

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveTextContent("This is a tooltip");

    expect(onOpenChange).toHaveBeenCalledWith(true);
  });
});
