import { useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/utils/cn";

export interface SelectOptionGroup {
  label: string | null;
  options: SelectOption[];
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectInputProps
  extends Omit<React.ComponentProps<typeof Select>, "onValueChange" | "onChange" | "error" | "label"> {
  options: SelectOptionGroup[] | SelectOption[];
  placeholder?: string;
  id?: string;
  name: string;
  value?: string | null;
  className?: string;
  onChange: (value?: string | null) => void;
}

export const SelectInput = ({
  options,
  placeholder = "Select an option",
  className,
  onChange,
  id,
  name,
  value,
  ...props
}: SelectInputProps) => {
  const isOptionGroup = useMemo(() => options.some((option) => "options" in option), [options]);
  const flatOptions: SelectOption[] = useMemo(() => {
    return isOptionGroup
      ? (options as SelectOptionGroup[]).flatMap((optionGroup) => optionGroup.options)
      : (options as SelectOption[]);
  }, [options, isOptionGroup]);
  const optionGroups: SelectOptionGroup[] = isOptionGroup
    ? (options as SelectOptionGroup[])
    : [{ label: null, options: options as SelectOption[] }];

  return (
    <Select
      id={id || name}
      items={flatOptions}
      name={name}
      onValueChange={(value) => {
        onChange(value === undefined || value === "" ? null : (value as string));
      }}
      {...props}
      value={value ?? ""}
    >
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {optionGroups.map((optionGroup, index) => (
          <SelectGroup key={optionGroup.label ?? `options-${index}`}>
            {optionGroup.label && <SelectLabel>{optionGroup.label}</SelectLabel>}
            {optionGroup.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
};
