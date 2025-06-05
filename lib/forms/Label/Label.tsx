import type { ComponentProps } from "react";
import { Label as BaseLabel } from "@/components/ui/label";

import { cn } from "@/utils";

export interface LabelProps extends ComponentProps<"label"> {
  htmlFor?: string;
  value?: string;
  children?: React.ReactNode;
  className?: string;
}

const Label = ({ htmlFor, value, children, className = "", ...props }: LabelProps) => (
  <BaseLabel
    className={cn("font-display text-foreground text-base font-normal", className)}
    htmlFor={htmlFor}
    {...props}
  >
    {value || children}
  </BaseLabel>
);

export { Label };
