import { cn } from "@/utils/cn";
import "./ButtonGroup.css";
import type { ComponentProps, ReactNode } from "react";

export interface ButtonGroupProps extends ComponentProps<"fieldset"> {
  children: ReactNode;
}

export const ButtonGroup = ({ children, className, ...props }: ButtonGroupProps) => {
  return (
    <fieldset className={cn("button-group", className)} {...props}>
      {children}
    </fieldset>
  );
};
