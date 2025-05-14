import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { cn } from "@/utils";

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
  ...props
}: SelectInputProps) => {
  return (
    <Flex direction="col" gap="2" className="w-full">
      {label && <Label htmlFor={name}>{label}</Label>}
      <Select
        name={name}
        defaultValue={defaultValue as string | undefined}
        value={value}
        onValueChange={onValueChange}
        {...props}
      >
        <SelectTrigger data-testid={`select-input-${name}`} className={cn("min-w-[180px]", className)}>
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
    </Flex>
  );
};

export { SelectInput };
