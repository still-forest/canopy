import { mergeProps } from "@base-ui/react";
import type { ReactNode } from "react";
import { Button, type ButtonProps } from "@/buttons/Button/Button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const CloseButton = (props: ButtonProps) => {
  return (
    <button className="w-full rounded-none py-3" {...props}>
      <div className="w-24 h-2 bg-muted rounded-full mx-auto" data-slot="sheet-close-control" />
      <span className="sr-only">Close</span>
    </button>
  );
};

interface MobileSelectPickerProps {
  selectedLabel: string | ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  id?: string;
}

export const MobileSelectPicker = ({ selectedLabel, open, setOpen, children, id }: MobileSelectPickerProps) => {
  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger
        render={(props) => (
          <Button
            {...mergeProps(props, {
              className: "w-full justify-start",
              id,
              outline: true,
            })}
          >
            {selectedLabel}
          </Button>
        )}
      />
      <SheetContent className="gap-0!" showCloseButton={false}>
        <SheetClose render={<CloseButton />}>
          <span className="sr-only">Close</span>
        </SheetClose>
        {children}
      </SheetContent>
    </Sheet>
  );
};
