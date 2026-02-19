import { useId } from "react";
import { Switch as BaseSwitch } from "@/components/ui/switch";
import { Label } from "@/forms/Label";
import { cn } from "@/utils";

interface ToggleFieldProps extends React.ComponentProps<typeof BaseSwitch> {
  id?: string;
  label?: string | (string | null)[];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  labelClassName?: string | string[];
}

export const ToggleField = ({
  id: idProp,
  label,
  className,
  labelClassName,
  size = "md",
  ...props
}: ToggleFieldProps) => {
  const generatedId = useId();
  const id = idProp || generatedId;

  const [leftLabel, rightLabel] = Array.isArray(label) ? label : [null, label];

  const commonLabelClassNames = "cursor-pointer";
  const leftLabelClassName = labelClassName && Array.isArray(labelClassName) ? labelClassName[0] : labelClassName;
  const rightLabelClassName = labelClassName && Array.isArray(labelClassName) ? labelClassName[1] : labelClassName;

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {leftLabel && (
        <Label className={cn(commonLabelClassNames, leftLabelClassName)} htmlFor={id} size={size}>
          {leftLabel}
        </Label>
      )}
      <BaseSwitch id={id} size={size} {...props} />
      <Label className={cn(commonLabelClassNames, rightLabelClassName)} htmlFor={id} size={size}>
        {rightLabel}
      </Label>
    </div>
  );
};
