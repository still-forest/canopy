import { Eye, EyeOff } from "lucide-react";
import { type ComponentProps, useState } from "react";
import { InputGroup } from "@/forms/InputGroup";
import { Flex, InputError, Label, Text } from "@/main";

interface PasswordFieldProps extends Omit<ComponentProps<"input">, "type" | "size"> {
  name: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  label?: string;
  labelOrientation?: "top" | "left";
  note?: string;
  error?: string;
}

export const PasswordField = ({
  name,
  size = "md",
  label,
  labelOrientation = "top",
  note,
  error,
  ...props
}: PasswordFieldProps) => {
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
        <InputGroup.Input type={showPassword ? "text" : "password"} {...props} name={name} />
        <InputGroup.Addon right>
          <InputGroup.Button
            aria-label={showPassword ? "Hide password" : "Show password"}
            asIcon
            onClick={togglePassword}
            size="xs"
            variant="ghost"
          >
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
