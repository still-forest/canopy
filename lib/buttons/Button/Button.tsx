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
    throw new Error("Both label and children should not be provided");
  }

  if (!label && !children && !icon) {
    throw new Error("Either label or children or icon must be provided");
  }

  return (
    <button
      className={buildButtonClassNames({ variant, size, outline, knockout, rounded, fit, asIcon, className })}
      type={type}
      {...props}
    >
      {icon}
      {!asIcon && (label || children)}
    </button>
  );
};
