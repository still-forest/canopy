import { fireEvent, render, screen } from "@testing-library/react";
import { Home, User } from "lucide-react";
import { describe, expect, it, vi } from "vitest";

import { ButtonSelectInput } from "@/forms";

describe("ButtonSelectInput", () => {
  const OPTIONS = [
    { value: "bart", label: "Bart" },
    { value: "lisa", label: "Lisa" },
    { value: "maggie", label: "Maggie" },
  ];

  const SECONDARY_OPTIONS = [
    { value: "homer", label: "Homer" },
    { value: "marge", label: "Marge" },
  ];

  describe("Rendering", () => {
    it("renders all primary options as buttons", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value={undefined} />);

      const buttons = screen.getAllByRole("radio");
      expect(buttons).toHaveLength(OPTIONS.length);

      OPTIONS.forEach((option, index) => {
        expect(buttons[index]).toHaveTextContent(option.label);
      });
    });

    it("renders with a label", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput label="Choose a character" onChange={onChange} options={OPTIONS} value={undefined} />);

      const label = screen.getByText("Choose a character");
      expect(label).toBeInTheDocument();
    });

    it("renders with a note", () => {
      const onChange = vi.fn();
      render(
        <ButtonSelectInput note="This is a helpful note" onChange={onChange} options={OPTIONS} value={undefined} />,
      );

      const note = screen.getByText("This is a helpful note");
      expect(note).toBeInTheDocument();
    });

    it("renders with an error message", () => {
      const onChange = vi.fn();
      render(
        <ButtonSelectInput error="Please select an option" onChange={onChange} options={OPTIONS} value={undefined} />,
      );

      const error = screen.getByText("Please select an option");
      expect(error).toBeInTheDocument();
    });

    it("renders with secondary options", () => {
      const onChange = vi.fn();
      render(
        <ButtonSelectInput
          onChange={onChange}
          options={OPTIONS}
          secondaryOptions={SECONDARY_OPTIONS}
          value={undefined}
        />,
      );

      const buttons = screen.getAllByRole("radio");
      // Primary options + secondary trigger = 4 radio buttons
      expect(buttons).toHaveLength(OPTIONS.length + 1);
      expect(buttons[OPTIONS.length]).toHaveAccessibleName("More options...");
    });
  });

  describe("Accessibility - ARIA attributes", () => {
    it("has proper radiogroup role", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value={undefined} />);

      const radioGroup = screen.getByRole("radiogroup");
      expect(radioGroup).toBeInTheDocument();
    });

    it("associates label with radiogroup via aria-labelledby", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput label="Choose a character" onChange={onChange} options={OPTIONS} value={undefined} />);

      const radioGroup = screen.getByRole("radiogroup");
      const labelId = radioGroup.getAttribute("aria-labelledby");

      expect(labelId).toBeTruthy();

      const label = screen.getByText("Choose a character");
      expect(label).toHaveAttribute("id", labelId);
    });

    it("uses aria-label when no label is provided", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput name="character-select" onChange={onChange} options={OPTIONS} value={undefined} />);

      const radioGroup = screen.getByRole("radiogroup");
      expect(radioGroup).toHaveAttribute("aria-label", "character-select");
    });

    it("associates error with radiogroup via aria-describedby", () => {
      const onChange = vi.fn();
      render(
        <ButtonSelectInput error="Please select an option" onChange={onChange} options={OPTIONS} value={undefined} />,
      );

      const radioGroup = screen.getByRole("radiogroup");
      const errorId = radioGroup.getAttribute("aria-describedby");

      expect(errorId).toBeTruthy();

      const error = screen.getByText("Please select an option");
      expect(error).toHaveAttribute("id", errorId);
    });

    it("sets aria-invalid when error is present", () => {
      const onChange = vi.fn();
      render(
        <ButtonSelectInput error="Please select an option" onChange={onChange} options={OPTIONS} value={undefined} />,
      );

      const radioGroup = screen.getByRole("radiogroup");
      expect(radioGroup).toHaveAttribute("aria-invalid", "true");
    });

    it("marks selected button with aria-checked=true", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="bart" />);

      const buttons = screen.getAllByRole("radio");
      expect(buttons[0]).toHaveAttribute("aria-checked", "true");
      expect(buttons[1]).toHaveAttribute("aria-checked", "false");
      expect(buttons[2]).toHaveAttribute("aria-checked", "false");
    });

    it("updates aria-checked when selection changes", () => {
      const onChange = vi.fn();
      const { rerender } = render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="bart" />);

      let buttons = screen.getAllByRole("radio");
      expect(buttons[0]).toHaveAttribute("aria-checked", "true");

      rerender(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="lisa" />);

      buttons = screen.getAllByRole("radio");
      expect(buttons[0]).toHaveAttribute("aria-checked", "false");
      expect(buttons[1]).toHaveAttribute("aria-checked", "true");
    });

    it("associates note with radiogroup via aria-describedby", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput note="Pick your favorite" onChange={onChange} options={OPTIONS} value={undefined} />);

      const radioGroup = screen.getByRole("radiogroup");
      const describedBy = radioGroup.getAttribute("aria-describedby");
      expect(describedBy).toBeTruthy();

      const note = screen.getByText("Pick your favorite");
      expect(note).toHaveAttribute("id", describedBy);
    });

    it("associates both note and error with radiogroup via aria-describedby", () => {
      const onChange = vi.fn();
      render(
        <ButtonSelectInput
          error="Selection required"
          note="Pick your favorite"
          onChange={onChange}
          options={OPTIONS}
          value={undefined}
        />,
      );

      const radioGroup = screen.getByRole("radiogroup");
      const describedBy = radioGroup.getAttribute("aria-describedby");
      expect(describedBy).toBeTruthy();

      const ids = describedBy!.split(" ");
      expect(ids).toHaveLength(2);

      const note = screen.getByText("Pick your favorite");
      const error = screen.getByText("Selection required");
      expect(note).toHaveAttribute("id", ids[0]);
      expect(error).toHaveAttribute("id", ids[1]);
    });

    it("does not have aria-expanded on secondary trigger with role radio", () => {
      const onChange = vi.fn();
      render(
        <ButtonSelectInput
          onChange={onChange}
          options={OPTIONS}
          secondaryOptions={SECONDARY_OPTIONS}
          value={undefined}
        />,
      );

      const buttons = screen.getAllByRole("radio");
      const secondaryButton = buttons[buttons.length - 1];
      expect(secondaryButton).not.toHaveAttribute("aria-expanded");
    });
  });

  describe("Accessibility - Keyboard navigation", () => {
    it("makes only selected button tabbable", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="lisa" />);

      const buttons = screen.getAllByRole("radio");
      expect(buttons[0]).toHaveAttribute("tabIndex", "-1");
      expect(buttons[1]).toHaveAttribute("tabIndex", "0");
      expect(buttons[2]).toHaveAttribute("tabIndex", "-1");
    });

    it("makes first button tabbable when nothing is selected", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value={undefined} />);

      const buttons = screen.getAllByRole("radio");
      expect(buttons[0]).toHaveAttribute("tabIndex", "0");
      expect(buttons[1]).toHaveAttribute("tabIndex", "-1");
      expect(buttons[2]).toHaveAttribute("tabIndex", "-1");
    });

    it("navigates to next option with ArrowRight", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="bart" />);

      const buttons = screen.getAllByRole("radio");
      fireEvent.keyDown(buttons[0], { key: "ArrowRight" });

      expect(onChange).toHaveBeenCalledWith("lisa");
    });

    it("navigates to previous option with ArrowLeft", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="lisa" />);

      const buttons = screen.getAllByRole("radio");
      fireEvent.keyDown(buttons[1], { key: "ArrowLeft" });

      expect(onChange).toHaveBeenCalledWith("bart");
    });

    it("navigates to next option with ArrowDown", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="bart" />);

      const buttons = screen.getAllByRole("radio");
      fireEvent.keyDown(buttons[0], { key: "ArrowDown" });

      expect(onChange).toHaveBeenCalledWith("lisa");
    });

    it("navigates to previous option with ArrowUp", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="lisa" />);

      const buttons = screen.getAllByRole("radio");
      fireEvent.keyDown(buttons[1], { key: "ArrowUp" });

      expect(onChange).toHaveBeenCalledWith("bart");
    });

    it("wraps to first option when navigating right from last option", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="maggie" />);

      const buttons = screen.getAllByRole("radio");
      fireEvent.keyDown(buttons[2], { key: "ArrowRight" });

      expect(onChange).toHaveBeenCalledWith("bart");
    });

    it("wraps to last option when navigating left from first option", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="bart" />);

      const buttons = screen.getAllByRole("radio");
      fireEvent.keyDown(buttons[0], { key: "ArrowLeft" });

      expect(onChange).toHaveBeenCalledWith("maggie");
    });

    it("navigates to first option with Home key", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="maggie" />);

      const buttons = screen.getAllByRole("radio");
      fireEvent.keyDown(buttons[2], { key: "Home" });

      expect(onChange).toHaveBeenCalledWith("bart");
    });

    it("navigates to last option with End key", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="bart" />);

      const buttons = screen.getAllByRole("radio");
      fireEvent.keyDown(buttons[0], { key: "End" });

      expect(onChange).toHaveBeenCalledWith("maggie");
    });

    it("selects option with Space key", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="bart" />);

      const buttons = screen.getAllByRole("radio");
      fireEvent.keyDown(buttons[0], { key: " " });

      expect(onChange).toHaveBeenCalledWith("bart");
    });

    it("selects option with Enter key", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="bart" />);

      const buttons = screen.getAllByRole("radio");
      fireEvent.keyDown(buttons[0], { key: "Enter" });

      expect(onChange).toHaveBeenCalledWith("bart");
    });
  });

  describe("Keyboard navigation with secondary options", () => {
    it("navigates between primary and secondary options", () => {
      const onChange = vi.fn();
      render(
        <ButtonSelectInput onChange={onChange} options={OPTIONS} secondaryOptions={SECONDARY_OPTIONS} value="maggie" />,
      );

      const buttons = screen.getAllByRole("radio");
      // Navigate from last primary to first secondary
      fireEvent.keyDown(buttons[2], { key: "ArrowRight" });

      expect(onChange).toHaveBeenCalledWith("homer");
    });

    it("wraps from last secondary to first primary option", () => {
      const onChange = vi.fn();
      render(
        <ButtonSelectInput onChange={onChange} options={OPTIONS} secondaryOptions={SECONDARY_OPTIONS} value="marge" />,
      );

      const buttons = screen.getAllByRole("radio");
      const secondaryButton = buttons[buttons.length - 1];
      fireEvent.keyDown(secondaryButton, { key: "ArrowRight" });

      // Since we start at 'marge' (last secondary), ArrowRight should wrap to 'bart' (first primary)
      expect(onChange).toHaveBeenCalledWith("bart");
    });
  });

  describe("Selection behavior", () => {
    it("calls onChange when a button is clicked", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value={undefined} />);

      const buttons = screen.getAllByRole("radio");
      fireEvent.click(buttons[1]);

      expect(onChange).toHaveBeenCalledWith("lisa");
    });

    it("highlights selected button with primary variant", () => {
      const onChange = vi.fn();
      render(<ButtonSelectInput onChange={onChange} options={OPTIONS} value="bart" />);

      const buttons = screen.getAllByRole("radio");
      // Primary variant adds specific styles, we check aria-checked instead
      expect(buttons[0]).toHaveAttribute("aria-checked", "true");
      expect(buttons[1]).toHaveAttribute("aria-checked", "false");
      expect(buttons[2]).toHaveAttribute("aria-checked", "false");
    });
  });

  describe("Icon support", () => {
    it("renders buttons with icons only", () => {
      const onChange = vi.fn();
      const iconOptions = [
        { value: "home", icon: <Home data-testid="home-icon" /> },
        { value: "user", icon: <User data-testid="user-icon" /> },
      ];

      render(<ButtonSelectInput onChange={onChange} options={iconOptions} value={undefined} />);

      expect(screen.getByTestId("home-icon")).toBeInTheDocument();
      expect(screen.getByTestId("user-icon")).toBeInTheDocument();
    });

    it("provides accessible names for icon-only buttons via aria-label", () => {
      const onChange = vi.fn();
      const iconOptions = [
        { value: "home", icon: <Home data-testid="home-icon" /> },
        { value: "user", icon: <User data-testid="user-icon" /> },
      ];

      render(<ButtonSelectInput onChange={onChange} options={iconOptions} value={undefined} />);

      const buttons = screen.getAllByRole("radio");
      expect(buttons[0]).toHaveAccessibleName("home");
      expect(buttons[1]).toHaveAccessibleName("user");
    });

    it("does not add aria-label when option has a label", () => {
      const onChange = vi.fn();
      const iconOptions = [
        { value: "home", label: "Home", icon: <Home data-testid="home-icon" /> },
        { value: "user", label: "Profile", icon: <User data-testid="user-icon" /> },
      ];

      render(<ButtonSelectInput onChange={onChange} options={iconOptions} value={undefined} />);

      const buttons = screen.getAllByRole("radio");
      expect(buttons[0]).not.toHaveAttribute("aria-label");
      expect(buttons[1]).not.toHaveAttribute("aria-label");
    });

    it("renders buttons with both icons and labels", () => {
      const onChange = vi.fn();
      const iconOptions = [
        { value: "home", label: "Home", icon: <Home data-testid="home-icon" /> },
        { value: "user", label: "Profile", icon: <User data-testid="user-icon" /> },
      ];

      render(<ButtonSelectInput onChange={onChange} options={iconOptions} value={undefined} />);

      expect(screen.getByTestId("home-icon")).toBeInTheDocument();
      expect(screen.getByTestId("user-icon")).toBeInTheDocument();
      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Profile")).toBeInTheDocument();
    });

    it("works with keyboard navigation when using icons", () => {
      const onChange = vi.fn();
      const iconOptions = [
        { value: "home", icon: <Home data-testid="home-icon" /> },
        { value: "user", icon: <User data-testid="user-icon" /> },
      ];

      render(<ButtonSelectInput onChange={onChange} options={iconOptions} value="home" />);

      const buttons = screen.getAllByRole("radio");
      fireEvent.keyDown(buttons[0], { key: "ArrowRight" });

      expect(onChange).toHaveBeenCalledWith("user");
    });

    it("handles selection with icon buttons", () => {
      const onChange = vi.fn();
      const iconOptions = [
        { value: "home", icon: <Home data-testid="home-icon" /> },
        { value: "user", icon: <User data-testid="user-icon" /> },
      ];

      render(<ButtonSelectInput onChange={onChange} options={iconOptions} value={undefined} />);

      const buttons = screen.getAllByRole("radio");
      fireEvent.click(buttons[1]);

      expect(onChange).toHaveBeenCalledWith("user");
    });
  });
});
