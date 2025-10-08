import { Label } from "@/components/ui/label";
import { Switch as BaseSwitch } from "@/components/ui/switch";

interface SwitchProps {
  id?: string;
  label: string;
  name: string;
  leftLabel?: string;
  rightLabel?: string;
}

export const Switch = ({ id: ipProp, label, leftLabel, rightLabel }: SwitchProps) => {
  const id = ipProp || `switch-${Math.random().toString(36).substring(2, 15)}`;
  return (
    <div className="flex items-center space-x-2">
      {leftLabel && <Label htmlFor={id}>{leftLabel}</Label>}
      <BaseSwitch id={id} />
      <Label htmlFor={id}>{rightLabel || label}</Label>
    </div>
  );
};
