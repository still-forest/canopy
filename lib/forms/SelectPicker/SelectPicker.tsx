import { useMemo, useState } from "react";
import { Hint } from "@/components";
import { InputError, Label } from "@/forms";
import { useIsMobile } from "@/hooks/use-mobile";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { cn } from "@/utils";
import { DesktopSelectPicker } from "./DesktopSelectPicker";
import { MobileSelectPicker } from "./MobileSelectPicker";
import { GroupedOptionList } from "./OptionList";
import type { SelectPickerOption, SelectPickerOptionGroup } from "./types";

export interface SelectPickerProps {
  name: string;
  value?: string;
  onChange: (value: string) => void;
  options: SelectPickerOption[] | SelectPickerOptionGroup[];
  label?: string;
  labelClassName?: string;
  triggerClassName?: string;
  dropdownClassName?: string;
  placeholder?: string;
  hint?: string;
  note?: string;
  error?: string;
  renderSelected?: (selected: SelectPickerOption) => React.ReactNode;
  className?: string;
}

export const SelectPicker = ({
  options,
  value,
  placeholder = "Select an option",
  onChange,
  label,
  name,
  labelClassName,
  triggerClassName,
  dropdownClassName,
  hint,
  note,
  error,
  renderSelected = (selected) => selected.label,
}: SelectPickerProps) => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const isOptionGroup = options.some((option) => "options" in option);
  const optionGroups = isOptionGroup
    ? (options as SelectPickerOptionGroup[])
    : [
        {
          label: undefined,
          options: options as SelectPickerOption[],
        },
      ];
  const flattenedOptions = useMemo(() => optionGroups.flatMap((group) => group.options), [optionGroups]);

  const selectedLabel = useMemo(() => {
    if (!value) return placeholder;
    const option = flattenedOptions.find((option) => option.value === value);
    const label = option ? renderSelected(option) : placeholder;
    return label;
  }, [value, placeholder, renderSelected, flattenedOptions]);

  const handleSelect = (currentValue: string) => {
    onChange(currentValue === value ? "" : currentValue);
    setOpen(false);
  };

  const triggerClasses = cn("bg-input/30 dark:bg-input/30", triggerClassName);

  return (
    <Flex direction="col" gap="2">
      {(label || hint) && (
        <Flex align="center" direction="row" gap="1">
          {label && (
            <Label className={labelClassName} htmlFor={name}>
              {label}
            </Label>
          )}
          {hint && <Hint content={hint} />}
        </Flex>
      )}
      {isMobile ? (
        <MobileSelectPicker
          className={triggerClasses}
          open={open}
          selectedLabel={selectedLabel}
          setOpen={setOpen}
          triggerId={name}
        >
          <GroupedOptionList
            onSelect={handleSelect}
            optionGroups={optionGroups}
            placeholder={placeholder}
            selectedValue={value}
          />
        </MobileSelectPicker>
      ) : (
        <DesktopSelectPicker
          dropdownClassName={dropdownClassName}
          open={open}
          selectedLabel={selectedLabel}
          setOpen={setOpen}
          triggerClassName={triggerClasses}
          triggerId={name}
        >
          <GroupedOptionList
            onSelect={handleSelect}
            optionGroups={optionGroups}
            placeholder={placeholder}
            selectedValue={value}
          />
        </DesktopSelectPicker>
      )}
      {note && (
        <Text size="sm" variant="muted">
          {note}
        </Text>
      )}
      {error && <InputError message={error} />}
    </Flex>
  );
};
