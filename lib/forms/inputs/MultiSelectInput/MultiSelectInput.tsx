import { ChevronDownIcon, Square, SquareCheck } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { Button } from "@/buttons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/forms/inputs";
import { Flex } from "@/layout";
import { cn } from "@/utils/cn";
import type { SelectOption, SelectOptionGroup } from "../types";
import "./MultiSelectInput.css";

export interface MultiSelectInputProps {
  options: SelectOptionGroup[] | SelectOption[];
  /** Controlled selected values. Provide together with `onChange` to control the component. */
  selectedOptions?: string[];
  /** Initial selected values when used uncontrolled. Ignored when `selectedOptions` is provided. */
  defaultSelectedOptions?: string[];
  onChange?: (value: string[]) => void;
  unFilteredLabel?: string;
  filteredLabel?: string;
  placeholder?: string;
  size?: "sm" | "default" | "lg";
  className?: string;
}

export const MultiSelectInput = ({
  options,
  selectedOptions: controlledSelectedOptions,
  defaultSelectedOptions = [],
  onChange,
  unFilteredLabel = "All options selected",
  filteredLabel,
  placeholder = "Select an option",
  size = "default",
  className,
}: MultiSelectInputProps) => {
  const isControlled = controlledSelectedOptions !== undefined;
  const [uncontrolledSelectedOptions, setUncontrolledSelectedOptions] = useState<string[]>(defaultSelectedOptions);
  const selectedOptions = isControlled ? controlledSelectedOptions : uncontrolledSelectedOptions;

  const handleChange = useCallback(
    (value: string[]) => {
      if (!isControlled) {
        setUncontrolledSelectedOptions(value);
      }
      onChange?.(value);
    },
    [isControlled, onChange],
  );

  const isOptionGroup = useMemo(() => options.some((option) => "options" in option), [options]);
  const flatOptions: SelectOption[] = useMemo(() => {
    return isOptionGroup
      ? (options as SelectOptionGroup[]).flatMap((optionGroup) => optionGroup.options)
      : (options as SelectOption[]);
  }, [options, isOptionGroup]);
  const optionGroups: SelectOptionGroup[] = isOptionGroup
    ? (options as SelectOptionGroup[])
    : [{ label: null, options: options as SelectOption[] }];

  const hasFilter = flatOptions.length !== selectedOptions.length;
  const noneSelected = selectedOptions.length === 0;

  const renderOption = ({ value, label }: SelectOption) => (
    <Flex align="center" className="group" direction="row" gap="2" key={value}>
      <Checkbox
        checked={selectedOptions.includes(value)}
        id={value}
        name={value}
        onCheckedChange={(checked) => {
          if (checked) {
            handleChange([...selectedOptions, value]);
          } else {
            handleChange(selectedOptions.filter((option) => option !== value));
          }
        }}
      />
      <label className="multi-select-option-label" htmlFor={value}>
        {label}
      </label>
      <Button className="multi-select-only-btn" onClick={() => handleChange([value])} outline size="xs" variant="ghost">
        Only
      </Button>
    </Flex>
  );

  const renderGroup = (optionGroup: SelectOptionGroup) => (
    <Flex direction="col" gap="1" key={optionGroup.label ?? "options"}>
      {optionGroup.label && (
        <Flex align="center" className="group" direction="row" gap="2">
          <p className="multi-select-group-label">{optionGroup.label}</p>
          <Button
            className="multi-select-only-btn"
            onClick={() => handleChange(optionGroup.options.map(({ value }) => value))}
            outline
            size="xs"
            variant="ghost"
          >
            Only
          </Button>
        </Flex>
      )}
      {optionGroup.options.map(renderOption)}
    </Flex>
  );

  const displayLabel = noneSelected
    ? placeholder
    : hasFilter
      ? filteredLabel || `${selectedOptions.length} of ${flatOptions.length} selected`
      : unFilteredLabel;

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "multi-select-trigger",
          `multi-select-trigger--${size}`,
          hasFilter && "multi-select-trigger--filtered",
          className,
        )}
      >
        <span className={cn("multi-select-label", hasFilter && "multi-select-label--filtered")}>{displayLabel}</span>
        <ChevronDownIcon className="multi-select-chevron" />
      </PopoverTrigger>
      <PopoverContent className="multi-select-content w-(--anchor-width)">
        <Flex className="multi-select-options" direction="col" gap="4">
          {optionGroups.map(renderGroup)}
        </Flex>
        <Separator />
        <Flex direction="row" gap="2">
          <Button
            onClick={() => handleChange(flatOptions.map(({ value }) => value))}
            outline={hasFilter}
            size="xs"
            variant="primary"
          >
            <SquareCheck className="size-4" />
            All
          </Button>
          <Button onClick={() => handleChange([])} outline={selectedOptions.length > 0} size="xs" variant="primary">
            <Square className="size-4" />
            None
          </Button>
        </Flex>
      </PopoverContent>
    </Popover>
  );
};
