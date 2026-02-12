import { mergeProps } from "@base-ui/react";
import { ChevronsUpDown } from "lucide-react";
import type { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/forms/Button/Button";
import { cn } from "@/utils/cn";

interface DesktopSelectPickerProps {
  selectedLabel: string | ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  id?: string;
  dropdownClassName?: string;
}

export const DesktopSelectPicker = ({
  selectedLabel,
  open,
  setOpen,
  children,
  id,
  dropdownClassName,
}: DesktopSelectPickerProps) => {
  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger
        render={(props) => (
          <Button
            {...mergeProps(props, {
              "aria-expanded": open,
              className: "w-full justify-between font-normal",
              id,
              role: "combobox",
              variant: "outline",
            })}
          >
            {selectedLabel}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        )}
      />
      <PopoverContent className={cn("p-0!", dropdownClassName)}>{children}</PopoverContent>
    </Popover>
  );
};
