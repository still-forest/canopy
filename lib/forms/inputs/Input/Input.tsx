import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";
import "./Input.css";

interface InputProps extends Omit<ComponentProps<"input">, "size"> {
  size?: "sm" | "md" | "lg";
}

const Input = ({ id, name, className, size = "md", ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "input",
        {
          "input--sm": size === "sm",
          "input--lg": size === "lg",
        },
        className,
      )}
      id={id || name}
      name={name}
      {...props}
    />
  );
};

export { Input };
