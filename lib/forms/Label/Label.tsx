import type { ComponentProps } from "react";
import { Label as BaseLabel } from "@/components/ui/label";

import { cn } from "@/utils";

export interface LabelProps extends ComponentProps<"label"> {
  htmlFor?: string;
  value?: string;
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Label = ({ htmlFor, value, children, size = "md", className = "", ...props }: LabelProps) => (
  <BaseLabel
    className={cn(
      "font-display font-normal text-foreground",
      {
        "text-xs": size === "xs",
        "text-sm": size === "sm",
        "text-base": size === "md",
        "text-lg": size === "lg",
        "text-xl": size === "xl",
      },
      className,
    )}
    htmlFor={htmlFor}
    {...props}
  >
    {value || children}
  </BaseLabel>
);

export { Label };
