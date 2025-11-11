import { ChevronsUpDown } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/utils";

interface DesktopSelectPickerProps {
  selectedLabel: string | ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  triggerId?: string;
  triggerClassName?: string;
  dropdownClassName?: string;
}

export const DesktopSelectPicker = ({
  selectedLabel,
  open,
  setOpen,
  children,
  triggerId,
  triggerClassName,
  dropdownClassName,
}: DesktopSelectPickerProps) => {
  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className={cn("w-full justify-between font-normal", triggerClassName)}
          id={triggerId}
          role="combobox"
          variant="outline"
        >
          {selectedLabel}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-fit p-0", dropdownClassName)}>{children}</PopoverContent>
    </Popover>
  );
};
