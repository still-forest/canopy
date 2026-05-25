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
import type { SelectOption, SelectOptionGroup } from "../types";
import "./MultiSelectInput.css";

export interface MultiSelectInputProps {
  options: SelectOptionGroup[] | SelectOption[];
  selectedOptions: string[];
  onChange: (value: string[]) => void;
  unFilteredLabel?: string;
  filteredLabel?: string;
  size?: "sm" | "default" | "lg";
  placeholder?: string; // TODO: do somethign with this
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
  const anchor = useComboboxAnchor();

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
    <Combobox autoHighlight items={isOptionGroup ? optionGroups : flatOptions} multiple>
      <ComboboxChips className="w-full" ref={anchor}>
        <ComboboxValue>
          {(selectedValues) => {
            const selectedOptions = selectedValues.map((value: string) =>
              flatOptions.find((option) => option.value === value),
            );
            return (
              <>
                {selectedOptions.map((option: SelectOption) => (
                  <ComboboxChip key={option.value}>{option.label}</ComboboxChip>
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
              <ComboboxGroup items={group.options} key={group.label}>
                <ComboboxLabel>{group.label}</ComboboxLabel>
                <ComboboxCollection>
                  {(item) => (
                    <ComboboxItem key={item.value} value={item.value}>
                      {item.label}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
                {index < optionGroups.length - 1 && <ComboboxSeparator />}
              </ComboboxGroup>
            )}
          </ComboboxList>
        )}
        {!isOptionGroup && (
          <ComboboxList>
            {(item) => {
              console.log("item", item);
              return (
                <ComboboxItem key={item.value} value={item.value}>
                  {item.label}
                </ComboboxItem>
              );
            }}
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
