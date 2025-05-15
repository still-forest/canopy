import { Badge as BadgeBase } from "@/components/ui/badge";

interface BadgeProps {
  label: string;
  onClick?: () => void;
}

export const Badge = ({ label, onClick }: BadgeProps) => {
  if (!onClick) {
    return <BadgeBase>{label}</BadgeBase>;
  }

  return (
    <button type="button" onClick={onClick}>
      <BadgeBase>{label}</BadgeBase>
    </button>
  );
};
