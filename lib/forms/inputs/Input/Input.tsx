import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";
import "./Input.css";

export interface InputProps extends Omit<ComponentProps<"input">, "size"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Input = ({ id, name, className, size = "md", ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "input",
        {
          "input--xs": size === "xs",
          "input--sm": size === "sm",
          "input--lg": size === "lg",
          "input--xl": size === "xl",
        },
        className,
      )}
      data-slot="input"
      id={id || name}
      name={name}
      {...props}
    />
  );
};

export { Input };
