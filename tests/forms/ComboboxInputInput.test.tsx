import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ComboboxInput } from "@/forms";
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

const getChips = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('[data-slot="combobox-chip"]')) as HTMLElement[];

// The input (and therefore the dropdown trigger) only renders once at least one
// option is selected, so opening the popup requires a non-empty selection.
const openPopup = () => {
  // Base UI opens the combobox on `mousedown`, not `click`.
  fireEvent.mouseDown(screen.getByRole("combobox"));
  return screen.getByRole("listbox");
};

describe("ComboboxInput", () => {
  const onChange = vi.fn();

  beforeEach(() => {
    onChange.mockClear();
  });

  describe("chips", () => {
    it("renders a chip for each selected option", () => {
      const { container } = render(
        <ComboboxInput onChange={onChange} options={ELEMENTS} selectedOptions={["earth", "fire"]} />,
      );

      const chips = getChips(container);
      expect(chips).toHaveLength(2);
      expect(chips[0]).toHaveTextContent("Earth");
      expect(chips[1]).toHaveTextContent("Fire");
    });

    it("renders the placeholder and no chips when nothing is selected", () => {
      const { container } = render(
        <ComboboxInput onChange={onChange} options={ELEMENTS} placeholder="Pick some" selectedOptions={[]} />,
      );

      expect(getChips(container)).toHaveLength(0);
      expect(screen.getByText("Pick some")).toBeInTheDocument();
    });

    it("resolves chip labels from grouped options", () => {
      const { container } = render(
        <ComboboxInput onChange={onChange} options={OPTION_GROUPS} selectedOptions={["earth", "blue"]} />,
      );

      const chips = getChips(container);
      expect(chips).toHaveLength(2);
      expect(chips[0]).toHaveTextContent("Earth");
      expect(chips[1]).toHaveTextContent("Blue");
    });
  });

  describe("options rendered", () => {
    it("renders a flat list of options when not grouped", () => {
      render(<ComboboxInput onChange={onChange} options={ELEMENTS} selectedOptions={["earth"]} />);

      const listbox = openPopup();
      const options = within(listbox).getAllByRole("option");

      expect(options).toHaveLength(ELEMENTS.length);
      expect(options[0]).toHaveTextContent("Earth");
      expect(options[1]).toHaveTextContent("Wind");
      expect(options[2]).toHaveTextContent("Fire");
      expect(options[3]).toHaveTextContent("Water");
    });

    it("renders every option across all groups, with group labels", () => {
      render(<ComboboxInput onChange={onChange} options={OPTION_GROUPS} selectedOptions={["earth"]} />);

      const listbox = openPopup();
      const options = within(listbox).getAllByRole("option");

      expect(options).toHaveLength(ELEMENTS.length + COLORS.length);

      expect(within(listbox).getByText("Elements")).toBeInTheDocument();
      expect(within(listbox).getByText("Colors")).toBeInTheDocument();

      expect(options[0]).toHaveTextContent("Earth");
      expect(options[3]).toHaveTextContent("Water");
      expect(options[4]).toHaveTextContent("Red");
      expect(options[7]).toHaveTextContent("Blue");
    });
  });

  describe("value / onChange", () => {
    it("calls onChange with the value appended when an option is selected", () => {
      render(<ComboboxInput onChange={onChange} options={ELEMENTS} selectedOptions={["earth"]} />);

      const listbox = openPopup();
      fireEvent.click(within(listbox).getByRole("option", { name: "Water" }));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0]).toEqual(["earth", "water"]);
    });

    it("calls onChange with the value removed when an already-selected option is clicked", () => {
      render(<ComboboxInput onChange={onChange} options={ELEMENTS} selectedOptions={["earth", "fire"]} />);

      const listbox = openPopup();
      fireEvent.click(within(listbox).getByRole("option", { name: "Earth" }));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0]).toEqual(["fire"]);
    });

    it("calls onChange when selecting an option from a group", () => {
      render(<ComboboxInput onChange={onChange} options={OPTION_GROUPS} selectedOptions={["earth"]} />);

      const listbox = openPopup();
      fireEvent.click(within(listbox).getByRole("option", { name: "Green" }));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0]).toEqual(["earth", "green"]);
    });
  });
});
