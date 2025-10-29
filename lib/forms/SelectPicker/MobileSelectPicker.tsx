import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface MobileSelectPickerProps {
  selectedLabel: string | ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  triggerId?: string;
}

export const MobileSelectPicker = ({ selectedLabel, open, setOpen, children, triggerId }: MobileSelectPickerProps) => {
  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <DrawerTrigger asChild>
        <Button className="w-full justify-start" id={triggerId} variant="outline">
          {selectedLabel}
        </Button>
      </DrawerTrigger>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
};
