import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@/components/ui/native-select";
import { InputError, Label } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { cn } from "@/utils";

export interface SelectInputOptionGroup {
  label: string;
  options: SelectInputOption[];
}

export interface SelectInputOption {
  value: string;
  label: string;
}

export interface SelectInputProps extends Omit<React.ComponentProps<"select">, "dir" | "size" | "onChange"> {
  name: string;
  value?: string;
  onChange: (value: string) => void;
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
  options,
  label,
  placeholder = "Select an option",
  note,
  className,
  value,
  onChange,
  error,
  size = "md",
  ...props
}: SelectInputProps) => {
  const triggerClasses = cn(
    (size === "xs" || size === "sm") && "h-8 text-xs",
    size === "md" && "h-9 text-sm",
    size === "lg" && "h-10 text-base",
    size === "xl" && "h-11 text-lg",
    className,
  );

  const isOptionGroup = options.some((option) => "options" in option);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <Flex className="w-full" direction="col" gap="2">
      {label && <Label htmlFor={name}>{label}</Label>}
      <NativeSelect
        className={triggerClasses}
        defaultValue={defaultValue as string | undefined}
        name={name}
        onChange={handleSelectChange}
        value={value}
        {...props}
      >
        <NativeSelectOption value="">{placeholder}</NativeSelectOption>
        {!isOptionGroup &&
          (options as unknown as SelectInputOption[]).map(({ value, label }) => (
            <NativeSelectOption key={`option-${value}`} value={value}>
              {label}
            </NativeSelectOption>
          ))}
        {isOptionGroup &&
          (options as unknown as SelectInputOptionGroup[]).map(({ label, options: optionGroups }) => (
            <NativeSelectOptGroup key={`option-group-${label}`} label={label}>
              {optionGroups.map(({ value, label }) => (
                <NativeSelectOption key={`option-${value}`} value={value}>
                  {label}
                </NativeSelectOption>
              ))}
            </NativeSelectOptGroup>
          ))}
      </NativeSelect>
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
