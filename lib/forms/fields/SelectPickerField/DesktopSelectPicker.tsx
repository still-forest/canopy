import { mergeProps } from "@base-ui/react";
import { ChevronsUpDown } from "lucide-react";
import type { ReactNode } from "react";
import { Button, type ButtonProps } from "@/buttons/Button/Button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/utils/cn";

interface DesktopSelectPickerProps {
  selectedLabel: string | ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  id?: string;
  triggerComponent?: React.ComponentType<ButtonProps>;
  triggerProps?: Partial<ButtonProps>;
  dropdownClassName?: string;
  triggerClassName?: string;
}

export const DesktopSelectPicker = ({
  selectedLabel,
  open,
  setOpen,
  children,
  id,
  triggerComponent: TriggerComponent = Button,
  triggerProps,
  dropdownClassName,
  triggerClassName,
}: DesktopSelectPickerProps) => {
  const effectiveRole = triggerProps?.role ?? "combobox";

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger
        render={(props) => {
          // aria-expanded is not a valid ARIA state for role="radio".
          // Strip it from popover props when using a non-combobox role.
          const { "aria-expanded": _ariaExpanded, ...popoverProps } = props;
          return (
            <TriggerComponent
              {...mergeProps(popoverProps, triggerProps, {
                ...(effectiveRole === "combobox" && { "aria-expanded": open }),
                className: cn("w-full justify-between font-normal", triggerClassName),
                id,
                role: effectiveRole,
                variant: triggerProps?.variant ?? "outline",
              })}
            >
              {selectedLabel}
              <ChevronsUpDown className="opacity-50" />
            </TriggerComponent>
          );
        }}
      />
      <PopoverContent className={cn("p-0!", dropdownClassName)}>{children}</PopoverContent>
    </Popover>
  );
};
