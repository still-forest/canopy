import { useEffect, useState } from "react";

import { Checkbox as BaseCheckbox } from "@/components/ui/checkbox";
import { Label } from "@/forms";
import { Flex } from "@/layout";

export interface CheckboxProps {
  label: string;
  name: string;
  value?: string;
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = ({ label, name, value, checked, onCheckedChange }: CheckboxProps) => {
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
  );
};

export { Checkbox };
