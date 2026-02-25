import type { ComponentProps } from "react";
import "./Button.css";
import type { BaseButtonProps } from "./types";
import { buildButtonClassNames } from "./utils";

export type ButtonProps = BaseButtonProps & ComponentProps<"button">;

export const Button = ({
  className,
  variant = "primary",
  size,
  outline = false,
  knockout = false,
  rounded = false,
  fit = false,
  asIcon = false,
  icon,
  label,
  type = "button",
  children,
  ...props
}: ButtonProps) => {
  if (label && children) {
    console.warn("[Button] Only one of label and children is expected, but both were provided");
  }
  if (!label && !children && !icon) {
    console.warn("[Button] One of label, children, or icon is expected, but none were provided");
  }
  if (asIcon && !icon) {
    console.warn("[Button] An icon is expected when asIcon is true, but none was provided");
  }
  return (
    <button
      className={buildButtonClassNames({ variant, size, outline, knockout, rounded, fit, asIcon, className })}
      type={type}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {!asIcon && <span className="btn-label">{label || children}</span>}
    </button>
  );
};
