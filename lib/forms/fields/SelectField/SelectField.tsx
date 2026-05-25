import { Hint } from "@/components";
import { Field, SelectInput, type SelectInputProps } from "@/forms";

export interface SelectFieldProps extends SelectInputProps {
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  hint?: string;
  note?: string;
  error?: string;
}

export const SelectField = ({
  name,
  label,
  placeholder = "Select an option",
  hint,
  note,
  error,
  id,
  ...props
}: SelectFieldProps) => {
  const inputId = id ?? name;
  const errorId = `${inputId}-error`;
  const isInvalid = !!error;

  return (
    <Field data-invalid={isInvalid}>
      {label && (
        <Field.LabelGroup>
          <Field.Label htmlFor={inputId}>{label}</Field.Label>
          {hint && <Hint content={hint} />}
        </Field.LabelGroup>
      )}
      <SelectInput id={id} name={name} {...props} />
      {note && <Field.Description>{note}</Field.Description>}
      {error && <Field.Error id={errorId}>{error}</Field.Error>}
    </Field>
  );
};
