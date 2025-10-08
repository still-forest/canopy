import { Switch as BaseSwitch } from "@/components/ui/switch";
import { Label } from "@/forms/Label";
import { cn } from "@/utils";

interface SwitchProps {
  id?: string;
  label: string;
  leftLabel?: string;
  rightLabel?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Switch = ({ id: ipProp, label, leftLabel, rightLabel, size = "md" }: SwitchProps) => {
  const id = ipProp || `switch-${Math.random().toString(36).substring(2, 15)}`;
  return (
    <div className="flex items-center space-x-2">
      {leftLabel && (
        <Label htmlFor={id} size={size}>
          {leftLabel}
        </Label>
      )}
      <BaseSwitch
        className={cn({
          xs: size === "xs",
          sm: size === "sm",
          md: size === "md",
          "inline-flex h-[28px] min-h-[28px] w-[42px] shrink-0 cursor-pointer items-center rounded-full px-[3px]":
            size === "lg",
          xl: size === "xl",
        })}
        id={id}
        thumbClassName={cn({
          xs: size === "xs",
          sm: size === "sm",
          md: size === "md",
          "size-[24px] transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:-translate-x-0.5":
            size === "lg",
          xl: size === "xl",
        })}
      />
      <Label htmlFor={id} size={size}>
        {rightLabel || label}
      </Label>
    </div>
  );
};
