import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-3 py-2 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        info: "bg-info-foreground text-info border-info [&>svg]:text-current *:data-[slot=alert-description]:text-info-600",
        success:
          "bg-success-foreground text-success border-success [&>svg]:text-current *:data-[slot=alert-description]:text-success-600",
        warning:
          "bg-warning-foreground text-warning border-warning [&>svg]:text-current *:data-[slot=alert-description]:text-warning/80",
        error:
          "bg-destructive-foreground text-destructive border-destructive [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/80",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

function Alert({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return <div data-slot="alert" role="alert" className={cn(alertVariants({ variant }), className)} {...props} />;
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
