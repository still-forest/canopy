import { cloneElement, type HTMLProps, type ReactElement, type ReactNode, useEffect, useState } from "react";
import { Dialog } from "@/components/Dialog";

interface Props {
  children: ReactNode;
  trigger?: ReactElement;
  title?: string;
  description?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  ariaDescription?: string;
}

export const Modal = ({ trigger, children, title, description, open, onOpenChange, ariaDescription }: Props) => {
  const isControlled = open !== undefined;
  const [openState, setOpenState] = useState<boolean>(isControlled ? open : false);

  useEffect(() => {
    if (!ariaDescription && !description) {
      console.warn("Warning: Missing aria description. Please provide either an ariaDescription or description prop.");
    }
  }, [ariaDescription, description]);

  useEffect(() => {
    if (isControlled) {
      setOpenState(open);
    }
  }, [open, isControlled]);

  if (!trigger && !isControlled) {
    throw new Error("Trigger must be provided if modal state is not controlled through open, onOpenChange props.");
  }

  const handleOpenChange = (open: boolean) => {
    setOpenState(open);
    onOpenChange?.(open);
  };

  return (
    <Dialog onOpenChange={handleOpenChange} open={openState}>
      {trigger && (
        <Dialog.Trigger render={({ ref, ...props }: HTMLProps<unknown>) => cloneElement(trigger, { ...props })} />
      )}
      <Dialog.Content>
        {(title || description) && (
          <Dialog.Header>
            {title && <Dialog.Title>{title}</Dialog.Title>}
            {description && <Dialog.Description>{description}</Dialog.Description>}
          </Dialog.Header>
        )}
        {ariaDescription && !description && (
          <Dialog.Description className="sr-only">{ariaDescription}</Dialog.Description>
        )}
        {children}
      </Dialog.Content>
    </Dialog>
  );
};
