import { type KeyboardEvent, useId, useRef, useState } from "react";
import { Hint } from "@/components";
import type { ButtonGroupProps } from "@/forms/Button/ButtonGroup";
import { ButtonGroup } from "@/forms/Button/ButtonGroup";
import { DesktopSelectPicker } from "@/forms/fields/SelectPicker/DesktopSelectPicker";
import type { SelectPickerOption } from "@/forms/fields/SelectPicker/types";
import { InputError } from "@/forms/InputError";
import { Label } from "@/forms/Label";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { cn } from "@/utils";
import { GroupedOptionList } from "../SelectPicker/OptionList";

interface Option {
  label?: string;
  value: string;
  icon?: React.ReactElement;
}

interface ButtonSelectInputProps extends Omit<ButtonGroupProps, "children" | "onChange"> {
  name?: string;
  label?: string;
  hint?: string;
  error?: string;
  note?: string;
  options: Option[];
  secondaryOptions?: SelectPickerOption[];
  value: string | undefined;
  onChange: (value: string) => void;
  buttonClassName?: string;
  secondaryButtonClassName?: string;
}

export const ButtonSelectInput = ({
  name,
  label,
  hint,
  options,
  error,
  note,
  secondaryOptions,
  value,
  onChange,
  buttonClassName,
  secondaryButtonClassName,
  className: groupClassName,
  ...props
}: ButtonSelectInputProps) => {
  const [open, setOpen] = useState(false);
  const hasSecondaryOptions = secondaryOptions && secondaryOptions.length > 0;
  const selectedSecondaryOption = secondaryOptions?.find((option) => option.value === value);
  const secondaryLabel = selectedSecondaryOption?.label || "More options...";

  // Generate stable IDs for accessibility
  const labelId = useId();
  const errorId = useId();
  const noteId = useId();

  // Refs for managing focus
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // All available options (primary + secondary)
  const allOptions: Array<Option | SelectPickerOption> = [...options, ...(secondaryOptions || [])];

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, currentValue: string) => {
    const currentIndex = allOptions.findIndex((opt) => opt.value === currentValue);
    let newIndex = currentIndex;

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        newIndex = (currentIndex + 1) % allOptions.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        newIndex = currentIndex <= 0 ? allOptions.length - 1 : currentIndex - 1;
        break;
      case "Home":
        e.preventDefault();
        newIndex = 0;
        break;
      case "End":
        e.preventDefault();
        newIndex = allOptions.length - 1;
        break;
      case " ":
      case "Enter":
        e.preventDefault();
        onChange(currentValue);
        return;
      default:
        return;
    }

    // Focus and select the new option
    const newOption = allOptions[newIndex];
    const buttonRef = buttonRefs.current.get(newOption.value);
    if (buttonRef) {
      buttonRef.focus();
      onChange(newOption.value);
    }
  };

  return (
    <Flex className="w-full" direction="col" gap="2">
      {(label || hint) && (
        <Flex align="center" direction="row" gap="1">
          {label && <Label id={labelId}>{label}</Label>}
          {hint && <Hint content={hint} />}
        </Flex>
      )}
      <ButtonGroup
        aria-describedby={[note && noteId, error && errorId].filter(Boolean).join(" ") || undefined}
        aria-invalid={error ? "true" : undefined}
        aria-label={!label ? name : undefined}
        aria-labelledby={label ? labelId : undefined}
        className={cn("w-full", groupClassName)}
        role="radiogroup"
        {...props}
      >
        {options.map((option, index) => {
          const isSelected = option.value === value;
          // If nothing is selected, make the first option tabbable
          const isFirstOption = index === 0;
          const shouldBeInTabOrder = isSelected || (!value && isFirstOption);

          return (
            <ButtonGroup.Button
              aria-checked={isSelected}
              aria-label={option.label ? undefined : option.value}
              className={cn("flex-grow", buttonClassName)}
              icon={option.icon}
              key={option.value}
              label={option.label}
              onClick={() => onChange(option.value)}
              onKeyDown={(e) => handleKeyDown(e, option.value)}
              ref={(el) => {
                if (el) {
                  buttonRefs.current.set(option.value, el);
                } else {
                  buttonRefs.current.delete(option.value);
                }
              }}
              role="radio"
              tabIndex={shouldBeInTabOrder ? 0 : -1}
              variant={isSelected ? "primary" : "outline"}
            />
          );
        })}
        {hasSecondaryOptions && (
          <DesktopSelectPicker
            dropdownClassName={cn("w-[150px]", secondaryButtonClassName)}
            id={name}
            open={open}
            selectedLabel={secondaryLabel}
            setOpen={setOpen}
            triggerClassName={cn(
              "w-[150px] font-normal ",
              selectedSecondaryOption && "bg-primary font-medium text-primary-foreground dark:bg-primary",
              secondaryButtonClassName,
            )}
            triggerComponent={ButtonGroup.Button}
            triggerProps={{
              "aria-checked": !!selectedSecondaryOption,
              "aria-label": secondaryLabel,
              role: "radio",
              tabIndex: selectedSecondaryOption ? 0 : -1,
              onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => {
                // Use the selected secondary value if available, otherwise first secondary option
                const currentValue = selectedSecondaryOption?.value || secondaryOptions?.[0]?.value;
                if (currentValue) {
                  handleKeyDown(e, currentValue);
                }
              },
              ref: (el: HTMLButtonElement | null) => {
                if (el && secondaryOptions) {
                  for (const option of secondaryOptions) {
                    buttonRefs.current.set(option.value, el);
                  }
                }
              },
            }}
          >
            <GroupedOptionList
              noSearch
              onSelect={(value) => onChange(value)}
              optionGroups={[{ options: secondaryOptions }]}
              placeholder="More options..."
              selectedValue={value}
            />
          </DesktopSelectPicker>
        )}
      </ButtonGroup>
      {note && (
        <Text id={noteId} size="sm" variant="muted">
          {note}
        </Text>
      )}
      {error && <InputError id={errorId} message={error} />}
    </Flex>
  );
};
