import { useMemo } from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { cn } from "@/utils/cn";
import type { SelectOption, SelectOptionGroup } from "../types";

export interface MultiSelectInputProps {
  options: SelectOptionGroup[] | SelectOption[];
  selectedOptions: string[];
  onChange: (value: string[]) => void;
  size?: "sm" | "default" | "lg";
  placeholder?: string;
  className?: string;
}

export const MultiSelectInput = ({
  options,
  selectedOptions,
  onChange,
  size = "default",
  className,
  placeholder = "Select an option",
}: MultiSelectInputProps) => {
  const anchor = useComboboxAnchor();

  const isOptionGroup = useMemo(() => options.some((option) => "options" in option), [options]);
  const comboboxGroups = useMemo(
    () => (options as SelectOptionGroup[]).map((group) => ({ label: group.label, items: group.options })),
    [options],
  );
  const flatOptions: SelectOption[] = useMemo(() => {
    return isOptionGroup
      ? (options as SelectOptionGroup[]).flatMap((optionGroup) => optionGroup.options)
      : (options as SelectOption[]);
  }, [options, isOptionGroup]);

  const inputClassName = useMemo(() => {
    return cn(
      "w-full",
      {
        "text-base sm:text-xs min-h-8": size === "sm",
        "text-base md:text-sm min-h-9": size === "default",
        "text-lg md:text-base min-h-10": size === "lg",
      },
      className,
    );
  }, [className, size]);

  const chipValueClassName = useMemo(() => {
    return cn({
      "text-base sm:text-xs h-[calc(--spacing(4.5))]": size === "sm",
      "text-base md:text-sm": size === "default",
      "text-lg md:text-base h-[calc(--spacing(6.5))]": size === "lg",
    });
  }, [size]);

  const hasSelections = useMemo(() => selectedOptions.length > 0, [selectedOptions]);

  return (
    <Combobox
      autoHighlight
      items={isOptionGroup ? comboboxGroups : flatOptions}
      multiple
      onValueChange={onChange}
      value={selectedOptions}
    >
      <ComboboxChips className={inputClassName} ref={anchor}>
        {hasSelections && (
          <ComboboxValue placeholder={placeholder}>
            {(selectedValues) => {
              const selectedOptions = selectedValues.map((value: string) =>
                flatOptions.find((option) => option.value === value),
              );
              return (
                <>
                  {selectedOptions.map((option: SelectOption) => (
                    <ComboboxChip className={chipValueClassName} key={option.value}>
                      {option.label}
                    </ComboboxChip>
                  ))}
                  <ComboboxChipsInput />
                </>
              );
            }}
          </ComboboxValue>
        )}
        {!hasSelections && <span className="text-muted-foreground">{placeholder}</span>}
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        {isOptionGroup && (
          <ComboboxList>
            {(group, index) => (
              <ComboboxGroup items={group.items} key={group.label}>
                <ComboboxLabel>{group.label}</ComboboxLabel>
                <ComboboxCollection>
                  {(item) => (
                    <ComboboxItem key={item.value} value={item.value}>
                      {item.label}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
                {index < comboboxGroups.length - 1 && <ComboboxSeparator />}
              </ComboboxGroup>
            )}
          </ComboboxList>
        )}
        {!isOptionGroup && (
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.value} value={item.value}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        )}
      </ComboboxContent>
    </Combobox>
  );
};
