import { render, screen, within } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Button } from "@/buttons";
import { ResponsiveDialog } from "@/presentation";

describe("ResponsiveDialog", () => {
  test("opens from its trigger when uncontrolled", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    render(
      <ResponsiveDialog onOpenChange={onOpenChange} title="Dialog title" trigger={<Button>Open dialog</Button>}>
        <p>Dialog content</p>
      </ResponsiveDialog>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open dialog" }));

    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText("Dialog title")).toBeInTheDocument();
    expect(within(dialog).getByText("Dialog content")).toBeInTheDocument();
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  test("respects the open prop when controlled", async () => {
    const user = userEvent.setup();

    const ControlledDialog = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>Open dialog</Button>
          <ResponsiveDialog onOpenChange={setOpen} open={open} title="Dialog title">
            <p>Dialog content</p>
          </ResponsiveDialog>
        </>
      );
    };

    render(<ControlledDialog />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open dialog" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
