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
  asIcon?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fit?: boolean;
  full?: boolean;
  asChild?: boolean;
  rounded?: boolean;
}

export const Button = ({
  label,
  children,
  onClick,
  variant = "default",
  size = "default",
  icon,
  asIcon = false,
  disabled = false,
  className = "",
  type = "button",
  asChild = false,
  full = false,
  fit = false,
  rounded = false,
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
    if (asIcon) {
      return "icon";
    }

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
      className={cn(
        fit && "w-fit",
        full && "w-full",
        variant === "unstyled" && "justify-start",
        asIcon && size === "xs" && "size-6 p-0 has-[>svg]:p-0",
        asIcon && size === "sm" && "size-8  p-0 has-[>svg]:p-0",
        asIcon && size === "md" && "size-10 p-0 has-[>svg]:p-0",
        asIcon && size === "default" && "size-10  p-0 has-[>svg]:p-0",
        asIcon && size === "lg" && "size-12 p-0  has-[>svg]:p-0",
        asIcon && size === "xl" && "size-14 p-0 has-[>svg]:p-0",
        rounded && "rounded-full",
        className,
      )}
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
