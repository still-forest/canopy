import { mergeProps } from "@base-ui/react";
import { ChevronsUpDown } from "lucide-react";
import type { ReactNode } from "react";
import { Button, type ButtonProps } from "@/buttons";
import { Popover } from "@/components/Popover";
import { cn } from "@/utils/cn";

interface DesktopSelectPickerProps {
  selectedLabel: string | ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  id?: string;
  triggerClassName?: string;
  dropdownClassName?: string;
  triggerProps?: Partial<ButtonProps>;
}

export const DesktopSelectPicker = ({
  selectedLabel,
  open,
  setOpen,
  children,
  id,
  triggerClassName,
  dropdownClassName,
  triggerProps,
}: DesktopSelectPickerProps) => {
  return (
    <Popover onOpenChange={setOpen} open={open}>
      <Popover.Trigger
        render={(props) => (
          <Button
            {...mergeProps(props, {
              "aria-expanded": open,
              variant: "input",
              className: cn("desktop-select-picker-trigger", triggerClassName),
              id,
              role: "combobox",
              ...triggerProps,
            })}
          >
            {selectedLabel}
            <ChevronsUpDown />
          </Button>
        )}
      />
      <Popover.Content className={cn("desktop-select-picker-content", dropdownClassName)}>{children}</Popover.Content>
    </Popover>
  );
};
