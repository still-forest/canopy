import { Hint } from "@/components";
import { InputError, Label } from "@/forms";
import { Input, type InputProps } from "@/forms/inputs";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { cn } from "@/utils";

export interface TextFieldProps extends InputProps {
  label?: string;
  labelClassName?: string;
  labelOrientation?: "top" | "left";
  hint?: string;
  note?: string;
  className?: string;
  error?: string;
}

const TextField = ({
  id,
  name,
  type = "text",
  label,
  labelClassName,
  labelOrientation = "top",
  hint,
  note,
  size = "md",
  error,
  ...props
}: TextFieldProps) => {
  return (
    <Flex className="w-full" direction={labelOrientation === "left" ? "row" : "col"} gap="2">
      {(label || hint) && (
        <Flex align="center" direction="row" gap="1">
          {label && (
            <Label
              className={cn(labelOrientation === "left" ? "text-nowrap" : "", labelClassName)}
              htmlFor={id || name}
              size={size}
            >
              {label}
            </Label>
          )}
          {hint && <Hint content={hint} />}
        </Flex>
      )}
      <Input aria-label={label || name} id={id || name} name={name} size={size} type={type} {...props} />
      {note && (
        <Text size="sm" variant="muted">
          {note}
        </Text>
      )}
      {error && <InputError message={error} />}
    </Flex>
  );
};

export { TextField };
