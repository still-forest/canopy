import { Check, ChevronsUpDown } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/utils";

export interface SelectPickerOption {
  icon?: string;
  value: string;
  label: string;
}

export interface SelectPickerProps {
  options: SelectPickerOption[];
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
      <Button variant="outline" role="combobox" aria-expanded={open} className={`justify-between ${className}`}>
        {renderSelected(selected || { label: placeholder, value: "" })}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
  );
};

export const SelectPicker = ({
  options,
  value = "",
  placeholder = "Select a value...",
  className = "",
  onSelect = () => {},
  renderSelected = (selected) => selected.label,
}: SelectPickerProps) => {
  const [open, setOpen] = useState(false);

  const selectedOption = useMemo(() => options.find((option) => option.value === value), [options, value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Trigger
        selected={selectedOption}
        placeholder={placeholder}
        open={open}
        className={`w-full ${className}`}
        renderSelected={renderSelected}
      />
      <PopoverContent className="w-full p-0">
        <Command value={value}>
          <CommandInput placeholder="Search" className="h-9" aria-label="Search options" />
          <CommandList>
            <CommandEmpty>No results found</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  value={option.value}
                  key={option.value}
                  onSelect={() => {
                    setOpen(false);
                    onSelect(option.value);
                  }}
                >
                  {option.icon ? <span className="mr-2">{option.icon}</span> : ""}
                  {option.label}
                  <Check className={cn("ml-auto", option.value === value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
