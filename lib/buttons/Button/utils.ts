import { cn } from "@/utils/cn";
import "./Button.css";
import type { BaseButtonProps } from "./types";

export const buildButtonClassNames = ({
  variant,
  size,
  outline,
  knockout,
  rounded,
  fit,
  asIcon,
  className,
}: BaseButtonProps) => {
  return cn(
    "btn",
    {
      "btn-primary": variant === "primary",
      "btn-secondary": variant === "secondary",
      "btn-muted": variant === "muted",
      "btn-ghost": variant === "ghost",
      "btn-link": variant === "link",
      "btn-info": variant === "info",
      "btn-success": variant === "success",
      "btn-warning": variant === "warning",
      "btn-danger": variant === "danger",
    },
    {
      "btn--xs": size === "xs",
      "btn--sm": size === "sm",
      "btn--md": size === "md",
      "btn--lg": size === "lg",
      "btn--xl": size === "xl",
      "btn--outline": outline,
      "btn--knockout": knockout,
      "btn--rounded": rounded,
      "btn--fit": fit,
      "btn--icon": asIcon,
    },
    className,
  );
};
