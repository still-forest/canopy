import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { MultiSelectInput } from "@/forms";
import type { SelectOption, SelectOptionGroup } from "@/forms/inputs/types";

const ELEMENTS: SelectOption[] = [
  { value: "earth", label: "Earth" },
  { value: "wind", label: "Wind" },
  { value: "fire", label: "Fire" },
  { value: "water", label: "Water" },
];

const COLORS: SelectOption[] = [
  { value: "red", label: "Red" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
];

const OPTION_GROUPS: SelectOptionGroup[] = [
  { label: "Elements", options: ELEMENTS },
  { label: "Colors", options: COLORS },
];

// The trigger always renders; opening the popover reveals the option checkboxes.
const openPopup = () => {
  fireEvent.click(screen.getByRole("button"));
  return screen.getByRole("dialog");
};

describe("MultiSelectInput", () => {
  const onChange = vi.fn();

  beforeEach(() => {
    onChange.mockClear();
  });

  describe("trigger label", () => {
    it("renders the placeholder when nothing is selected", () => {
      render(<MultiSelectInput onChange={onChange} options={ELEMENTS} placeholder="Pick some" selectedOptions={[]} />);

      expect(screen.getByText("Pick some")).toBeInTheDocument();
    });

    it("renders the default placeholder when none is provided", () => {
      render(<MultiSelectInput onChange={onChange} options={ELEMENTS} selectedOptions={[]} />);

      expect(screen.getByText("Select an option")).toBeInTheDocument();
    });

    it("renders the unfiltered label when every option is selected", () => {
      render(
        <MultiSelectInput
          onChange={onChange}
          options={ELEMENTS}
          selectedOptions={ELEMENTS.map(({ value }) => value)}
        />,
      );

      expect(screen.getByText("All options selected")).toBeInTheDocument();
    });

    it("renders a custom unfiltered label when every option is selected", () => {
      render(
        <MultiSelectInput
          onChange={onChange}
          options={ELEMENTS}
          selectedOptions={ELEMENTS.map(({ value }) => value)}
          unFilteredLabel="Everything"
        />,
      );

      expect(screen.getByText("Everything")).toBeInTheDocument();
    });

    it("renders a count label when a subset is selected", () => {
      render(<MultiSelectInput onChange={onChange} options={ELEMENTS} selectedOptions={["earth", "fire"]} />);

      expect(screen.getByText("2 of 4 selected")).toBeInTheDocument();
    });

    it("renders a custom filtered label when a subset is selected", () => {
      render(
        <MultiSelectInput
          filteredLabel="Some selected"
          onChange={onChange}
          options={ELEMENTS}
          selectedOptions={["earth"]}
        />,
      );

      expect(screen.getByText("Some selected")).toBeInTheDocument();
    });
  });

  describe("options rendered", () => {
    it("renders a checkbox for each option when not grouped", () => {
      render(<MultiSelectInput onChange={onChange} options={ELEMENTS} selectedOptions={[]} />);

      const dialog = openPopup();

      for (const { label } of ELEMENTS) {
        expect(within(dialog).getByText(label)).toBeInTheDocument();
      }
    });

    it("renders every option across all groups, with group labels", () => {
      render(<MultiSelectInput onChange={onChange} options={OPTION_GROUPS} selectedOptions={[]} />);

      const dialog = openPopup();

      expect(within(dialog).getByText("Elements")).toBeInTheDocument();
      expect(within(dialog).getByText("Colors")).toBeInTheDocument();

      for (const { label } of [...ELEMENTS, ...COLORS]) {
        expect(within(dialog).getByText(label)).toBeInTheDocument();
      }
    });

    it("reflects the selected options as checked checkboxes", () => {
      render(<MultiSelectInput onChange={onChange} options={ELEMENTS} selectedOptions={["earth", "fire"]} />);

      const dialog = openPopup();
      const checkboxes = within(dialog).getAllByRole("checkbox");

      expect(checkboxes[0]).toBeChecked();
      expect(checkboxes[1]).not.toBeChecked();
      expect(checkboxes[2]).toBeChecked();
      expect(checkboxes[3]).not.toBeChecked();
    });
  });

  describe("value / onChange", () => {
    it("calls onChange with the value appended when an unselected option is checked", () => {
      render(<MultiSelectInput onChange={onChange} options={ELEMENTS} selectedOptions={["earth"]} />);

      const dialog = openPopup();
      fireEvent.click(within(dialog).getAllByRole("checkbox")[3]);

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0]).toEqual(["earth", "water"]);
    });

    it("calls onChange with the value removed when a selected option is unchecked", () => {
      render(<MultiSelectInput onChange={onChange} options={ELEMENTS} selectedOptions={["earth", "fire"]} />);

      const dialog = openPopup();
      fireEvent.click(within(dialog).getAllByRole("checkbox")[0]);

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0]).toEqual(["fire"]);
    });

    it("calls onChange with only that value when the Only button is clicked", () => {
      render(<MultiSelectInput onChange={onChange} options={ELEMENTS} selectedOptions={["earth", "fire"]} />);

      const dialog = openPopup();
      fireEvent.click(within(dialog).getAllByRole("button", { name: "Only" })[3]);

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0]).toEqual(["water"]);
    });

    it("calls onChange with every value when the All button is clicked", () => {
      render(<MultiSelectInput onChange={onChange} options={ELEMENTS} selectedOptions={["earth"]} />);

      const dialog = openPopup();
      fireEvent.click(within(dialog).getByRole("button", { name: /All/ }));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0]).toEqual(["earth", "wind", "fire", "water"]);
    });

    it("calls onChange with an empty array when the None button is clicked", () => {
      render(<MultiSelectInput onChange={onChange} options={ELEMENTS} selectedOptions={["earth", "fire"]} />);

      const dialog = openPopup();
      fireEvent.click(within(dialog).getByRole("button", { name: /None/ }));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0]).toEqual([]);
    });

    it("calls onChange when checking an option from a group", () => {
      render(<MultiSelectInput onChange={onChange} options={OPTION_GROUPS} selectedOptions={["earth"]} />);

      const dialog = openPopup();
      fireEvent.click(within(dialog).getByLabelText("Green"));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0]).toEqual(["earth", "green"]);
    });
  });

  describe("group-level Only", () => {
    // Each option also has an "Only" button, so there is one extra "Only" per group.
    const groupOnlyButton = (dialog: HTMLElement, groupLabel: string) => {
      const heading = within(dialog).getByText(groupLabel);
      const button = heading.parentElement?.querySelector("button");
      if (!button) throw new Error(`No Only button found for group "${groupLabel}"`);
      return button;
    };

    it("renders an Only button alongside each group label", () => {
      render(<MultiSelectInput onChange={onChange} options={OPTION_GROUPS} selectedOptions={[]} />);

      const dialog = openPopup();

      expect(groupOnlyButton(dialog, "Elements")).toHaveTextContent("Only");
      expect(groupOnlyButton(dialog, "Colors")).toHaveTextContent("Only");
    });

    it("selects only the group's options when its Only button is clicked", () => {
      render(<MultiSelectInput onChange={onChange} options={OPTION_GROUPS} selectedOptions={["earth", "red"]} />);

      const dialog = openPopup();
      fireEvent.click(groupOnlyButton(dialog, "Colors"));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0]).toEqual(["red", "yellow", "green", "blue"]);
    });

    it("does not render group Only buttons for ungrouped options", () => {
      render(<MultiSelectInput onChange={onChange} options={ELEMENTS} selectedOptions={[]} />);

      const dialog = openPopup();

      // Only the per-option "Only" buttons exist — one per element.
      expect(within(dialog).getAllByRole("button", { name: "Only" })).toHaveLength(ELEMENTS.length);
    });
  });

  describe("uncontrolled", () => {
    it("renders the placeholder when no default is provided", () => {
      render(<MultiSelectInput options={ELEMENTS} placeholder="Pick some" />);

      expect(screen.getByText("Pick some")).toBeInTheDocument();
    });

    it("reflects defaultSelectedOptions in the trigger label", () => {
      render(<MultiSelectInput defaultSelectedOptions={["earth", "fire"]} options={ELEMENTS} />);

      expect(screen.getByText("2 of 4 selected")).toBeInTheDocument();
    });

    it("reflects defaultSelectedOptions as checked checkboxes", () => {
      render(<MultiSelectInput defaultSelectedOptions={["earth", "fire"]} options={ELEMENTS} />);

      const dialog = openPopup();
      const checkboxes = within(dialog).getAllByRole("checkbox");

      expect(checkboxes[0]).toBeChecked();
      expect(checkboxes[1]).not.toBeChecked();
      expect(checkboxes[2]).toBeChecked();
      expect(checkboxes[3]).not.toBeChecked();
    });

    it("updates its own state when an option is checked", () => {
      render(<MultiSelectInput defaultSelectedOptions={["earth"]} options={ELEMENTS} />);

      const dialog = openPopup();
      fireEvent.click(within(dialog).getAllByRole("checkbox")[3]);

      expect(screen.getByText("2 of 4 selected")).toBeInTheDocument();
      expect(within(dialog).getAllByRole("checkbox")[3]).toBeChecked();
    });

    it("updates its own state when an option is unchecked", () => {
      render(<MultiSelectInput defaultSelectedOptions={["earth", "fire"]} options={ELEMENTS} />);

      const dialog = openPopup();
      fireEvent.click(within(dialog).getAllByRole("checkbox")[0]);

      expect(screen.getByText("Fire")).toBeInTheDocument();
      expect(within(dialog).getAllByRole("checkbox")[0]).not.toBeChecked();
    });

    it("still notifies onChange while managing its own state", () => {
      render(<MultiSelectInput defaultSelectedOptions={["earth"]} onChange={onChange} options={ELEMENTS} />);

      const dialog = openPopup();
      fireEvent.click(within(dialog).getAllByRole("checkbox")[3]);

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0]).toEqual(["earth", "water"]);
      // State is owned by the component, not the parent.
      expect(within(dialog).getAllByRole("checkbox")[3]).toBeChecked();
    });

    it("does not update its own state when controlled", () => {
      render(<MultiSelectInput onChange={onChange} options={ELEMENTS} selectedOptions={["earth"]} />);

      const dialog = openPopup();
      fireEvent.click(within(dialog).getAllByRole("checkbox")[3]);

      // Controlled: the parent owns state, so the checkbox stays as the prop dictates.
      expect(within(dialog).getAllByRole("checkbox")[3]).not.toBeChecked();
    });
  });
});
