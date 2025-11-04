import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/utils";

interface MobileSelectPickerProps {
  selectedLabel: string | ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  triggerId?: string;
  className?: string;
}

export const MobileSelectPicker = ({
  selectedLabel,
  open,
  setOpen,
  children,
  triggerId,
  className,
}: MobileSelectPickerProps) => {
  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <DrawerTrigger asChild>
        <Button className={cn("w-full justify-start", className)} id={triggerId} variant="outline">
          {selectedLabel}
        </Button>
      </DrawerTrigger>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
};
