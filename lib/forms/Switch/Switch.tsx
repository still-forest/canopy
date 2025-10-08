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
          "h-[12px] min-h-[12px] w-[20px] px-[3px]": size === "xs",
          "h-[16px] min-h-[16px] w-[28px] px-[3px]": size === "sm",
          md: size === "md",
          "h-[24px] min-h-[24px] w-[42px] px-[3px]": size === "lg",
          "h-[28px] min-h-[28px] w-[48px] px-[3px]": size === "xl",
        })}
        id={id}
        thumbClassName={cn({
          "size-[8px] data-[state=checked]:translate-x-1.5 data-[state=unchecked]:-translate-x-0.5": size === "xs",
          "size-[12px] data-[state=checked]:translate-x-2.5 data-[state=unchecked]:-translate-x-0.5": size === "sm",
          md: size === "md",
          "size-[20px] data-[state=checked]:translate-x-4 data-[state=unchecked]:-translate-x-0.5": size === "lg",
          "size-[24px] data-[state=checked]:translate-x-4.5 data-[state=unchecked]:-translate-x-0.5": size === "xl",
        })}
      />
      <Label htmlFor={id} size={size}>
        {rightLabel || label}
      </Label>
    </div>
  );
};
