import type React from "react";
import { Button as BaseButton } from "@/components/ui/button";
import { Flex } from "@/layout";

export type BaseButtonVariant = "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
export type BaseButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps extends React.ComponentProps<"button"> {
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
    // deprecated
    | "subtle";
  size?: "default" | "xs" | "sm" | "md" | "lg";
  icon?: React.ReactElement;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  asChild?: boolean;
}

export const Button = ({
  children,
  onClick,
  variant = "default",
  size = "default",
  icon,
  disabled = false,
  className = "",
  type = "button",
  asChild = false,
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
    if (size === "md") {
      return "default";
    }

    if (size === "xs") {
      return "sm";
    }

    return size;
  };

  return (
    <BaseButton
      variant={getBaseVariant()}
      onClick={onClick}
      disabled={disabled}
      size={getBaseSize()}
      className={className}
      type={type}
      asChild={asChild}
      {...rest}
    >
      {icon && children ? (
        <Flex align="center" gap="2">
          {icon}
          {children}
        </Flex>
      ) : (
        icon || children
      )}
    </BaseButton>
  );
};
