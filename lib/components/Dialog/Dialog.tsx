import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import type * as React from "react";
import { Button } from "@/buttons";
import { cn } from "@/utils";
import "./Dialog.css";

const Dialog = ({ ...props }: DialogPrimitive.Root.Props) => {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
};

const DialogTrigger = ({ ...props }: DialogPrimitive.Trigger.Props) => {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
};

const DialogPortal = ({ ...props }: DialogPrimitive.Portal.Props) => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
};

const DialogClose = ({ ...props }: DialogPrimitive.Close.Props) => {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
};

const DialogOverlay = ({ className, ...props }: DialogPrimitive.Backdrop.Props) => {
  return <DialogPrimitive.Backdrop className={cn("dialog-overlay", className)} data-slot="dialog-overlay" {...props} />;
};

const DialogContent = ({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean;
}) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup className={cn("dialog-content", className)} data-slot="dialog-content" {...props}>
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close data-slot="dialog-close" render={<Button className="dialog-close" variant="ghost" />}>
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
};

const DialogHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cn("dialog-header", className)} data-slot="dialog-header" {...props} />;
};

const DialogFooter = ({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
}) => {
  return (
    <div className={cn("dialog-footer", className)} data-slot="dialog-footer" {...props}>
      {children}
      {showCloseButton && <DialogPrimitive.Close render={<Button outline />}>Close</DialogPrimitive.Close>}
    </div>
  );
};

const DialogTitle = ({ className, ...props }: DialogPrimitive.Title.Props) => {
  return <DialogPrimitive.Title className={cn("dialog-title", className)} data-slot="dialog-title" {...props} />;
};

const DialogDescription = ({ className, ...props }: DialogPrimitive.Description.Props) => {
  return (
    <DialogPrimitive.Description
      className={cn("dialog-description", className)}
      data-slot="dialog-description"
      {...props}
    />
  );
};

Dialog.Close = DialogClose;
Dialog.Content = DialogContent;
Dialog.Description = DialogDescription;
Dialog.Header = DialogHeader;
Dialog.Footer = DialogFooter;
Dialog.Overlay = DialogOverlay;
Dialog.Portal = DialogPortal;
Dialog.Title = DialogTitle;
Dialog.Trigger = DialogTrigger;

export { Dialog };
