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
        <Label className="cursor-pointer" htmlFor={id} size={size}>
          {leftLabel}
        </Label>
      )}
      <BaseSwitch
        className={cn({
          "h-[10px] min-h-[10px] w-[16px]": size === "xs",
          "h-[14px] min-h-[14px] w-[24px]": size === "sm",
          md: size === "md",
          "h-[22px] min-h-[22px] w-[40px]": size === "lg",
          "h-[26px] min-h-[26px] w-[48px]": size === "xl",
        })}
        id={id}
        thumbClassName={cn({
          "size-2": size === "xs",
          "size-3": size === "sm",
          md: size === "md",
          "size-5": size === "lg",
          "size-6": size === "xl",
        })}
      />
      <Label className="cursor-pointer" htmlFor={id} size={size}>
        {rightLabel || label}
      </Label>
    </div>
  );
};
