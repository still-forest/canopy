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
    <Flex direction={labelOrientation === "left" ? "row" : "col"} gap="2" className="w-full">
      {label && (
        <Label htmlFor={name} className={labelOrientation === "left" ? "text-nowrap" : ""}>
          {label}
        </Label>
      )}
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={className}
        aria-label={label || name}
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
