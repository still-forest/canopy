import { useMemo } from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { cn } from "@/utils/cn";
import type { SelectOption, SelectOptionGroup } from "../types";

export interface MultiSelectInputProps {
  options: SelectOptionGroup[] | SelectOption[];
  selectedOptions: string[];
  onChange: (value: string[]) => void;
  size?: "sm" | "default" | "lg";
  placeholder?: string; // TODO: do somethign with this
  className?: string;
}

export const MultiSelectInput = ({
  options,
  selectedOptions,
  onChange,
  size = "default",
  className,
}: MultiSelectInputProps) => {
  const anchor = useComboboxAnchor();

  const isOptionGroup = useMemo(() => options.some((option) => "options" in option), [options]);
  const flatOptions: SelectOption[] = useMemo(() => {
    return isOptionGroup
      ? (options as SelectOptionGroup[]).flatMap((optionGroup) => optionGroup.options)
      : (options as SelectOption[]);
  }, [options, isOptionGroup]);
  // Base UI detects grouped items by looking for an `items` key on each group
  // (see isGroupedItems in @base-ui/react). Our public API uses `options`, so we
  // remap to `items` here — otherwise Base UI treats the group objects as the flat
  // item list and only the first N items (N = number of groups) can be highlighted.
  const comboboxGroups = useMemo(
    () => (options as SelectOptionGroup[]).map((group) => ({ label: group.label, items: group.options })),
    [options],
  );

  const inputClassName = useMemo(() => {
    return cn(
      "w-full",
      {
        "h-8 text-base sm:text-xs min-h-8": size === "sm",
        "h-9 text-base md:text-sm": size === "default",
        "h-10 text-lg md:text-base": size === "lg",
      },
      className,
    );
  }, [className, size]);

  const chipValueClassName = useMemo(() => {
    return cn({
      "text-base sm:text-xs h-[calc(--spacing(4.5))]": size === "sm",
      "text-base md:text-sm": size === "default",
      "text-lg md:text-base h-[calc(--spacing(6.5))]": size === "lg",
    });
  }, [size]);

  return (
    <Combobox autoHighlight items={isOptionGroup ? comboboxGroups : flatOptions} multiple>
      <ComboboxChips className={inputClassName} ref={anchor}>
        <ComboboxValue>
          {(selectedValues) => {
            const selectedOptions = selectedValues.map((value: string) =>
              flatOptions.find((option) => option.value === value),
            );
            return (
              <>
                {selectedOptions.map((option: SelectOption) => (
                  <ComboboxChip className={chipValueClassName} key={option.value}>
                    {option.label}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput />
              </>
            );
          }}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        {isOptionGroup && (
          <ComboboxList>
            {(group, index) => (
              <ComboboxGroup items={group.items} key={group.label}>
                <ComboboxLabel>{group.label}</ComboboxLabel>
                <ComboboxCollection>
                  {(item) => (
                    <ComboboxItem key={item.value} value={item.value}>
                      {item.label}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
                {index < comboboxGroups.length - 1 && <ComboboxSeparator />}
              </ComboboxGroup>
            )}
          </ComboboxList>
        )}
        {!isOptionGroup && (
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.value} value={item.value}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        )}
      </ComboboxContent>
    </Combobox>
  );

  // return (
  //   <Popover>
  //     <PopoverTrigger
  //       className={cn(
  //         "multi-select-trigger",
  //         `multi-select-trigger--${size}`,
  //         hasFilter && "multi-select-trigger--filtered",
  //         className,
  //       )}
  //     >
  //       <span className={cn("multi-select-label", hasFilter && "multi-select-label--filtered")}>{displayLabel}</span>
  //       <ChevronDownIcon className="multi-select-chevron" />
  //     </PopoverTrigger>
  //     <PopoverContent className="multi-select-content w-(--anchor-width)">
  //       <Flex className="multi-select-options" direction="col" gap="4">
  //         {optionGroups.map((optionGroup, _index) => (
  //           <Flex direction="col" gap="1" key={optionGroup.label ?? "options"}>
  //             {optionGroup.label && <p className="multi-select-group-label">{optionGroup.label}</p>}
  //             {optionGroup.options.map(renderOption)}
  //           </Flex>
  //         ))}
  //       </Flex>
  //       <Separator />
  //       <Flex direction="row" gap="2">
  //         <Button
  //           onClick={() => onChange(flatOptions.map(({ value }) => value))}
  //           outline={hasFilter}
  //           size="xs"
  //           variant="primary"
  //         >
  //           <SquareCheck className="size-4" />
  //           All
  //         </Button>
  //         <Button onClick={() => onChange([])} outline={selectedOptions.length > 0} size="xs" variant="primary">
  //           <Square className="size-4" />
  //           None
  //         </Button>
  //       </Flex>
  //     </PopoverContent>
  //   </Popover>
  // );
};
