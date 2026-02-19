import { TextField, type TextFieldProps } from "@/forms/TextField";

export interface NumberInputProps extends Omit<TextFieldProps, "type"> {
  step?: string;
}

/**
+ * A specialized input component for numeric values.
+ * Extends TextField with number-specific functionality.
+ */
export const NumberInput = ({
  name,
  label,
  placeholder,
  note,
  // Default to two decimal places for currency and general decimal values
  step = ".01",
  className,
  ...props
}: NumberInputProps) => {
  return (
    <TextField
      className={className}
      label={label}
      name={name}
      note={note}
      placeholder={placeholder}
      step={step}
      type="number"
      {...props}
    />
  );
};
