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
  className?: string;
}

export const DesktopSelectPicker = ({
  selectedLabel,
  open,
  setOpen,
  children,
  triggerId,
  className,
}: DesktopSelectPickerProps) => {
  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className={cn("w-full justify-between font-normal", className)}
          id={triggerId}
          role="combobox"
          variant="outline"
        >
          {selectedLabel}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">{children}</PopoverContent>
    </Popover>
  );
};
