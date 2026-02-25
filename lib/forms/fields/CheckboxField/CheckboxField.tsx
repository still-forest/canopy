import { useEffect, useState } from "react";

import { Hint } from "@/components";
import { Field } from "@/forms";
import { Checkbox as BaseCheckbox, type CheckboxProps } from "@/forms/inputs";

export interface CheckboxFieldProps extends CheckboxProps {
  name: string;
  label?: string;
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

  const isInvalid = !!error;

  return (
    <Field data-invalid={isInvalid} orientation="horizontal">
      <BaseCheckbox
        aria-invalid={isInvalid}
        checked={checkedState}
        id={fullId}
        name={name}
        onCheckedChange={handleChange}
        value={effectiveValue}
        {...props}
      />
      <Field.Content>
        {label && (
          <Field.LabelGroup>
            <Field.Label className={labelClassName} htmlFor={fullId}>
              {label}
              {hint && <Hint content={hint} />}
            </Field.Label>
          </Field.LabelGroup>
        )}
        {note && <Field.Description>{note}</Field.Description>}
        {error && <Field.Error>{error}</Field.Error>}
      </Field.Content>
    </Field>
  );
};

export { CheckboxField };
