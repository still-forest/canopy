import { Hint } from "@/components";
import { Field } from "@/forms";
import { Input, type InputProps } from "@/forms/inputs";

export interface TextFieldProps extends InputProps {
  name: string;
  label?: string;
  labelClassName?: string;
  labelOrientation?: "top" | "left";
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
  labelOrientation = "top",
  hint,
  note,
  size = "md",
  error,
  ...props
}: TextFieldProps) => {
  return (
    <Field>
      {label && (
        <Field.Label className={labelClassName} htmlFor={id || name}>
          {label}
          {hint && <Hint content={hint} />}
        </Field.Label>
      )}
      <Input aria-label={label || name} id={id || name} name={name} size={size} type={type} {...props} />
      {note && <Field.Description>{note}</Field.Description>}
      {error && <Field.Error>{error}</Field.Error>}
    </Field>
  );
};

export { TextField };
