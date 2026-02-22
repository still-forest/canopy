import { SimpleTooltip } from "@/components";
import { cn } from "@/utils/cn";
import "./Badge.css";
import type { ButtonSize, ButtonVariant } from "@/buttons";

export interface BadgeProps {
  variant?: ButtonVariant;
  outline?: boolean;
  size?: ButtonSize;
  as?: "button" | "div";
  onClick?: () => void;
  label?: string;
  tooltip?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Badge = ({
  children,
  label,
  variant,
  outline = false,
  size,
  as = "div",
  className = "",
  tooltip,
  ...props
}: BadgeProps) => {
  if (!(label || children) || (label && children)) {
    throw new Error("Badge must have either a label or children, but not both");
  }

  const Component = as === "button" ? "button" : "div";
  const classNames = cn(
    "badge",
    {
      "badge-primary": variant === "primary",
      "badge-secondary": variant === "secondary",
      "badge-muted": variant === "muted",
      "badge-ghost": variant === "ghost" || variant === "link",
      "badge-success": variant === "success",
      "badge-info": variant === "info",
      "badge-warning": variant === "warning",
      "badge-danger": variant === "danger",
    },
    {
      "badge--outline": outline,
      "badge--xs": size === "xs",
      "badge--sm": size === "sm",
      "badge--md": size === "md",
      "badge--lg": size === "lg",
      "badge--xl": size === "xl",
    },
    className,
  );

  const badge = (
    <Component className={classNames} type={as === "button" ? "button" : undefined} {...props}>
      {label}
      {children}
    </Component>
  );

  if (tooltip) {
    return <SimpleTooltip content={tooltip}>{badge}</SimpleTooltip>;
  }

  return badge;
};
