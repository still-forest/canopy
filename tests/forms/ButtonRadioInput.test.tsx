import { fireEvent, render, screen } from "@testing-library/react";
import { Home, User } from "lucide-react";
import { describe, expect, it, vi } from "vitest";

import { ButtonRadioInput } from "@/forms";

describe("ButtonRadioInput", () => {
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
    it("renders all options as radio buttons", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value={undefined} />);

      const radios = screen.getAllByRole("radio");
      expect(radios).toHaveLength(OPTIONS.length);
      expect(radios[0]).toHaveTextContent("Bart");
      expect(radios[1]).toHaveTextContent("Lisa");
      expect(radios[2]).toHaveTextContent("Maggie");
    });

    it("renders a radiogroup container", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value={undefined} />);

      expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    });

    it("passes aria-label to the radiogroup", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value={undefined} />);

      expect(screen.getByRole("radiogroup")).toHaveAttribute("aria-label", "Characters");
    });

    it("passes aria-labelledby to the radiogroup", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-labelledby="my-label" onChange={onChange} options={OPTIONS} value={undefined} />);

      expect(screen.getByRole("radiogroup")).toHaveAttribute("aria-labelledby", "my-label");
    });

    it("passes aria-describedby to the radiogroup", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-describedby="my-desc" onChange={onChange} options={OPTIONS} value={undefined} />);

      expect(screen.getByRole("radiogroup")).toHaveAttribute("aria-describedby", "my-desc");
    });

    it("passes aria-invalid to the radiogroup", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-invalid="true" onChange={onChange} options={OPTIONS} value={undefined} />);

      expect(screen.getByRole("radiogroup")).toHaveAttribute("aria-invalid", "true");
    });

    it("marks selected option with aria-checked=true", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="lisa" />);

      const radios = screen.getAllByRole("radio");
      expect(radios[0]).toHaveAttribute("aria-checked", "false");
      expect(radios[1]).toHaveAttribute("aria-checked", "true");
      expect(radios[2]).toHaveAttribute("aria-checked", "false");
    });

    it("renders icon-only buttons with aria-label from value", () => {
      const onChange = vi.fn();
      const iconOptions = [
        { value: "home", icon: <Home data-testid="home-icon" /> },
        { value: "user", icon: <User data-testid="user-icon" /> },
      ];

      render(<ButtonRadioInput aria-label="Actions" onChange={onChange} options={iconOptions} value={undefined} />);

      const radios = screen.getAllByRole("radio");
      expect(radios[0]).toHaveAccessibleName("home");
      expect(radios[1]).toHaveAccessibleName("user");
    });
  });

  describe("Roving tabIndex", () => {
    it("makes first option tabbable when nothing is selected", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value={undefined} />);

      const radios = screen.getAllByRole("radio");
      expect(radios[0]).toHaveAttribute("tabIndex", "0");
      expect(radios[1]).toHaveAttribute("tabIndex", "-1");
      expect(radios[2]).toHaveAttribute("tabIndex", "-1");
    });

    it("makes only the selected option tabbable", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="maggie" />);

      const radios = screen.getAllByRole("radio");
      expect(radios[0]).toHaveAttribute("tabIndex", "-1");
      expect(radios[1]).toHaveAttribute("tabIndex", "-1");
      expect(radios[2]).toHaveAttribute("tabIndex", "0");
    });

    it("updates tabbable option when selection changes", () => {
      const onChange = vi.fn();
      const { rerender } = render(
        <ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="bart" />,
      );

      expect(screen.getAllByRole("radio")[0]).toHaveAttribute("tabIndex", "0");

      rerender(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="lisa" />);

      const radios = screen.getAllByRole("radio");
      expect(radios[0]).toHaveAttribute("tabIndex", "-1");
      expect(radios[1]).toHaveAttribute("tabIndex", "0");
    });
  });

  describe("Arrow key navigation", () => {
    it("moves to next option with ArrowRight", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="bart" />);

      fireEvent.keyDown(screen.getAllByRole("radio")[0], { key: "ArrowRight" });

      expect(onChange).toHaveBeenCalledWith("lisa");
    });

    it("moves to next option with ArrowDown", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="bart" />);

      fireEvent.keyDown(screen.getAllByRole("radio")[0], { key: "ArrowDown" });

      expect(onChange).toHaveBeenCalledWith("lisa");
    });

    it("moves to previous option with ArrowLeft", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="lisa" />);

      fireEvent.keyDown(screen.getAllByRole("radio")[1], { key: "ArrowLeft" });

      expect(onChange).toHaveBeenCalledWith("bart");
    });

    it("moves to previous option with ArrowUp", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="lisa" />);

      fireEvent.keyDown(screen.getAllByRole("radio")[1], { key: "ArrowUp" });

      expect(onChange).toHaveBeenCalledWith("bart");
    });

    it("wraps from last to first with ArrowRight", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="maggie" />);

      fireEvent.keyDown(screen.getAllByRole("radio")[2], { key: "ArrowRight" });

      expect(onChange).toHaveBeenCalledWith("bart");
    });

    it("wraps from first to last with ArrowLeft", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="bart" />);

      fireEvent.keyDown(screen.getAllByRole("radio")[0], { key: "ArrowLeft" });

      expect(onChange).toHaveBeenCalledWith("maggie");
    });

    it("moves focus to the new option on arrow key", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="bart" />);

      const radios = screen.getAllByRole("radio");
      fireEvent.keyDown(radios[0], { key: "ArrowRight" });

      expect(radios[1]).toHaveFocus();
    });
  });

  describe("Home and End keys", () => {
    it("moves to first option with Home", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="maggie" />);

      fireEvent.keyDown(screen.getAllByRole("radio")[2], { key: "Home" });

      expect(onChange).toHaveBeenCalledWith("bart");
      expect(screen.getAllByRole("radio")[0]).toHaveFocus();
    });

    it("moves to last option with End", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="bart" />);

      fireEvent.keyDown(screen.getAllByRole("radio")[0], { key: "End" });

      expect(onChange).toHaveBeenCalledWith("maggie");
      expect(screen.getAllByRole("radio")[2]).toHaveFocus();
    });
  });

  describe("Space and Enter keys", () => {
    it("selects current option with Space", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="lisa" />);

      fireEvent.keyDown(screen.getAllByRole("radio")[1], { key: " " });

      expect(onChange).toHaveBeenCalledWith("lisa");
    });

    it("selects current option with Enter", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="lisa" />);

      fireEvent.keyDown(screen.getAllByRole("radio")[1], { key: "Enter" });

      expect(onChange).toHaveBeenCalledWith("lisa");
    });

    it("does not move focus on Space/Enter", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value="lisa" />);

      const radios = screen.getAllByRole("radio");
      radios[1].focus();
      fireEvent.keyDown(radios[1], { key: " " });

      expect(radios[1]).toHaveFocus();
    });
  });

  describe("Click selection", () => {
    it("calls onChange when an option is clicked", () => {
      const onChange = vi.fn();
      render(<ButtonRadioInput aria-label="Characters" onChange={onChange} options={OPTIONS} value={undefined} />);

      fireEvent.click(screen.getAllByRole("radio")[1]);

      expect(onChange).toHaveBeenCalledWith("lisa");
    });
  });

  describe("Secondary options", () => {
    it("renders secondary trigger as a radio button", () => {
      const onChange = vi.fn();
      render(
        <ButtonRadioInput
          aria-label="Characters"
          onChange={onChange}
          options={OPTIONS}
          secondaryOptions={SECONDARY_OPTIONS}
          value={undefined}
        />,
      );

      const radios = screen.getAllByRole("radio");
      expect(radios).toHaveLength(OPTIONS.length + 1);
      expect(radios[OPTIONS.length]).toHaveAccessibleName("More options...");
    });

    it("shows selected secondary option label on trigger", () => {
      const onChange = vi.fn();
      render(
        <ButtonRadioInput
          aria-label="Characters"
          onChange={onChange}
          options={OPTIONS}
          secondaryOptions={SECONDARY_OPTIONS}
          value="homer"
        />,
      );

      const radios = screen.getAllByRole("radio");
      const trigger = radios[radios.length - 1];
      expect(trigger).toHaveAttribute("aria-checked", "true");
    });

    it("makes secondary trigger tabbable when a secondary option is selected", () => {
      const onChange = vi.fn();
      render(
        <ButtonRadioInput
          aria-label="Characters"
          onChange={onChange}
          options={OPTIONS}
          secondaryOptions={SECONDARY_OPTIONS}
          value="homer"
        />,
      );

      const radios = screen.getAllByRole("radio");
      const trigger = radios[radios.length - 1];
      expect(trigger).toHaveAttribute("tabIndex", "0");
    });

    it("makes secondary trigger not tabbable when no secondary option is selected", () => {
      const onChange = vi.fn();
      render(
        <ButtonRadioInput
          aria-label="Characters"
          onChange={onChange}
          options={OPTIONS}
          secondaryOptions={SECONDARY_OPTIONS}
          value="bart"
        />,
      );

      const radios = screen.getAllByRole("radio");
      const trigger = radios[radios.length - 1];
      expect(trigger).toHaveAttribute("tabIndex", "-1");
    });

    it("navigates from last primary to secondary with ArrowRight", () => {
      const onChange = vi.fn();
      render(
        <ButtonRadioInput
          aria-label="Characters"
          onChange={onChange}
          options={OPTIONS}
          secondaryOptions={SECONDARY_OPTIONS}
          value="maggie"
        />,
      );

      fireEvent.keyDown(screen.getAllByRole("radio")[2], { key: "ArrowRight" });

      expect(onChange).toHaveBeenCalledWith("homer");
    });

    it("wraps from last secondary to first primary with ArrowRight", () => {
      const onChange = vi.fn();
      render(
        <ButtonRadioInput
          aria-label="Characters"
          onChange={onChange}
          options={OPTIONS}
          secondaryOptions={SECONDARY_OPTIONS}
          value="marge"
        />,
      );

      const radios = screen.getAllByRole("radio");
      fireEvent.keyDown(radios[radios.length - 1], { key: "ArrowRight" });

      expect(onChange).toHaveBeenCalledWith("bart");
    });

    it("uses selected secondary value for keyboard navigation on trigger", () => {
      const onChange = vi.fn();
      render(
        <ButtonRadioInput
          aria-label="Characters"
          onChange={onChange}
          options={OPTIONS}
          secondaryOptions={SECONDARY_OPTIONS}
          value="homer"
        />,
      );

      const radios = screen.getAllByRole("radio");
      const trigger = radios[radios.length - 1];
      fireEvent.keyDown(trigger, { key: "ArrowRight" });

      // homer is index 3, next is marge at index 4
      expect(onChange).toHaveBeenCalledWith("marge");
    });

    it("End key navigates to last secondary option", () => {
      const onChange = vi.fn();
      render(
        <ButtonRadioInput
          aria-label="Characters"
          onChange={onChange}
          options={OPTIONS}
          secondaryOptions={SECONDARY_OPTIONS}
          value="bart"
        />,
      );

      fireEvent.keyDown(screen.getAllByRole("radio")[0], { key: "End" });

      expect(onChange).toHaveBeenCalledWith("marge");
    });
  });
});
