import { SearchIcon } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputError, InputGroup, Label } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { cn } from "@/utils";

export interface SelectInputOptionGroup {
  label: string;
  options: SelectInputOption[];
}

export interface SelectInputOption {
  icon?: string;
  value: string;
  label: string;
}

export interface SelectInputProps extends Omit<React.ComponentProps<"select">, "dir" | "size"> {
  name: string;
  value?: string;
  onValueChange: (value: string) => void;
  options: SelectInputOption[] | SelectInputOptionGroup[];
  label?: string;
  placeholder?: string;
  note?: string;
  className?: string;
  error?: string;
  emptyOptionLabel?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const SelectInput = ({
  name,
  defaultValue,
  options: optionsProp,
  label,
  placeholder,
  note,
  className,
  value,
  onValueChange,
  error,
  emptyOptionLabel,
  size = "md",
  ...props
}: SelectInputProps) => {
  const triggerClasses = cn(
    "min-w-[180px]",
    size === "xs" && "h-7 text-xs md:text-xs",
    size === "sm" && "h-8 text-sm md:text-xs",
    size === "md" && "h-9 text-base md:text-sm",
    size === "lg" && "h-10 text-lg md:text-base",
    size === "xl" && "h-11 text-xl md:text-lg",
    className,
  );

  const isOptionGroup = optionsProp.some((option) => "options" in option);
  const options: SelectInputOptionGroup[] = isOptionGroup
    ? (optionsProp as SelectInputOptionGroup[])
    : [
        {
          label: "",
          options: optionsProp as SelectInputOption[],
        },
      ];

  const triggerSize = size === "xs" || size === "sm" ? "sm" : "default";

  const EMPTY_OPTION_VALUE = "__none__"; // RadixUI doesn't allow for an empty string SelectInput value, so this is a workaround

  const [searchValue, setSearchValue] = useState("");

  const handleValueChange = (value: string) => {
    if (value === EMPTY_OPTION_VALUE) {
      onValueChange("");
    } else {
      onValueChange(value);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  // Filter options based on search value
  const filteredOptions = options.map((group) => ({
    ...group,
    options: group.options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase())),
  }));

  return (
    <Flex className="w-full" direction="col" gap="2">
      {label && <Label htmlFor={name}>{label}</Label>}
      <Select
        defaultValue={defaultValue as string | undefined}
        name={name}
        onValueChange={handleValueChange}
        value={value}
        {...props}
      >
        <SelectTrigger className={triggerClasses} data-testid={`select-input-${name}`} size={triggerSize}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <InputGroup className="border-0 shadow-none">
              <InputGroup.Input
                name="search"
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search"
              />
              <InputGroup.Addon>
                <SearchIcon />
              </InputGroup.Addon>
            </InputGroup>
          </SelectGroup>
          <SelectSeparator />
          <SelectItem key="empty-option" value={EMPTY_OPTION_VALUE}>
            {emptyOptionLabel || <>&nbsp;</>}
          </SelectItem>

          <SelectSeparator />

          {filteredOptions.map(({ label, options }, index) => {
            // Hide group if no options match the search
            if (options.length === 0) return null;

            return (
              <SelectGroup key={label}>
                {label && <SelectLabel>{label}</SelectLabel>}
                {options.map(({ value, label, icon }) => (
                  <SelectItem key={`option-${value}`} value={value}>
                    {icon ? <span>{icon}</span> : ""}
                    {label}
                  </SelectItem>
                ))}
                {isOptionGroup && index < filteredOptions.length - 1 && <SelectSeparator />}
              </SelectGroup>
            );
          })}
        </SelectContent>
      </Select>
      {note && (
        <Text size="sm" variant="muted">
          {note}
        </Text>
      )}
      {error && <InputError message={error} />}
    </Flex>
  );
};

export { SelectInput };
