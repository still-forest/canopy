import { useState } from "react";

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

  let fullId = name;

  if (!value) {
    value = name;
  } else {
    fullId += `[${value}]`;
  }

  const handleChange = (newChecked: boolean) => {
    setCheckedState(newChecked);
    onCheckedChange?.(newChecked);
  };

  return (
    <Flex align="center" gap="2">
      <BaseCheckbox id={fullId} name={name} checked={checkedState} onCheckedChange={handleChange} value={value} />
      <Label htmlFor={fullId} className="cursor-pointer">
        {label}
      </Label>
    </Flex>
  );
};

export { Checkbox };
