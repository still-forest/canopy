import { useId } from "react";
import { Hint } from "@/components";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Field, FieldSet } from "@/forms";
import { cn } from "@/utils";

interface Option {
  value: string;
  label: string;
  hint?: string;
  note?: string;
}

interface RadioOptionProps {
  option: Option;
  isInvalid: boolean;
  radioSizeClasses?: string;
  labelClassName?: string;
  groupId: string;
}

const RadioOption = ({ option, isInvalid, radioSizeClasses, labelClassName, groupId }: RadioOptionProps) => {
  const id = `${groupId}-radio-${option.value}`;
  return (
    <Field data-invalid={isInvalid} orientation="horizontal">
      <RadioGroupItem
        aria-invalid={isInvalid}
        className={cn("bg-input dark:bg-input border-input-border", radioSizeClasses)}
        id={id}
        value={option.value}
      />
      <Field.Content>
        <Field.LabelGroup>
          <Field.Label className={labelClassName} htmlFor={id}>
            {option.label}
          </Field.Label>
          {option.hint && <Hint content={option.hint} />}
        </Field.LabelGroup>
        {option.note && <Field.Description>{option.note}</Field.Description>}
      </Field.Content>
    </Field>
  );
};

interface RadioFieldProps {
  name: string;
  label?: string;
  labelClassName?: string;
  note?: string;
  value?: string;
  options: Option[];
  onChange?: (value: string) => void;
  size?: "sm" | "md" | "lg";
  error?: string;
}

export const RadioField = ({
  label,
  name,
  options,
  note,
  value,
  size = "md",
  onChange,
  error,
  labelClassName,
}: RadioFieldProps) => {
  const defaultId = useId();
  const groupId = name ?? defaultId;
  const radioSizeClasses = size === "lg" ? "size-5" : size === "md" ? "size-4" : "size-3";
  const isInvalid = !!error;

  return (
    <FieldSet data-invalid={isInvalid}>
      {label && <Field.Legend variant="label">{label}</Field.Legend>}
      {note && <Field.Description>{note}</Field.Description>}
      <RadioGroup className="gap-2" name={name} onValueChange={onChange} value={value}>
        {options.map((option) => (
          <RadioOption
            groupId={groupId}
            isInvalid={isInvalid}
            key={option.value}
            labelClassName={labelClassName}
            option={option}
            radioSizeClasses={radioSizeClasses}
          />
        ))}
      </RadioGroup>
      {error && <Field.Error>{error}</Field.Error>}
    </FieldSet>
  );
};
