import { Switch as BaseSwitch } from "@/components/ui/switch";
import { Label } from "@/forms/Label";

interface SwitchProps {
  id?: string;
  label: string;
  name: string;
  leftLabel?: string;
  rightLabel?: string;
  size?: "sm" | "md" | "lg";
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
      <BaseSwitch id={id} />
      <Label htmlFor={id} size={size}>
        {rightLabel || label}
      </Label>
    </div>
  );
};
