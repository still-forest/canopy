import { useId } from "react";
import { Switch as BaseSwitch } from "@/components/ui/switch";
import { Label } from "@/forms/Label";
import { cn } from "@/utils";

interface SwitchProps extends React.ComponentProps<typeof BaseSwitch> {
  id?: string;
  label?: string | (string | null)[];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  labelClassName?: string | string[];
}

export const Switch = ({ id: idProp, label, className, labelClassName, size = "md", ...props }: SwitchProps) => {
  const generatedId = useId();
  const id = idProp || generatedId;

  const [leftLabel, rightLabel] = Array.isArray(label) ? label : [null, label];

  const commonLabelClassNames = "cursor-pointer";
  const leftLabelClassName = labelClassName && Array.isArray(labelClassName) ? labelClassName[0] : labelClassName;
  const rightLabelClassName = labelClassName && Array.isArray(labelClassName) ? labelClassName[1] : labelClassName;

  return (
    <div className="flex items-center space-x-2">
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
