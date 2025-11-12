import { ChevronsUpDown } from "lucide-react";
import type { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { ButtonProps } from "@/forms/Button/Button";
import { Button } from "@/forms/Button/Button";
import { cn } from "@/utils";

interface DesktopSelectPickerProps {
  selectedLabel: string | ReactNode;
  triggerComponent?: React.ComponentType<ButtonProps>;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  triggerId?: string;
  triggerClassName?: string;
  dropdownClassName?: string;
}

export const DesktopSelectPicker = ({
  selectedLabel,
  triggerComponent: TriggerComponent = Button,
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
        <TriggerComponent
          aria-expanded={open}
          className={cn("w-full justify-between font-normal", triggerClassName)}
          id={triggerId}
          role="combobox"
          variant="outline"
        >
          {selectedLabel}
          <ChevronsUpDown className="opacity-50" />
        </TriggerComponent>
      </PopoverTrigger>
      <PopoverContent className={cn("w-fit p-0", dropdownClassName)}>{children}</PopoverContent>
    </Popover>
  );
};
