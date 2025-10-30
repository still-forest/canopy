import { useEffect, useState } from "react";

import { Checkbox as BaseCheckbox } from "@/components/ui/checkbox";
import { InputError, Label } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";

export interface CheckboxProps {
  label: string;
  name: string;
  value?: string;
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  note?: string;
  error?: string;
}

const Checkbox = ({ label, name, value, checked, onCheckedChange, note, error }: CheckboxProps) => {
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
    <Flex className="w-full" direction="col">
      <Flex align="center" gap="2">
        <BaseCheckbox
          checked={checkedState}
          id={fullId}
          name={name}
          onCheckedChange={handleChange}
          value={effectiveValue}
        />
        <Label className="cursor-pointer" htmlFor={fullId}>
          {label}
        </Label>
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

export { Checkbox };
