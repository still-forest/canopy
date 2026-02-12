import { Check } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/utils/cn";
import type { SelectPickerOption, SelectPickerOptionGroup, SelectPickerOptionValue } from "./types";

interface OptionListProps {
  label?: string;
  options: SelectPickerOption[];
  selectedValue?: SelectPickerOptionValue | null;
  onSelect: (value: SelectPickerOptionValue) => void;
}

const OptionList = ({ label, options, onSelect, selectedValue }: OptionListProps) => {
  return (
    <CommandGroup heading={label}>
      {options.map(({ icon, value, label, keywords: keywordsProp = [] }) => {
        const keywords = [label, value, ...keywordsProp].filter(Boolean);
        return (
          <CommandItem key={value} keywords={keywords} onSelect={() => onSelect(value)} value={value}>
            {icon ? <span>{icon}</span> : ""}
            {label}
            <Check className={cn("ml-auto", value === selectedValue ? "opacity-100" : "opacity-0")} />
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
};

interface GroupedOptionListProps {
  optionGroups: SelectPickerOptionGroup[];
  placeholder: string;
  selectedValue?: SelectPickerOptionValue | null;
  onSelect: (value: SelectPickerOptionValue) => void;
  noSearch?: boolean;
}

export const GroupedOptionList = ({ optionGroups, placeholder, noSearch, ...props }: GroupedOptionListProps) => {
  return (
    <Command>
      {!noSearch && <CommandInput className="h-9" placeholder={placeholder} />}
      <CommandList>
        <CommandEmpty>{noSearch ? "No options found." : "No results found."}</CommandEmpty>
        {optionGroups.map(({ label, options }, index) => (
          <OptionList key={label || `option-list-${index}`} label={label} options={options} {...props} />
        ))}
      </CommandList>
    </Command>
  );
};
