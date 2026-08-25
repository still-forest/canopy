import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type ComponentProps, useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { EditableText } from "@/forms/inputs";

describe("EditableText", () => {
  const renderComponent = async (props: Partial<ComponentProps<typeof EditableText>> = {}) => {
    const onSave = vi.fn();
    await render(<EditableText label="Section name" name="section-name" onSave={onSave} value="Kitchen" {...props} />);
    return { onSave, user: userEvent.setup() };
  };

  const startEditing = async (user: ReturnType<typeof userEvent.setup>) => {
    await user.click(screen.getByRole("button", { name: "Kitchen" }));
    return screen.getByRole("textbox", { name: "Section name" });
  };

  it("saves the edited value on Enter", async () => {
    const { onSave, user } = await renderComponent();

    const input = await startEditing(user);
    await user.clear(input);
    await user.type(input, "Pantry{Enter}");

    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith("Pantry");
  });

  it("collapses whitespace pasted into the title", async () => {
    const { onSave, user } = await renderComponent();

    const input = await startEditing(user);
    await user.clear(input);
    await user.paste("Pantry\nand larder");
    await user.keyboard("{Enter}");

    expect(onSave).toHaveBeenCalledWith("Pantry and larder");
  });

  it("saves the trimmed value", async () => {
    const { onSave, user } = await renderComponent();

    const input = await startEditing(user);
    await user.clear(input);
    await user.type(input, "  Pantry  {Enter}");

    expect(onSave).toHaveBeenCalledWith("Pantry");
  });

  it("saves the edit when submitted", async () => {
    const { onSave, user } = await renderComponent();

    const input = await startEditing(user);
    await user.clear(input);
    await user.type(input, "Pantry");
    await user.click(screen.getByRole("button", { name: "Save edited text" }));

    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith("Pantry");
  });

  it("saves the edited value on blur", async () => {
    const { onSave, user } = await renderComponent();

    const input = await startEditing(user);
    await user.clear(input);
    await user.type(input, "Pantry");
    await user.tab();

    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith("Pantry");
  });

  it("does not save when the value is unchanged", async () => {
    const { onSave, user } = await renderComponent();

    const input = await startEditing(user);
    await user.tab();

    expect(input).not.toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });

  it("does not save an empty value", async () => {
    const { onSave, user } = await renderComponent();

    const input = await startEditing(user);
    await user.clear(input);
    await user.type(input, "{Enter}");

    expect(onSave).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Kitchen" })).toBeInTheDocument();
  });

  it("discards the edit on Escape", async () => {
    const { onSave, user } = await renderComponent();

    const input = await startEditing(user);
    await user.clear(input);
    await user.type(input, "Pantry{Escape}");

    expect(onSave).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Kitchen" })).toBeInTheDocument();
  });

  it("discards the edit when cancelled", async () => {
    const { onSave, user } = await renderComponent();

    const input = await startEditing(user);
    await user.clear(input);
    await user.type(input, "Pantry");
    await user.click(screen.getByRole("button", { name: "Cancel editing text" }));

    expect(onSave).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Kitchen" })).toBeInTheDocument();
  });

  it("keeps displaying the value it was given, not the text that was typed", async () => {
    const { user } = await renderComponent();

    const input = await startEditing(user);
    await user.clear(input);
    await user.type(input, "Pantry{Enter}");

    expect(screen.getByRole("button", { name: "Kitchen" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Pantry" })).not.toBeInTheDocument();
  });

  it("seeds the input from the current value each time a parent opens the editor", async () => {
    const Harness = () => {
      const [isEditing, setIsEditing] = useState(false);
      return (
        <>
          <button onClick={() => setIsEditing(true)} type="button">
            Rename
          </button>
          <EditableText
            isEditing={isEditing}
            label="Section name"
            name="section-name"
            onEditingChange={setIsEditing}
            onSave={vi.fn()}
            value="Kitchen"
          />
        </>
      );
    };
    await render(<Harness />);
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "Rename" }));
    const input = screen.getByRole("textbox", { name: "Section name" });
    await user.clear(input);
    await user.type(input, "Pantry{Escape}");

    await user.click(screen.getByRole("button", { name: "Rename" }));

    expect(screen.getByRole("textbox", { name: "Section name" })).toHaveValue("Kitchen");
  });
});
