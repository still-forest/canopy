import { Hint } from "@/components";
import { Field, Slider, type SliderProps } from "@/forms";

interface SliderFieldProps extends SliderProps {
  name: string;
  orientation?: "vertical" | "horizontal";
  label?: string;
  labelClassName?: string;
  labelOrientation?: "vertical" | "horizontal";
  hint?: string;
  note?: string;
  error?: string;
}

export const SliderField = ({
  id,
  name,
  orientation = "horizontal",
  label,
  labelClassName,
  labelOrientation = "vertical",
  hint,
  note,
  error,
  ...props
}: SliderFieldProps) => {
  const inputId = id || name;
  const isInvalid = !!error;

  return (
    <Field data-invalid={isInvalid} orientation={labelOrientation}>
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
      <Slider aria-invalid={error ? true : undefined} id={inputId} name={name} orientation={orientation} {...props} />
      {note && <Field.Description>{note}</Field.Description>}
      {error && <Field.Error>{error}</Field.Error>}
    </Field>
  );
};
