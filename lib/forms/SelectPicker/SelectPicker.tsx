import { useMemo, useState } from "react";
import { InputError, Label } from "@/forms";
import { useIsMobile } from "@/hooks/use-mobile";
import { Flex } from "@/layout";
import { Text } from "@/typography";
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
  placeholder?: string;
  note?: string;
  error?: string;
  renderSelected?: (selected: SelectPickerOption) => React.ReactNode;
}

export const SelectPicker = ({
  options,
  value,
  placeholder = "Select an option",
  onChange,
  label,
  name,
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

  return (
    <Flex direction="col" gap="2">
      {label && <Label htmlFor={name}>{label}</Label>}
      {isMobile ? (
        <MobileSelectPicker open={open} selectedLabel={selectedLabel} setOpen={setOpen} triggerId={name}>
          <GroupedOptionList
            onSelect={handleSelect}
            optionGroups={optionGroups}
            placeholder={placeholder}
            selectedValue={value}
          />
        </MobileSelectPicker>
      ) : (
        <DesktopSelectPicker open={open} selectedLabel={selectedLabel} setOpen={setOpen} triggerId={name}>
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
