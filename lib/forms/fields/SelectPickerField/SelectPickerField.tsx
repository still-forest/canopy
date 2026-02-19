import { useMemo, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { DesktopSelectPicker } from "./DesktopSelectPicker";
import { MobileSelectPicker } from "./MobileSelectPicker";
import { GroupedOptionList } from "./OptionList";
import type { SelectPickerOption, SelectPickerOptionGroup } from "./types";

export interface SelectPickerFieldProps {
  name: string;
  value?: string | null;
  onChange: (value: string) => void;
  options: SelectPickerOption[] | SelectPickerOptionGroup[];
  placeholder?: string;
  renderSelected?: (selected: SelectPickerOption) => React.ReactNode;
  dropdownClassName?: string;
}

export const SelectPickerField = ({
  options,
  value,
  placeholder = "Select an option",
  onChange,
  name,
  renderSelected = (selected) => selected.label,
  dropdownClassName,
}: SelectPickerFieldProps) => {
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

  const handleSelect = (newValue: string) => {
    onChange(newValue === value ? "" : newValue);
    setOpen(false);
  };

  if (isMobile) {
    return (
      <MobileSelectPicker id={name} open={open} selectedLabel={selectedLabel} setOpen={setOpen}>
        <GroupedOptionList
          onSelect={handleSelect}
          optionGroups={optionGroups}
          placeholder={placeholder}
          selectedValue={value}
        />
      </MobileSelectPicker>
    );
  }

  return (
    <DesktopSelectPicker
      dropdownClassName={dropdownClassName}
      id={name}
      open={open}
      selectedLabel={selectedLabel}
      setOpen={setOpen}
    >
      <GroupedOptionList
        onSelect={handleSelect}
        optionGroups={optionGroups}
        placeholder={placeholder}
        selectedValue={value}
      />
    </DesktopSelectPicker>
  );
};
