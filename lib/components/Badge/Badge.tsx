import { Badge as BadgeBase } from "@/components/ui/badge";
import type { TailwindColor } from "@/types/color";
import { cn } from "@/utils";
import { badgeColorVariants } from "./colorVariants";

interface BadgeProps {
  variant?: "default" | "secondary" | "destructive" | "outline";
  color?: TailwindColor;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const Badge = ({ label, onClick, className, variant = "default", color }: BadgeProps) => {
  if (color && !(variant === "default" || variant === "outline")) {
    throw new Error(
      `Color ${color} is not allowed for variant '${variant}'. Only default and outline variants support color.`
    );
  }

  const badgeClasses = cn(
    "cursor-default",
    !!onClick && "cursor-pointer",
    badgeColorVariants({ color, variant }),
    {
      "text-white": color === "black" && variant !== "outline",
      "text-black": color === "white" && variant !== "outline",
    },
    {
      "border-1 border-black": color === "white",
    },
    className
  );

  return (
    <BadgeBase onClick={onClick} className={badgeClasses} variant={variant}>
      {label}
    </BadgeBase>
  );
};
