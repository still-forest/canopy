import { render, screen, within } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Button } from "@/buttons";
import { SimpleDialog } from "@/components";

describe("SimpleDialog", () => {
  test("renders a SimpleDialog", async () => {
    const user = userEvent.setup();

    render(
      <SimpleDialog description="Modal description" title="Modal title" trigger={<Button>Open modal</Button>}>
        <p>Modal content</p>
      </SimpleDialog>,
    );

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveTextContent("Open modal");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(trigger);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();

    const title = within(dialog).getByText("Modal title");
    expect(title).toBeInTheDocument();

    const description = within(dialog).getByText("Modal description");
    expect(description).toBeInTheDocument();

    const content = within(dialog).getByText("Modal content");
    expect(content).toBeInTheDocument();
  });

  test("renders a SimpleDialog with no title", async () => {
    const user = userEvent.setup();

    render(
      <SimpleDialog description="Modal description" trigger={<Button>Open modal</Button>}>
        Modal content
      </SimpleDialog>,
    );

    const trigger = screen.getByRole("button");
    await user.click(trigger);

    const dialog = screen.getByRole("dialog");
    expect(dialog).not.toHaveTextContent("Modal title");
    expect(dialog).toHaveTextContent("Modal description");
    expect(dialog).toHaveTextContent("Modal content");
  });

  test("renders a SimpleDialog with no description", async () => {
    const user = userEvent.setup();

    render(
      <SimpleDialog title="Modal title" trigger={<Button>Open modal</Button>}>
        Modal content
      </SimpleDialog>,
    );

    const trigger = screen.getByRole("button");
    await user.click(trigger);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent("Modal title");
    expect(dialog).not.toHaveTextContent("Modal description");
    expect(dialog).toHaveTextContent("Modal content");
  });

  test("renders a SimpleDialog with no title or description", async () => {
    const user = userEvent.setup();

    render(<SimpleDialog trigger={<Button>Open modal</Button>}>Modal content</SimpleDialog>);

    const trigger = screen.getByRole("button");
    await user.click(trigger);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent("Modal content");
    expect(dialog).not.toHaveTextContent("Modal title");
    expect(dialog).not.toHaveTextContent("Modal description");
  });

  test("renders a controlled SimpleDialog", async () => {
    const user = userEvent.setup();

    const DummyApp = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button data-testid="external-trigger" onClick={() => setOpen(true)}>
            Open modal
          </Button>
          <SimpleDialog onOpenChange={setOpen} open={open}>
            <p>Modal content</p>
          </SimpleDialog>
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

  test("throws an error if trigger is not provided and dialog is uncontrolled", () => {
    expect(() => render(<SimpleDialog>Modal content</SimpleDialog>)).toThrow(
      "Trigger must be provided if dialog state is not controlled through open, onOpenChange props.",
    );
  });
});
