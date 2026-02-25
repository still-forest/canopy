import { Eye, EyeOff } from "lucide-react";
import { type ComponentProps, useState } from "react";
import { Field, InputGroup } from "@/forms";

interface PasswordFieldProps extends Omit<ComponentProps<typeof InputGroup.Input>, "type" | "size"> {
  name: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  label?: string;
  labelClassName?: string;
  note?: string;
  error?: string;
}

export const PasswordField = ({ id, name, label, labelClassName, note, error, ...props }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const isInvalid = !!error;

  return (
    <Field data-invalid={isInvalid}>
      {label && (
        <Field.Label className={labelClassName} htmlFor={id || name}>
          {label}
        </Field.Label>
      )}
      <InputGroup>
        <InputGroup.Input
          aria-invalid={isInvalid}
          aria-label={label || name}
          id={id || name}
          name={name}
          type={showPassword ? "text" : "password"}
          {...props}
        />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button
            aria-label={showPassword ? "Hide password" : "Show password"}
            asIcon
            icon={showPassword ? <Eye /> : <EyeOff />}
            onClick={togglePassword}
            size="xs"
            variant="ghost"
          />
        </InputGroup.Addon>
      </InputGroup>
      {note && <Field.Description>{note}</Field.Description>}
      {error && <Field.Error>{error}</Field.Error>}
    </Field>
  );
};
