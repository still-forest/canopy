import { mergeProps } from "@base-ui/react";
import type { ReactNode } from "react";
import { Button, type ButtonProps } from "@/buttons";
import { Sheet } from "@/presentation/Sheet";
import "./SelectPicker.css";
import { cn } from "@/utils/cn";

const CloseButton = (props: ButtonProps) => {
  return (
    <button className="mobile-select-picker-close-button" type="button" {...props}>
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
  enabled?: boolean;
  className?: string;
}

// TODO: replace with drawer
export const MobileSelectPicker = ({
  selectedLabel,
  open,
  setOpen,
  children,
  id,
  enabled = true,
  className,
}: MobileSelectPickerProps) => {
  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <Sheet.Trigger
        render={(props) => (
          <Button
            {...mergeProps(props, {
              className: cn("mobile-select-picker-trigger", className),
              id,
              outline: true,
              disabled: !enabled,
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
