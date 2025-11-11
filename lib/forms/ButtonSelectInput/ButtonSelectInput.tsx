import type { ButtonGroupProps } from "@/forms/Button/ButtonGroup";
import { ButtonGroup } from "@/forms/Button/ButtonGroup";
import { InputError } from "@/forms/InputError";
import { Label } from "@/forms/Label";
import { SelectInput } from "@/forms/SelectInput";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { cn } from "@/utils";

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
  ...props
}: ButtonSelectInputProps) => {
  return (
    <Flex className="w-full" direction="col" gap="2">
      {label && <Label htmlFor={name}>{label}</Label>}
      <ButtonGroup className="w-full" {...props}>
        {options.map((option) => {
          const isSelected = option.value === value;
          return (
            <ButtonGroup.Button
              className={cn("flex-grow", buttonClassName)}
              key={option.value}
              label={option.label}
              onClick={() => onChange(option.value)}
              variant={isSelected ? "primary" : "outline"}
            />
          );
        })}
        {secondaryOptions && secondaryOptions.length > 0 && (
          <SelectInput
            name={name ?? "select-input"}
            onChange={(value) => onChange(value)}
            options={secondaryOptions}
            placeholder="More options..."
            value={value}
          />
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
