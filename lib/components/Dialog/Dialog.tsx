import { mergeProps } from "@base-ui/react";
import type { ComponentProps, HTMLProps } from "react";
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

const Trigger = ({ children, render, ...props }: ComponentProps<typeof DialogTrigger> & ButtonProps) => {
  const defaultRender = (triggerProps: HTMLProps<HTMLButtonElement>) => {
    return <Button {...mergeProps(props, triggerProps)}>{children}</Button>;
  };

  return <DialogTrigger render={render || defaultRender} {...props} />;
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
