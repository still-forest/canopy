import { Badge as BadgeBase } from "@/components/ui/badge";
import type { TailwindColor } from "@/types/color";
import type { BadgeVariant } from "@/types/variants";
import { cn } from "@/utils";
import { badgeColorVariants } from "./colorVariants";

export interface BadgeProps extends React.ComponentProps<typeof BadgeBase> {
  variant?: BadgeVariant;
  color?: TailwindColor;
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Badge = ({
  label,
  onClick,
  className,
  variant = "default",
  color,
  children,
  render,
  ...props
}: BadgeProps) => {
  const content = label || children;
  if (!content && !render) {
    throw new Error("Badge must have either a label or children, or a render prop");
  }

  if (color && !(variant === "default" || variant === "outline")) {
    throw new Error(
      `Color ${color} is not allowed for variant '${variant}'. Only default and outline variants support color.`,
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
    className,
  );

  return (
    <BadgeBase className={badgeClasses} onClick={onClick} render={render} variant={variant} {...props}>
      {content}
    </BadgeBase>
  );
};
