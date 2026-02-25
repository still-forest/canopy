import { Hint } from "@/components";
import { Field } from "@/forms";
import { Input, type InputProps } from "@/forms/inputs";

export interface TextFieldProps extends InputProps {
  name: string;
  label?: string;
  labelClassName?: string;
  hint?: string;
  note?: string;
  className?: string;
  error?: string;
}

const TextField = ({
  id,
  name,
  type = "text",
  label,
  labelClassName,
  hint,
  note,
  size = "md",
  error,
  ...props
}: TextFieldProps) => {
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
      <Input
        aria-invalid={isInvalid}
        aria-label={label || name}
        id={id || name}
        name={name}
        size={size}
        type={type}
        {...props}
      />
      {note && <Field.Description>{note}</Field.Description>}
      {error && <Field.Error>{error}</Field.Error>}
    </Field>
  );
};

export { TextField };
