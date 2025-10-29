import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InputError, Label } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { cn } from "@/utils";

export interface SelectInputOptionGroup {
  label: string;
  options: SelectInputOption[];
}

export interface SelectInputOption {
  icon?: string;
  value: string;
  label: string;
}

export interface SelectInputProps extends Omit<React.ComponentProps<"select">, "dir" | "size"> {
  name: string;
  value?: string;
  onValueChange: (value: string) => void;
  options: SelectInputOption[] | SelectInputOptionGroup[];
  label?: string;
  placeholder?: string;
  note?: string;
  className?: string;
  error?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const SelectInput = ({
  name,
  defaultValue,
  options: optionsProp,
  label,
  placeholder,
  note,
  className,
  value,
  onValueChange,
  error,
  ...props
}: SelectInputProps) => {
  const isOptionGroup = optionsProp.some((option) => "options" in option);
  const options: SelectInputOptionGroup[] = isOptionGroup
    ? (optionsProp as SelectInputOptionGroup[])
    : [
        {
          label: "",
          options: optionsProp as SelectInputOption[],
        },
      ];

  const flattenedOptions = options.flatMap((option) => option.options);
  console.log("flattenedOptions", flattenedOptions);

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
          {flattenedOptions.map(({ value, label }) => (
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
