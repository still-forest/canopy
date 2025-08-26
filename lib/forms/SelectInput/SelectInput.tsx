import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InputError, Label } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { cn } from "@/utils/cn";

export interface Option {
  value: string;
  label: string;
}

export interface SelectInputProps extends Omit<React.ComponentProps<"select">, "dir"> {
  name: string;
  value?: string;
  onValueChange: (value: string) => void;
  options: Option[];
  label?: string;
  placeholder?: string;
  note?: string;
  className?: string;
  error?: string;
}

const SelectInput = ({
  name,
  defaultValue,
  options,
  label,
  placeholder,
  note,
  className,
  value,
  onValueChange,
  error,
  ...props
}: SelectInputProps) => {
  return (
    <Flex className="w-full" direction="col" gap="2">
      {label && <Label htmlFor={name}>{label}</Label>}
      <Select
        defaultValue={defaultValue as string | undefined}
        name={name}
        onValueChange={onValueChange}
        value={value}
        {...props}
      >
        <SelectTrigger className={cn("min-w-[180px]", className)} data-testid={`select-input-${name}`}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(({ value, label }) => (
            <SelectItem key={`option-${value}`} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {note && (
        <Text size="sm" variant="muted">
          {note}
        </Text>
      )}
      {error && <InputError message={error} />}
    </Flex>
  );
};

export { SelectInput };
