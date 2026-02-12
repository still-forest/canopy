import { render, screen, within } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

import { Modal } from "@/components";
import { Button } from "@/forms";

describe("Modal", () => {
  test("renders a Modal", async () => {
    const user = userEvent.setup();

    render(
      <Modal description="Modal description" title="Modal title" trigger={<Button>Open modal</Button>}>
        <p>Modal content</p>
      </Modal>,
    );

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveTextContent("Open modal");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(trigger);

    const dialog = screen.getByRole("dialog");
    expect(dialog.className).toBe(
      "bg-background data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-6 rounded-xl p-6 text-sm ring-1 duration-100 sm:max-w-md fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none",
    );

    const title = within(dialog).getByText("Modal title");
    expect(title.className).toBe("leading-none font-medium");

    const description = within(dialog).getByText("Modal description");
    expect(description.className).toBe(
      "text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3",
    );

    const content = within(dialog).getByText("Modal content");
    expect(content.className).toBe("");
  });

  test("renders a Modal with no title", async () => {
    const user = userEvent.setup();

    render(
      <Modal description="Modal description" trigger={<Button>Open modal</Button>}>
        Modal content
      </Modal>,
    );

    const trigger = screen.getByRole("button");
    await user.click(trigger);

    const dialog = screen.getByRole("dialog");
    expect(dialog).not.toHaveTextContent("Modal title");
    expect(dialog).toHaveTextContent("Modal description");
    expect(dialog).toHaveTextContent("Modal content");
  });

  test("renders a Modal with no description", async () => {
    const user = userEvent.setup();

    render(
      <Modal title="Modal title" trigger={<Button>Open modal</Button>}>
        Modal content
      </Modal>,
    );

    const trigger = screen.getByRole("button");
    await user.click(trigger);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent("Modal title");
    expect(dialog).not.toHaveTextContent("Modal description");
    expect(dialog).toHaveTextContent("Modal content");
  });

  test("renders a Modal with no title or description", async () => {
    const user = userEvent.setup();

    render(<Modal trigger={<Button>Open modal</Button>}>Modal content</Modal>);

    const trigger = screen.getByRole("button");
    await user.click(trigger);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent("Modal content");
    expect(dialog).not.toHaveTextContent("Modal title");
    expect(dialog).not.toHaveTextContent("Modal description");
  });

  test("renders a controlled Modal", async () => {
    const user = userEvent.setup();

    const DummyApp = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button data-testid="external-trigger" onClick={() => setOpen(true)}>
            Open modal
          </Button>
          <Modal onOpenChange={setOpen} open={open}>
            <p>Modal content</p>
          </Modal>
        </>
      );
    };

    render(<DummyApp />);

    const externalTrigger = screen.getByTestId("external-trigger");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(externalTrigger);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent("Modal content");
  });

  test("throws an error if trigger is not provided and modal is uncontrolled", () => {
    expect(() => render(<Modal>Modal content</Modal>)).toThrow(
      "Trigger must be provided if modal state is not controlled through open, onOpenChange props.",
    );
  });
});
