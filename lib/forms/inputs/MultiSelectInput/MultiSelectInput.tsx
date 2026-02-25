import { Button, Checkbox, Flex } from "@still-forest/canopy";
import { ChevronDownIcon, Square, SquareCheck } from "lucide-react";
import { useMemo } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils/cn";
import type { SelectOption } from "../types";

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
      <label className="body-base text-sm truncate" htmlFor={value}>
        {label}
      </label>
      <Button
        className="h-4 opacity-0 group-hover:opacity-100"
        onClick={() => onChange([value])}
        outline
        size="xs"
        variant="ghost"
      >
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
          "border-input data-[placeholder]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 gap-1.5 rounded-md border bg-transparent py-2 pr-2 pl-2.5 shadow-xs transition-[color,box-shadow] focus-visible:ring-[3px] [&_svg:not([class*='size-'])]:size-4 flex w-full items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          size === "sm" && "h-8 text-sm md:text-xs",
          size === "default" && "h-9 text-base md:text-sm",
          size === "lg" && "h-10 text-lg md:text-base",
          hasFilter && "border-primary",
          className,
        )}
      >
        <span className={cn("flex-1 text-left truncate", hasFilter ? "text-foreground" : "text-muted-foreground")}>
          {displayLabel}
        </span>
        <ChevronDownIcon className="text-muted-foreground size-4" />
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-84 p-2">
        <Flex className="max-h-84 overflow-y-auto" direction="col" gap="4">
          {optionGroups.map((optionGroup, _index) => (
            <Flex direction="col" gap="1" key={optionGroup.label ?? "options"}>
              {optionGroup.label && <p className="footnote-xs">{optionGroup.label}</p>}
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
