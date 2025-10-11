import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import type { InputProps } from "@/forms/Input";
import { InputGroup } from "@/forms/InputGroup";
import { Flex, InputError, Label, Text } from "@/main";

interface PasswordInputProps extends Omit<InputProps, "type"> {}

export const PasswordInput = ({
  name,
  size = "md",
  label,
  labelOrientation = "top",
  note,
  error,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex className="w-full" direction={labelOrientation === "left" ? "row" : "col"} gap="2">
      {label && (
        <Label className={labelOrientation === "left" ? "text-nowrap" : ""} htmlFor={name} size={size}>
          {label}
        </Label>
      )}
      <InputGroup>
        <InputGroup.Input type={showPassword ? "text" : "password"} {...props} name={name} size={size} />
        <InputGroup.Addon right>
          <InputGroup.Button asIcon onClick={togglePassword} size="xs" variant="ghost">
            {showPassword ? <Eye /> : <EyeOff />}
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      {note && (
        <Text size="sm" variant="muted">
          {note}
        </Text>
      )}
      {error && <InputError message={error} />}
    </Flex>
  );
};
