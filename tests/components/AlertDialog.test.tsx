import { render, screen, within } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Button } from "@/buttons";
import { AlertDialog } from "@/components";

function renderAlertDialog({
  size,
  onOpenChange,
}: {
  size?: "default" | "sm";
  onOpenChange?: (open: boolean) => void;
} = {}) {
  return render(
    <AlertDialog onOpenChange={onOpenChange}>
      <AlertDialog.Trigger render={<Button />}>Open</AlertDialog.Trigger>
      <AlertDialog.Content size={size}>
        <AlertDialog.Header>
          <AlertDialog.Title>Confirm action</AlertDialog.Title>
          <AlertDialog.Description>Are you sure?</AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action onClick={() => {}}>Confirm</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>,
  );
}

describe("AlertDialog", () => {
  test("opens when trigger is clicked and shows header/body/footer content", async () => {
    const user = userEvent.setup();
    renderAlertDialog();

    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open" }));

    const dialog = screen.getByRole("alertdialog");
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText("Confirm action")).toBeInTheDocument();
    expect(within(dialog).getByText("Are you sure?")).toBeInTheDocument();
    expect(within(dialog).getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(within(dialog).getByRole("button", { name: "Confirm" })).toBeInTheDocument();
  });

  test("closes when cancel is clicked", async () => {
    const user = userEvent.setup();
    renderAlertDialog();

    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(screen.getByRole("alertdialog")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Cancel" }));
    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
  });

  test("fires onOpenChange callback on open and close", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    renderAlertDialog({ onOpenChange });

    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(onOpenChange).toHaveBeenCalledWith(true, expect.anything());

    await user.click(screen.getByRole("button", { name: "Cancel" }));
    expect(onOpenChange).toHaveBeenCalledWith(false, expect.anything());
  });

  test("renders default size variant", async () => {
    const user = userEvent.setup();
    renderAlertDialog();

    await user.click(screen.getByRole("button", { name: "Open" }));

    const content = screen.getByRole("alertdialog");
    expect(content).toHaveAttribute("data-size", "default");
  });

  test("closes when confirm action is clicked", async () => {
    const user = userEvent.setup();
    const onConfirm = vi.fn();

    render(
      <AlertDialog>
        <AlertDialog.Trigger render={<Button />}>Open</AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Footer>
            <AlertDialog.Action onClick={onConfirm}>Confirm</AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>,
    );

    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(screen.getByRole("alertdialog")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Confirm" }));
    expect(onConfirm).toHaveBeenCalledOnce();
    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
  });

  test("renders sm size variant", async () => {
    const user = userEvent.setup();
    renderAlertDialog({ size: "sm" });

    await user.click(screen.getByRole("button", { name: "Open" }));

    const content = screen.getByRole("alertdialog");
    expect(content).toHaveAttribute("data-size", "sm");
  });
});
