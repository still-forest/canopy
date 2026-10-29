import "./Dialog.css";
import type { ComponentProps } from "react";
import {
  DialogClose,
  DialogContent as DialogContentPrimitive,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  Dialog as DialogPrimitive,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/utils/cn";

const Dialog = (props: ComponentProps<typeof DialogPrimitive>) => {
  return <DialogPrimitive {...props} />;
};

export interface DialogContentProps extends ComponentProps<typeof DialogContentPrimitive> {
  className?: string;
  size?: "default" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";
}

const DialogContent = ({ className, size = "default", ...props }: DialogContentProps) => {
  return (
    <DialogContentPrimitive
      className={cn(
        size === "lg" && "sm:max-w-lg",
        size === "xl" && "sm:max-w-xl",
        size === "2xl" && "sm:max-w-2xl",
        size === "3xl" && "sm:max-w-3xl",
        size === "4xl" && "sm:max-w-4xl",
        size === "full" && "sm:max-w-[calc(100%-2rem)]",
        className,
      )}
      {...props}
    />
  );
};

const DialogBody = (props: ComponentProps<"div">) => {
  return <div data-slot="dialog-body" {...props} />;
};

Dialog.Trigger = DialogTrigger;
Dialog.Portal = DialogPortal;
Dialog.Close = DialogClose;
Dialog.Overlay = DialogOverlay;
Dialog.Content = DialogContent;
Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;

export { Dialog };
