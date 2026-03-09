import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import type * as React from "react";
import { Button } from "@/buttons";
import { cn } from "@/utils";
import "./AlertDialog.css";

function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({ ...props }: AlertDialogPrimitive.Trigger.Props) {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />;
}

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
  return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />;
}

function AlertDialogOverlay({ className, ...props }: AlertDialogPrimitive.Backdrop.Props) {
  return (
    <AlertDialogPrimitive.Backdrop
      className={cn("alert-dialog-overlay", className)}
      data-slot="alert-dialog-overlay"
      {...props}
    />
  );
}

function AlertDialogContent({
  className,
  size = "default",
  ...props
}: AlertDialogPrimitive.Popup.Props & {
  size?: "default" | "sm";
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Popup
        className={cn("alert-dialog-content", className)}
        data-size={size}
        data-slot="alert-dialog-content"
        {...props}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("alert-dialog-header", className)} data-slot="alert-dialog-header" {...props} />;
}

function AlertDialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("alert-dialog-footer", className)} data-slot="alert-dialog-footer" {...props} />;
}

function AlertDialogMedia({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("alert-dialog-media", className)} data-slot="alert-dialog-media" {...props} />;
}

function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title className={cn("dialog-title", className)} data-slot="alert-dialog-title" {...props} />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      className={cn("dialog-description", className)}
      data-slot="alert-dialog-description"
      {...props}
    />
  );
}

function AlertDialogAction({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <AlertDialogPrimitive.Close
      className={cn(className)}
      data-slot="alert-dialog-action"
      render={<Button {...props} />}
    />
  );
}

function AlertDialogCancel({
  className,
  variant,
  outline = true,
  size,
  ...props
}: AlertDialogPrimitive.Close.Props & Pick<React.ComponentProps<typeof Button>, "variant" | "size" | "outline">) {
  return (
    <AlertDialogPrimitive.Close
      className={cn(className)}
      data-slot="alert-dialog-cancel"
      render={<Button outline={outline} size={size} variant={variant} />}
      {...props}
    />
  );
}

AlertDialog.Action = AlertDialogAction;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Footer = AlertDialogFooter;
AlertDialog.Header = AlertDialogHeader;
AlertDialog.Media = AlertDialogMedia;
AlertDialog.Overlay = AlertDialogOverlay;
AlertDialog.Portal = AlertDialogPortal;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Trigger = AlertDialogTrigger;

export { AlertDialog };
