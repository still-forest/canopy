import type { ComponentProps } from "react";
import {
  SheetClose,
  SheetContent as SheetContentPrimitive,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  Sheet as SheetPrimitive,
  SheetTitle as SheetTitlePrimitive,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/utils/cn";

const Sheet = ({ ...props }: ComponentProps<typeof SheetPrimitive>) => {
  return <SheetPrimitive {...props} />;
};

interface SheetContentProps extends ComponentProps<typeof SheetContentPrimitive> {
  className?: string;
  size?: "default" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";
}

const SheetContent = ({ className, size, ...props }: SheetContentProps) => {
  return (
    <SheetContentPrimitive
      className={cn(
        size === "lg" && "data-[side=left]:sm:min-w-lg data-[side=right]:sm:min-w-lg",
        size === "xl" && "data-[side=left]:sm:min-w-xl data-[side=right]:sm:min-w-xl",
        size === "2xl" && "data-[side=left]:sm:min-w-2xl data-[side=right]:sm:min-w-2xl",
        size === "3xl" && "data-[side=left]:sm:min-w-3xl data-[side=right]:sm:min-w-3xl",
        size === "4xl" && "data-[side=left]:sm:min-w-4xl data-[side=right]:sm:min-w-4xl",
        size === "full" && "data-[side=left]:sm:min-w-[calc(100%-2rem)] data-[side=right]:sm:min-w-[calc(100%-2rem)]",
        className,
      )}
      {...props}
    />
  );
};

const SheetTitle = ({ className, ...props }: ComponentProps<typeof SheetTitlePrimitive>) => {
  return <SheetTitlePrimitive className={cn("text-xl font-medium", className)} {...props} />;
};

const SheetBody = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("flex-1 p-4", className)} data-slot="sheet-body" {...props} />;
};

Sheet.Trigger = SheetTrigger;
Sheet.Close = SheetClose;
Sheet.Content = SheetContent;
Sheet.Header = SheetHeader;
Sheet.Footer = SheetFooter;
Sheet.Body = SheetBody;
Sheet.Title = SheetTitle;
Sheet.Description = SheetDescription;

export { Sheet };
