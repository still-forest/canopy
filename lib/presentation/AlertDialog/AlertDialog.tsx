import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import type { ComponentProps } from "react";
import { Button } from "@/buttons";
import { Dialog } from "@/presentation/Dialog";
import { cn } from "@/utils/cn";

const AlertDialog = (props: AlertDialogPrimitive.Root.Props) => {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
};

const AlertDialogTrigger = (props: ComponentProps<typeof Dialog.Trigger>) => {
  return <Dialog.Trigger data-slot="alert-dialog-trigger" {...props} />;
};

const AlertDialogPortal = (props: ComponentProps<typeof Dialog.Portal>) => {
  return <Dialog.Portal data-slot="alert-dialog-portal" {...props} />;
};

const AlertDialogOverlay = (props: ComponentProps<typeof Dialog.Overlay>) => {
  return <Dialog.Overlay data-slot="alert-dialog-overlay" {...props} />;
};

export interface AlertDialogContentProps
  extends Omit<ComponentProps<typeof Dialog.Content>, "size" | "showCloseButton"> {
  size?: "default" | "sm";
}

const AlertDialogContent = ({ className, size = "default", ...props }: AlertDialogContentProps) => {
  return (
    <Dialog.Content
      className={cn(
        "group/alert-dialog-content data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-lg",
        className,
      )}
      data-size={size}
      data-slot="alert-dialog-content"
      showCloseButton={false}
      {...props}
    />
  );
};

const AlertDialogHeader = ({ className, ...props }: ComponentProps<typeof Dialog.Header>) => {
  return (
    <Dialog.Header
      className={cn(
        "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className,
      )}
      data-slot="alert-dialog-header"
      {...props}
    />
  );
};

const AlertDialogFooter = ({ className, ...props }: Omit<ComponentProps<typeof Dialog.Footer>, "showCloseButton">) => {
  return (
    <Dialog.Footer
      className={cn(
        "group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2",
        className,
      )}
      data-slot="alert-dialog-footer"
      {...props}
    />
  );
};

const AlertDialogMedia = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "mb-2 inline-flex size-16 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8",
        className,
      )}
      data-slot="alert-dialog-media"
      {...props}
    />
  );
};

const AlertDialogTitle = ({ className, ...props }: ComponentProps<typeof Dialog.Title>) => {
  return (
    <Dialog.Title
      className={cn(
        "sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className,
      )}
      data-slot="alert-dialog-title"
      {...props}
    />
  );
};

const AlertDialogDescription = (props: ComponentProps<typeof Dialog.Description>) => {
  return <Dialog.Description data-slot="alert-dialog-description" {...props} />;
};

const AlertDialogAction = (props: ComponentProps<typeof Button>) => {
  return <Dialog.Close data-slot="alert-dialog-action" render={<Button {...props} />} />;
};

const AlertDialogCancel = ({
  variant,
  outline = true,
  size,
  ...props
}: ComponentProps<typeof Dialog.Close> & Pick<ComponentProps<typeof Button>, "variant" | "size" | "outline">) => {
  return (
    <Dialog.Close
      data-slot="alert-dialog-cancel"
      render={<Button outline={outline} size={size} variant={variant} />}
      {...props}
    />
  );
};

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
