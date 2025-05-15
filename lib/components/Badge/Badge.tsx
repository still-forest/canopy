import { Badge as BadgeBase } from "@/components/ui/badge";
import { cn } from "@/utils";

interface BadgeProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const Badge = ({ label, onClick, className }: BadgeProps) => {
  const badgeClasses = cn("cursor-default", onClick !== undefined && onClick !== null && "cursor-pointer", className);

  return (
    <BadgeBase onClick={onClick} className={badgeClasses}>
      {label}
    </BadgeBase>
  );
};
