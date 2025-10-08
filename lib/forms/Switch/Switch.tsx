import { useId } from "react";
import { Switch as BaseSwitch } from "@/components/ui/switch";
import { Label } from "@/forms/Label";
import { cn } from "@/utils";

interface SwitchProps extends React.ComponentProps<typeof BaseSwitch> {
  id?: string;
  label: string;
  leftLabel?: string;
  rightLabel?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Switch = ({ id: idProp, label, leftLabel, rightLabel, size = "md", ...props }: SwitchProps) => {
  const generatedId = useId();
  const id = idProp || generatedId;
  return (
    <div className="flex items-center space-x-2">
      {leftLabel && (
        <Label className="cursor-pointer" htmlFor={id} size={size}>
          {leftLabel}
        </Label>
      )}
      <BaseSwitch
        className={cn({
          "h-[10px] w-4": size === "xs",
          "h-[14px] w-6": size === "sm",
          "h-[18px] w-8": size === "md",
          "h-[22px] w-10": size === "lg",
          "h-[26px] w-12": size === "xl",
        })}
        id={id}
        thumbClassName={cn({
          "size-2": size === "xs",
          "size-3": size === "sm",
          "size-4": size === "sm",
          "size-5": size === "lg",
          "size-6": size === "xl",
        })}
        {...props}
      />
      <Label className="cursor-pointer" htmlFor={id} size={size}>
        {rightLabel || label}
      </Label>
    </div>
  );
};
