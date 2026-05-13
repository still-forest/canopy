import { mergeProps } from "@base-ui/react";
import type { ReactNode } from "react";
import { Button } from "@/buttons";
import { Drawer } from "@/presentation/Drawer";
import "./SelectPicker.css";
import { cn } from "@/utils/cn";

interface MobileSelectPickerProps {
  selectedLabel: string | ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  id?: string;
  enabled?: boolean;
  className?: string;
}

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
    <Drawer onOpenChange={setOpen} open={open}>
      <Drawer.Trigger
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
      <Drawer.Content>{children}</Drawer.Content>
    </Drawer>
  );
};
