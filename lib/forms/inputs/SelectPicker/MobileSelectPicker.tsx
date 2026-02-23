import { mergeProps } from "@base-ui/react";
import { Button } from "@still-forest/canopy";
import type { ReactNode } from "react";
import { Sheet } from "@/components/Sheet";
import "./SelectPicker.css";

const CloseButton = () => {
  return (
    <button className="mobile-select-picker-close-button" type="button">
      <div data-slot="sheet-close-control" />
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
      <Sheet.Trigger
        render={(props) => (
          <Button
            {...mergeProps(props, {
              className: "mobile-select-picker-trigger",
              id,
              outline: true,
            })}
          >
            {selectedLabel}
          </Button>
        )}
      />
      <Sheet.Content className="mobile-select-picker-content" showCloseButton={false}>
        <Sheet.Close render={<CloseButton />}>
          <span className="sr-only">Close</span>
        </Sheet.Close>
        {children}
      </Sheet.Content>
    </Sheet>
  );
};
