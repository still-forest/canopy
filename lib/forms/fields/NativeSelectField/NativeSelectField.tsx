import type { ChangeEvent, ComponentProps } from "react";
import { Hint } from "@/components";
import { Field } from "@/forms";
import { NativeSelect } from "@/forms/inputs/NativeSelect/NativeSelect";
import { cn } from "@/utils";

export interface NativeSelectFieldOptionGroup {
  label: string;
  options: NativeSelectFieldOption[];
}

export interface NativeSelectFieldOption {
  value: string;
  label: string;
}

export interface NativeSelectFieldProps extends Omit<ComponentProps<"select">, "dir" | "size" | "onChange"> {
  name: string;
  value?: string;
  onChange: (value: string) => void;
  options: NativeSelectFieldOption[] | NativeSelectFieldOptionGroup[];
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  hint?: string;
  note?: string;
  className?: string;
  error?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const NativeSelectField = ({
  name,
  defaultValue,
  options,
  label,
  labelClassName,
  placeholder = "Select an option",
  hint,
  note,
  className,
  value,
  onChange,
  error,
  size = "md",
  id,
  ...props
}: NativeSelectFieldProps) => {
  const inputId = id ?? name;
  const isInvalid = !!error;

  const triggerClasses = cn(
    (size === "xs" || size === "sm") && "h-8 text-xs",
    size === "md" && "h-9 text-sm",
    size === "lg" && "h-10 text-base",
    size === "xl" && "h-11 text-lg",
    className,
  );

  const isOptionGroup = options.some((option) => "options" in option);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <Field data-invalid={isInvalid}>
      {label && (
        <Field.LabelGroup>
          <Field.Label className={labelClassName} htmlFor={inputId}>
            {label}
          </Field.Label>
          {hint && <Hint content={hint} />}
        </Field.LabelGroup>
      )}
      <NativeSelect
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error) || undefined}
        className={triggerClasses}
        id={id}
        name={name}
        onChange={handleSelectChange}
        {...(value !== undefined ? { value } : { defaultValue: defaultValue as string | undefined })}
        {...props}
      >
        <NativeSelect.Option value="">{placeholder}</NativeSelect.Option>
        {!isOptionGroup &&
          (options as unknown as NativeSelectFieldOption[]).map(({ value, label }) => (
            <NativeSelect.Option key={`option-${value}`} value={value}>
              {label}
            </NativeSelect.Option>
          ))}
        {isOptionGroup &&
          (options as unknown as NativeSelectFieldOptionGroup[]).map(({ label, options: optionGroups }) => (
            <NativeSelect.OptGroup key={`option-group-${label}`} label={label}>
              {optionGroups.map(({ value, label }) => (
                <NativeSelect.Option key={`option-${value}`} value={value}>
                  {label}
                </NativeSelect.Option>
              ))}
            </NativeSelect.OptGroup>
          ))}
      </NativeSelect>
      {note && <Field.Description>{note}</Field.Description>}
      {error && <Field.Error>{error}</Field.Error>}
    </Field>
  );
};

export { NativeSelectField };
