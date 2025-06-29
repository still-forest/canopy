import type React from "react";
import { Popover as PopoverBase, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type PopoverComponent = React.FC<React.ComponentProps<typeof PopoverBase>> & {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
};

const Popover: PopoverComponent = ({ children, ...popoverProps }) => (
  <PopoverBase {...popoverProps}>{children}</PopoverBase>
);

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export { Popover };
