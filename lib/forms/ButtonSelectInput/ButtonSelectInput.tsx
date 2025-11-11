import { useState } from "react";
import type { ButtonGroupProps } from "@/forms/Button/ButtonGroup";
import { ButtonGroup } from "@/forms/Button/ButtonGroup";
import { InputError } from "@/forms/InputError";
import { Label } from "@/forms/Label";
import { DesktopSelectPicker } from "@/forms/SelectPicker/DesktopSelectPicker";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { cn } from "@/utils";
import { GroupedOptionList } from "../SelectPicker/OptionList";

interface Option {
  label: string;
  value: string;
}

interface ButtonSelectInputProps extends Omit<ButtonGroupProps, "children"> {
  name?: string;
  label?: string;
  error?: string;
  note?: string;
  options: Option[];
  secondaryOptions?: Option[];
  value: string | undefined;
  onChange: (value: string) => void;
  buttonClassName?: string;
  secondaryButtonClassName?: string;
}

export const ButtonSelectInput = ({
  name,
  label,
  options,
  error,
  note,
  secondaryOptions,
  value,
  onChange,
  buttonClassName,
  secondaryButtonClassName,
  ...props
}: ButtonSelectInputProps) => {
  const [open, setOpen] = useState(false);
  const hasSecondaryOptions = secondaryOptions && secondaryOptions.length > 0;
  const selectedSecondaryOption = secondaryOptions?.find((option) => option.value === value);
  const secondaryLabel = selectedSecondaryOption?.label || "More options...";

  return (
    <Flex className="w-full" direction="col" gap="2">
      {label && <Label htmlFor={name}>{label}</Label>}
      <ButtonGroup className="w-full" {...props}>
        {options.map((option) => {
          const isSelected = option.value === value;
          return (
            <ButtonGroup.Button
              className={cn("flex-grow", !isSelected && "bg-input", buttonClassName)}
              key={option.value}
              label={option.label}
              onClick={() => onChange(option.value)}
              variant={isSelected ? "primary" : "outline"}
            />
          );
        })}
        {hasSecondaryOptions && (
          <DesktopSelectPicker
            dropdownClassName={cn("w-[150px]", secondaryButtonClassName)}
            open={open}
            selectedLabel={secondaryLabel}
            setOpen={setOpen}
            triggerClassName={cn(
              "w-[150px] bg-input",
              selectedSecondaryOption && "font-medium bg-primary text-primary-foreground",
              secondaryButtonClassName,
            )}
            triggerComponent={ButtonGroup.Button}
            triggerId={name}
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
        <Text size="sm" variant="muted">
          {note}
        </Text>
      )}
      {error && <InputError message={error} />}
    </Flex>
  );
};
