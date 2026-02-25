import { ChevronDownIcon, Square, SquareCheck } from "lucide-react";
import { useMemo } from "react";
import { Button } from "@/buttons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/forms/inputs";
import { Flex } from "@/layout";
import { cn } from "@/utils/cn";
import type { SelectOption } from "../types";
import "./MultiSelectInput.css";

export interface SelectOptionGroup {
  label: string | null;
  options: SelectOption[];
}

interface MultiSelectInputProps {
  options: SelectOptionGroup[] | SelectOption[];
  selectedOptions: string[];
  onChange: (value: string[]) => void;
  unFilteredLabel?: string;
  filteredLabel?: string;
  size?: "sm" | "default" | "lg";
  className?: string;
}

export const MultiSelectInput = ({
  options,
  selectedOptions,
  onChange,
  unFilteredLabel = "All options selected",
  filteredLabel,
  size = "default",
  className,
}: MultiSelectInputProps) => {
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

  const renderOption = ({ value, label }: SelectOption) => (
    <Flex align="center" className="group" direction="row" gap="2" key={value}>
      <Checkbox
        checked={selectedOptions.includes(value)}
        id={value}
        name={value}
        onCheckedChange={(checked) => {
          if (checked) {
            onChange([...selectedOptions, value]);
          } else {
            onChange(selectedOptions.filter((option) => option !== value));
          }
        }}
      />
      <label className="multi-select-option-label" htmlFor={value}>
        {label}
      </label>
      <Button className="multi-select-only-btn" onClick={() => onChange([value])} outline size="xs" variant="ghost">
        Only
      </Button>
    </Flex>
  );

  const displayLabel = hasFilter
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
          {optionGroups.map((optionGroup, _index) => (
            <Flex direction="col" gap="1" key={optionGroup.label ?? "options"}>
              {optionGroup.label && <p className="multi-select-group-label">{optionGroup.label}</p>}
              {optionGroup.options.map(renderOption)}
            </Flex>
          ))}
        </Flex>
        <Separator />
        <Flex direction="row" gap="2">
          <Button
            onClick={() => onChange(flatOptions.map(({ value }) => value))}
            outline={hasFilter}
            size="xs"
            variant="primary"
          >
            <SquareCheck className="size-4" />
            All
          </Button>
          <Button onClick={() => onChange([])} outline={selectedOptions.length > 0} size="xs" variant="primary">
            <Square className="size-4" />
            None
          </Button>
        </Flex>
      </PopoverContent>
    </Popover>
  );
};
