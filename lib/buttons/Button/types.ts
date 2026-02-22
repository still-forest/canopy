import type { ReactElement } from "react";

export type BaseButtonProps = {
  className?: string;
  label?: string;
  icon?: ReactElement;
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  knockout?: boolean;
  rounded?: boolean;
  fit?: boolean;
  asIcon?: boolean;
};

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "muted"
  | "ghost"
  | "link"
  | "info"
  | "success"
  | "warning"
  | "danger";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
