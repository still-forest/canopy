import { Check, ChevronsUpDown } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/utils";

export interface SelectPickerOptionGroup {
  label: string;
  options: SelectPickerOption[];
}

export interface SelectPickerOption {
  icon?: string;
  value: string;
  label: string;
}

export interface SelectPickerProps {
  options: SelectPickerOptionGroup[];
  onSelect: (selected: string) => void;
  value?: string;
  placeholder?: string;
  className?: string;
  renderSelected?: (selected: SelectPickerOption) => React.ReactNode;
}

interface TriggerProps {
  selected?: SelectPickerOption;
  placeholder: string;
  className: string;
  open: boolean;
  renderSelected?: (selected: SelectPickerOption) => React.ReactNode;
}

const Trigger = ({
  placeholder,
  selected,
  className,
  open,
  renderSelected = (selected) => selected.label,
}: TriggerProps) => {
  return (
    <PopoverTrigger asChild>
      <Button aria-expanded={open} className={`justify-between ${className}`} role="combobox" variant="outline">
        {renderSelected(selected || { label: placeholder, value: "" })}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
  );
};

export const SelectPicker = ({
  options: optionGroups,
  value = "",
  placeholder = "Select a value...",
  className = "",
  onSelect = () => {},
  renderSelected = (selected) => selected.label,
}: SelectPickerProps) => {
  const [open, setOpen] = useState(false);

  const _singleGroup = optionGroups.length === 1;
  const flattenedOptions = useMemo(() => optionGroups.flatMap((group) => group.options), [optionGroups]);

  const selectedOption = useMemo(
    () => flattenedOptions.find((option) => option.value === value),
    [flattenedOptions, value],
  );

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <Trigger
        className={`w-full ${className}`}
        open={open}
        placeholder={placeholder}
        renderSelected={renderSelected}
        selected={selectedOption}
      />
      <PopoverContent className="w-full p-0">
        <Command value={value}>
          <CommandInput aria-label="Search options" className="h-9" placeholder="Search" />
          <CommandList>
            <CommandEmpty>No results found</CommandEmpty>
            {optionGroups.map((group) => (
              <CommandGroup heading={group.label} key={group.label}>
                {group.options.map((option) => (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      setOpen(false);
                      onSelect(option.value);
                    }}
                    value={option.value}
                  >
                    {option.icon ? <span className="mr-2">{option.icon}</span> : ""}
                    {option.label}
                    <Check className={cn("ml-auto", option.value === value ? "opacity-100" : "opacity-0")} />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
