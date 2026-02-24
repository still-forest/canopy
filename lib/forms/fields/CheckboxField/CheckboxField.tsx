import { useEffect, useState } from "react";

import { Hint } from "@/components";
import { InputError, Label } from "@/forms";
import { Checkbox as BaseCheckbox, type CheckboxProps } from "@/forms/inputs";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { cn } from "@/utils";

export interface CheckboxFieldProps extends CheckboxProps {
  label: string;
  labelClassName?: string;
  hint?: string;
  note?: string;
  error?: string;
}

const CheckboxField = ({
  label,
  name,
  value,
  checked,
  onCheckedChange,
  note,
  error,
  labelClassName,
  hint,
  ...props
}: CheckboxFieldProps) => {
  const [checkedState, setCheckedState] = useState(checked);

  useEffect(() => {
    // Sync state when checked status changes from outside
    setCheckedState(checked);
  }, [checked]);

  let fullId = name;

  const effectiveValue = value || name;
  if (value) {
    fullId += `[${value}]`;
  }

  const handleChange = (newChecked: boolean) => {
    setCheckedState(newChecked);
    onCheckedChange?.(newChecked);
  };

  return (
    <Flex direction="col">
      <Flex align="center" gap="2">
        <BaseCheckbox
          checked={checkedState}
          id={fullId}
          name={name}
          onCheckedChange={handleChange}
          value={effectiveValue}
          {...props}
        />
        <Label className={cn("cursor-pointer", labelClassName)} htmlFor={fullId}>
          {label}
        </Label>
        {hint && <Hint content={hint} />}
      </Flex>
      {(note || error) && (
        <Flex className="ml-6" direction="col" gap="2">
          {note && (
            <Text size="sm" variant="muted">
              {note}
            </Text>
          )}
          {error && <InputError message={error} />}
        </Flex>
      )}
    </Flex>
  );
};

export { CheckboxField };
