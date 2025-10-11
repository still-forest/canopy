import { TextInput, type TextInputProps } from "@/forms/TextInput";
import { DateInput, NumberInput } from "@/main";

export interface InputProps extends TextInputProps {
  type?: "text" | "number" | "date" | "email";
  step?: string;
}

const Input = ({ type = "text", step, ...props }: InputProps) => {
  if (type === "number") {
    return <NumberInput {...props} step={step ?? ".01"} />;
  }

  if (type === "date") {
    return <DateInput {...props} />;
  }

  return <TextInput type={type} {...props} />;
};

export { Input };
