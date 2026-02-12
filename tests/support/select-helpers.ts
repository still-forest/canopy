import { screen, within } from "@testing-library/react";
import type { UserEvent } from "@testing-library/user-event";

/**
 * Selects an option from a Base UI Select component (combobox pattern).
 * Clicks the combobox trigger, waits for the listbox, and clicks the option.
 *
 * @param user - The userEvent instance
 * @param combobox - The combobox trigger element
 * @param optionName - The visible text of the option to select
 */
export async function selectOption(user: UserEvent, combobox: HTMLElement, optionName: string) {
  await user.click(combobox);
  const listbox = await screen.findByRole("listbox");
  await user.click(within(listbox).getByRole("option", { name: optionName }));
}

/**
 * Gets a combobox element by its id.
 *
 * @param id - The id of the combobox element
 * @returns The combobox element
 */
export function getComboboxById(id: string): HTMLElement {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Could not find combobox with id "${id}"`);
  }
  return element;
}
