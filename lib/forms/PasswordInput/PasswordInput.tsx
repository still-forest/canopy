import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import type { InputProps } from "@/forms/Input";
import { InputGroup } from "@/forms/InputGroup";

interface PasswordInputProps extends Omit<InputProps, "type"> {}

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputGroup>
      <InputGroup.Input type={showPassword ? "text" : "password"} {...props} />
      <InputGroup.Addon right>
        <InputGroup.Button asIcon onClick={togglePassword} size="xs" variant="ghost">
          {showPassword ? <Eye /> : <EyeOff />}
        </InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup>
  );
};
