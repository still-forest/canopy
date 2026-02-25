import { Hint } from "@/components";
import { Field } from "@/forms";
import { Textarea } from "@/forms/inputs";

export interface TextareaFieldProps extends React.ComponentProps<"textarea"> {
  name: string;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  hint?: string;
  note?: string;
  className?: string;
  error?: string;
}

export function TextareaField({
  id,
  label,
  name,
  note,
  placeholder,
  className,
  error,
  labelClassName,
  hint,
  ...props
}: TextareaFieldProps) {
  const isInvalid = !!error;

  return (
    <Field data-invalid={isInvalid}>
      {label && (
        <Field.LabelGroup>
          <Field.Label className={labelClassName} htmlFor={id || name}>
            {label}
          </Field.Label>
          {hint && <Hint content={hint} />}
        </Field.LabelGroup>
      )}
      <Textarea
        aria-invalid={isInvalid}
        aria-label={label || name}
        className={className}
        id={id || name}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      {note && <Field.Description>{note}</Field.Description>}
      {error && <Field.Error>{error}</Field.Error>}
    </Field>
  );
}
