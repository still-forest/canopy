import { useId } from "react";
import { Hint } from "@/components";
import { Field } from "@/forms";
import { ButtonRadioInput, type ButtonRadioInputProps } from "@/forms/inputs/ButtonRadioInput";

interface ButtonRadioFieldProps extends ButtonRadioInputProps {
  label?: string;
  hint?: string;
  error?: string;
  note?: string;
}

export const ButtonRadioField = ({ id, name, label, hint, error, note, ...inputProps }: ButtonRadioFieldProps) => {
  const defaultId = useId();
  const baseId = id ?? defaultId;
  const labelId = `${baseId}-label`;
  const noteId = `${baseId}-note`;
  const errorId = `${baseId}-error`;

  const describedBy = [note ? noteId : null, error ? errorId : null].filter(Boolean).join(" ") || undefined;

  return (
    <Field data-invalid={!!error}>
      {label && (
        <Field.LabelGroup>
          <Field.Label id={labelId}>{label}</Field.Label>
          {hint && <Hint content={hint} />}
        </Field.LabelGroup>
      )}
      <ButtonRadioInput
        aria-describedby={describedBy}
        aria-invalid={error ? "true" : undefined}
        aria-label={!label ? name : undefined}
        aria-labelledby={label ? labelId : undefined}
        name={name}
        {...inputProps}
      />
      {note && <Field.Description id={noteId}>{note}</Field.Description>}
      {error && <Field.Error id={errorId}>{error}</Field.Error>}
    </Field>
  );
};
