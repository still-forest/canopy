import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Modal = ({ trigger, children, title, description, open, onOpenChange }: Props) => {
  const isControlled = open !== undefined;
  const [openState, setOpenState] = useState<boolean>(isControlled ? open : false);

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
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
};
