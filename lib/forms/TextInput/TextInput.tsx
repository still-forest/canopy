import { Input } from "@/components/ui/input";
import { InputError, Label } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";

export interface TextInputProps extends React.ComponentProps<"input"> {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  labelOrientation?: "top" | "left";
  note?: string;
  className?: string;
  error?: string;
}

const TextInput = ({
  name,
  type = "text",
  placeholder,
  label,
  labelOrientation = "top",
  note,
  className,
  error,
  ...props
}: TextInputProps) => {
  return (
    <Flex className="w-full" direction={labelOrientation === "left" ? "row" : "col"} gap="2">
      {label && (
        <Label className={labelOrientation === "left" ? "text-nowrap" : ""} htmlFor={name}>
          {label}
        </Label>
      )}
      <Input
        aria-label={label || name}
        className={className}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        {...props}
      />
      {note && (
        <Text size="sm" variant="muted">
          {note}
        </Text>
      )}
      {error && <InputError message={error} />}
    </Flex>
  );
};

export { TextInput };
