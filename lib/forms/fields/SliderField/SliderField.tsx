import { Hint } from "@/components";
import { Slider as BaseSlider } from "@/components/ui/slider";
import { Field } from "@/forms";
import { cn } from "@/utils";

interface SliderFieldProps extends Omit<React.ComponentProps<typeof BaseSlider>, "value" | "defaultValue"> {
  name: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  thumbClassName?: string;
  trackClassName?: string;
  label?: string;
  labelClassName?: string;
  labelOrientation?: "top" | "left";
  hint?: string;
  note?: string;
  error?: string;
  value?: number | number[];
  defaultValue?: number | number[];
}

export const SliderField = ({
  id,
  name,
  size = "md",
  label,
  labelClassName,
  labelOrientation = "top",
  hint,
  note,
  error,
  thumbClassName,
  trackClassName,
  value: valueProp,
  defaultValue: defaultValueProp,
  ...props
}: SliderFieldProps) => {
  const defaultValue =
    defaultValueProp !== undefined
      ? Array.isArray(defaultValueProp)
        ? defaultValueProp
        : [defaultValueProp]
      : undefined;
  const value = valueProp !== undefined ? (Array.isArray(valueProp) ? valueProp : [valueProp]) : undefined;

  const inputId = id || name;
  const isInvalid = !!error;

  return (
    <Field data-invalid={isInvalid}>
      {(label || hint) && (
        <Field.LabelGroup>
          {label && (
            <Field.Label className={labelClassName} htmlFor={inputId}>
              {label}
            </Field.Label>
          )}
          {hint && <Hint content={hint} />}
        </Field.LabelGroup>
      )}
      <BaseSlider
        aria-invalid={error ? true : undefined}
        defaultValue={defaultValue}
        id={inputId}
        name={name}
        thumbClassName={cn(
          {
            "size-2": size === "xs",
            "size-3": size === "sm",
            "size-4": size === "md",
            "size-5": size === "lg",
            "size-6": size === "xl",
          },
          "bg-primary",
          thumbClassName,
        )}
        trackClassName={cn(
          {
            "data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1": size === "xs",
            "data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5": size === "sm",
            "data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2": size === "md",
            "data-[orientation=horizontal]:h-3 data-[orientation=vertical]:w-3": size === "lg",
            "data-[orientation=horizontal]:h-4 data-[orientation=vertical]:w-4": size === "xl",
          },
          trackClassName,
        )}
        value={value}
        {...props}
      />
      {note && <Field.Description>{note}</Field.Description>}
      {error && <Field.Error>{error}</Field.Error>}
    </Field>
  );
};
