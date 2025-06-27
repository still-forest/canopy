import { Popover as PopoverBase, PopoverContent, PopoverTrigger } from "../ui/popover";

type PopoverComponent = React.FC<React.ComponentProps<typeof PopoverBase>> & {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
};

const Popover: PopoverComponent = ({ children, open, onOpenChange }) => {
  return <PopoverBase open={open} onOpenChange={onOpenChange} >{children}</PopoverBase>;
};

Popover.Trigger = PopoverTrigger
Popover.Content = PopoverContent

export { Popover };
