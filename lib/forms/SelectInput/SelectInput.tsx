import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InputError, Label } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { cn } from "@/utils";

export interface Option {
  value: string;
  label: string;
}

export interface SelectInputProps extends Omit<React.ComponentProps<"select">, "dir" | "size"> {
  name: string;
  value?: string;
  onValueChange: (value: string) => void;
  options: Option[];
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
  options,
  label,
  placeholder,
  note,
  className,
  value,
  onValueChange,
  error,
  size = "md",
  ...props
}: SelectInputProps) => {
  const triggerClasses = cn(
    "min-w-[180px]",
    size === "xs" && "h-7 text-xs md:text-xs",
    size === "sm" && "h-8 text-sm md:text-xs",
    size === "md" && "h-9 text-base md:text-sm",
    size === "lg" && "h-10 text-lg md:text-base",
    size === "xl" && "h-11 text-xl md:text-lg",
    className,
  );

  const triggerSize = size === "xs" || size === "sm" ? "sm" : "default";

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
        <SelectTrigger className={triggerClasses} data-testid={`select-input-${name}`} size={triggerSize}>
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
