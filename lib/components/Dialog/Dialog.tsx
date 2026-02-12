import type { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import type { ComponentProps } from "react";
import {
  Dialog as BaseDialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, type ButtonProps } from "@/forms";

const Dialog = (props: ComponentProps<typeof BaseDialog>) => {
  return <BaseDialog {...props} />;
};

const Trigger = ({ children, render, ...props }: DialogPrimitive.Trigger.Props & ButtonProps) => {
  return <DialogTrigger render={render ?? <Button {...props}>{children}</Button>} />;
};

Dialog.Close = DialogClose;
Dialog.Content = DialogContent;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Header = DialogHeader;
Dialog.Overlay = DialogOverlay;
Dialog.Portal = DialogPortal;
Dialog.Title = DialogTitle;
Dialog.Trigger = Trigger;
export { Dialog };
