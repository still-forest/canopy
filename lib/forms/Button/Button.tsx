import type React from "react";
import { Button as BaseButton } from "@/components/ui/button";
import { Flex } from "@/layout";
import { cn } from "@/utils";

export type BaseButtonVariant = "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" | "unstyled";
export type BaseButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "icon" | "unstyled";

export interface ButtonProps extends React.ComponentProps<"button"> {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | "unstyled"
    // deprecated
    | "subtle";
  size?: "default" | "xs" | "sm" | "md" | "lg" | "xl";
  icon?: React.ReactElement;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fit?: boolean;
  full?: boolean;
  asChild?: boolean;
}

export const Button = ({
  label,
  children,
  onClick,
  variant = "default",
  size = "default",
  icon,
  disabled = false,
  className = "",
  type = "button",
  asChild = false,
  full = false,
  fit = false,
  ...rest
}: ButtonProps) => {
  const getBaseVariant = (): BaseButtonVariant => {
    if (variant === "primary") {
      return "default";
    }
    if (variant === "subtle") {
      return "secondary";
    }
    return variant;
  };

  const getBaseSize = (): BaseButtonSize => {
    if (variant === "unstyled") {
      return "unstyled";
    }

    if (size === "default") {
      return "md";
    }

    return size;
  };

  return (
    <BaseButton
      asChild={asChild}
      className={cn(className, fit && "w-fit", full && "w-full", variant === "unstyled" && "justify-start")}
      disabled={disabled}
      onClick={onClick}
      size={getBaseSize()}
      type={type}
      variant={getBaseVariant()}
      {...rest}
    >
      {icon && children ? (
        <Flex align="center" gap="2">
          <span key="icon">{icon}</span>
          <span key="children">{children}</span>
        </Flex>
      ) : icon && label ? (
        <Flex align="center" gap="2">
          <span key="icon">{icon}</span>
          <span key="label">{label}</span>
        </Flex>
      ) : icon ? (
        <span key="icon">{icon}</span>
      ) : (
        children || label
      )}
    </BaseButton>
  );
};
