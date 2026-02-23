import { mergeProps } from "@base-ui/react";
import { ChevronsUpDown } from "lucide-react";
import type { ReactNode } from "react";
import { Popover } from "@/components/Popover";

interface DesktopSelectPickerProps {
  selectedLabel: string | ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  id?: string;
}

export const DesktopSelectPicker = ({ selectedLabel, open, setOpen, children, id }: DesktopSelectPickerProps) => {
  return (
    <Popover onOpenChange={setOpen} open={open}>
      <Popover.Trigger
        render={(props) => (
          <button
            type="button"
            {...mergeProps(props, {
              "aria-expanded": open,
              className: "btn btn-input desktop-select-picker-trigger",
              id,
              role: "combobox",
            })}
          >
            {selectedLabel}
            <ChevronsUpDown />
          </button>
        )}
      />
      <Popover.Content className="desktop-select-picker-content">{children}</Popover.Content>
    </Popover>
  );
};
