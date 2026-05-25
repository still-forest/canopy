import { Hint } from "@/components";
import { Field } from "@/forms/Field";
import { MultiSelectInput, type MultiSelectInputProps } from "@/forms/inputs/MultiSelectInput";

export interface MultiSelectFieldProps extends MultiSelectInputProps {
  name: string;
  id?: string;
  label?: string;
  labelClassName?: string;
  hint?: string;
  note?: string;
  error?: string;
}

export const MultiSelectField = ({
  name,
  id,
  label,
  labelClassName,
  hint,
  note,
  error,
  ...props
}: MultiSelectFieldProps) => {
  const inputId = id ?? name;
  const errorId = `${inputId}-error`;
  const isInvalid = !!error;

  return (
    <Field data-invalid={isInvalid}>
      {label && (
        <Field.LabelGroup>
          <Field.Label className={labelClassName} htmlFor={inputId}>
            {label}
          </Field.Label>
          {hint && <Hint content={hint} />}
        </Field.LabelGroup>
      )}
      <MultiSelectInput aria-describedby={error ? errorId : undefined} aria-invalid={isInvalid} {...props} />
      {note && <Field.Description>{note}</Field.Description>}
      {error && <Field.Error id={errorId}>{error}</Field.Error>}
    </Field>
  );
};
