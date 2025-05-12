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
      name={name}
      type="number"
      step={step}
      label={label}
      placeholder={placeholder}
      note={note}
      className={className}
      {...props}
    />
  );
};
