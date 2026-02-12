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

const Dialog = (props: ComponentProps<typeof BaseDialog>) => {
  return <BaseDialog {...props} />;
};

Dialog.Close = DialogClose;
Dialog.Content = DialogContent;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Header = DialogHeader;
Dialog.Overlay = DialogOverlay;
Dialog.Portal = DialogPortal;
Dialog.Title = DialogTitle;
Dialog.Trigger = DialogTrigger;
export { Dialog };
