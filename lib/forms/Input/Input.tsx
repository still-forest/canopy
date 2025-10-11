import { TextInput, type TextInputProps } from "@/forms/TextInput";
import { NumberInput } from "@/main";

export interface InputProps extends TextInputProps {
  step?: string;
}

const Input = ({ type = "text", step, ...props }: InputProps) => {
  if (type === "number") {
    return <NumberInput {...props} step={step ?? ".01"} />;
  }

  return <TextInput type={type} {...props} />;
};

export { Input };
