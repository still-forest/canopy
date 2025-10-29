import { Check } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/utils";
import type { SelectPickerOption, SelectPickerOptionValue } from "./types";

interface OptionListProps {
  placeholder: string;
  options: SelectPickerOption[];
  selectedValue: SelectPickerOptionValue | undefined;
  onSelect: (value: SelectPickerOptionValue) => void;
}

export const OptionList = ({ placeholder = "DEFAULT?", options, onSelect, selectedValue }: OptionListProps) => {
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
