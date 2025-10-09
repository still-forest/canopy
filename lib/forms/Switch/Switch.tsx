import { useId } from "react";
import { Switch as BaseSwitch } from "@/components/ui/switch";
import { Label } from "@/forms/Label";
import { cn } from "@/utils";

interface SwitchProps extends React.ComponentProps<typeof BaseSwitch> {
  id?: string;
  label?: string | string[];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  labelClassName?: string | string[];
}

export const Switch = ({
  id: idProp,
  label,
  className,
  thumbClassName,
  labelClassName,
  size = "md",
  ...props
}: SwitchProps) => {
  const generatedId = useId();
  const id = idProp || generatedId;

  const [leftLabel, rightLabel] = Array.isArray(label) ? label : [undefined, label];

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
      <BaseSwitch
        className={cn(
          {
            "h-[10px] w-4": size === "xs",
            "h-[14px] w-6": size === "sm",
            "h-[18px] w-8": size === "md",
            "h-[22px] w-10": size === "lg",
            "h-[26px] w-12": size === "xl",
          },
          className,
        )}
        id={id}
        thumbClassName={cn(
          {
            "size-2": size === "xs",
            "size-3": size === "sm",
            "size-4": size === "md",
            "size-5": size === "lg",
            "size-6": size === "xl",
          },
          thumbClassName,
        )}
        {...props}
      />
      <Label className={cn(commonLabelClassNames, rightLabelClassName)} htmlFor={id} size={size}>
        {rightLabel || label}
      </Label>
    </div>
  );
};
