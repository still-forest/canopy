import { Check } from "lucide-react";
import { useMemo } from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/utils";
import type { SelectPickerOption, SelectPickerOptionGroup, SelectPickerOptionValue } from "./types";

interface OptionListProps {
  placeholder: string;
  options: SelectPickerOption[];
  selectedValue: SelectPickerOptionValue | undefined;
  onSelect: (value: SelectPickerOptionValue) => void;
}

const OptionList = ({ placeholder = "DEFAULT?", options, onSelect, selectedValue }: OptionListProps) => {
  return (
    <Command>
      <CommandInput className="h-9" placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>No timezone found.</CommandEmpty>
        <CommandGroup>
          {options.map(({ value, label, keywords: keywordsProp = [] }) => {
            const keywords = [label, value, ...keywordsProp].filter(Boolean);
            return (
              <CommandItem key={value} keywords={keywords} onSelect={() => onSelect(value)} value={value}>
                {label}
                <Check className={cn("ml-auto", value === selectedValue ? "opacity-100" : "opacity-0")} />
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

interface GroupedOptionListProps {
  optionGroups: SelectPickerOptionGroup[];
  placeholder: string;
  selectedValue: SelectPickerOptionValue | undefined;
  onSelect: (value: SelectPickerOptionValue) => void;
}

export const GroupedOptionList = ({ optionGroups, ...props }: GroupedOptionListProps) => {
  // TODO: Handle option groups
  const flattenedOptions = useMemo(() => optionGroups.flatMap((group) => group.options), [optionGroups]);

  return <OptionList options={flattenedOptions} {...props} />;
};
