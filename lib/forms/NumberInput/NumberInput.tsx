import { TextInput, type TextInputProps } from "@/forms/TextInput";

export interface NumberInputProps extends Omit<TextInputProps, "type"> {
  step?: string;
}

/**
+ * A specialized input component for numeric values.
+ * Extends TextInput with number-specific functionality.
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
    <TextInput
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
