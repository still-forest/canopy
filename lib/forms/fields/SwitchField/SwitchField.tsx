import { useId } from "react";
import { Switch } from "@/components/Switch";
import { Label } from "@/forms/Label";
import { cn } from "@/utils";

interface SwitchFieldProps extends React.ComponentProps<typeof Switch> {
  id?: string;
  label?: string | (string | null)[];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  labelClassName?: string | string[];
  containerClassName?: string;
}

export const SwitchField = ({
  id: idProp,
  label,
  labelClassName,
  containerClassName,
  size = "md",
  ...props
}: SwitchFieldProps) => {
  const generatedId = useId();
  const id = idProp || generatedId;

  const [leftLabel, rightLabel] = Array.isArray(label) ? label : [null, label];

  const commonLabelClassNames = "cursor-pointer";
  const leftLabelClassName = labelClassName && Array.isArray(labelClassName) ? labelClassName[0] : labelClassName;
  const rightLabelClassName = labelClassName && Array.isArray(labelClassName) ? labelClassName[1] : labelClassName;

  return (
    <div className={cn("flex items-center space-x-2", containerClassName)}>
      {leftLabel && (
        <Label className={cn(commonLabelClassNames, leftLabelClassName)} htmlFor={id} size={size}>
          {leftLabel}
        </Label>
      )}
      <Switch id={id} size={size} {...props} />
      <Label className={cn(commonLabelClassNames, rightLabelClassName)} htmlFor={id} size={size}>
        {rightLabel}
      </Label>
    </div>
  );
};
