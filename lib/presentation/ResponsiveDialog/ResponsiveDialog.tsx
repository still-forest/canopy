import { type ReactElement, type ReactNode, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Dialog, type DialogContentProps, Drawer } from "@/presentation";

export interface ResponsiveDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  size?: DialogContentProps["size"];
  trigger?: ReactElement;
}

export const ResponsiveDialog = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  size = "default",
  trigger,
}: ResponsiveDialogProps) => {
  const isMobile = useIsMobile();
  // Own the open state so it survives switching between Drawer and Dialog across the breakpoint
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : uncontrolledOpen;
  const handleOpenChange = (nextOpen: boolean) => {
    if (!isControlled) setUncontrolledOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  if (isMobile) {
    return (
      <Drawer onOpenChange={handleOpenChange} open={isOpen}>
        {trigger && <Drawer.Trigger render={trigger} />}
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>{title}</Drawer.Title>
            {description && <Drawer.Description>{description}</Drawer.Description>}
          </Drawer.Header>
          <Drawer.Body>{children}</Drawer.Body>
          {footer && <Drawer.Footer>{footer}</Drawer.Footer>}
        </Drawer.Content>
      </Drawer>
    );
  }

  return (
    <Dialog onOpenChange={handleOpenChange} open={isOpen}>
      {trigger && <Dialog.Trigger render={trigger} />}
      <Dialog.Content size={size}>
        <Dialog.Header>
          <Dialog.Title>{title}</Dialog.Title>
          {description && <Dialog.Description>{description}</Dialog.Description>}
        </Dialog.Header>
        <Dialog.Body>{children}</Dialog.Body>
        {footer && <Dialog.Footer>{footer}</Dialog.Footer>}
      </Dialog.Content>
    </Dialog>
  );
};
