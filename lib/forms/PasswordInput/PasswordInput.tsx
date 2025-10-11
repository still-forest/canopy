import { TextInput, type TextInputProps } from "@/forms/TextInput";

interface PasswordInputProps extends Omit<TextInputProps, "type"> {}

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  return <TextInput type="password" {...props} />;
};
