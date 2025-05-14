import { Tooltip as BaseTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TooltipProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface ChildProps {
  children: React.ReactNode;
}

type TooltipComponent = React.FC<TooltipProps> & {
  Trigger: React.FC<ChildProps>;
  Content: React.FC<ChildProps>;
};

const Tooltip: TooltipComponent = ({ children, open, onOpenChange }) => {
  return (
    <TooltipProvider>
      <BaseTooltip open={open} onOpenChange={onOpenChange}>
        {children}
      </BaseTooltip>
    </TooltipProvider>
  );
};

const Trigger = ({ children }: ChildProps) => <TooltipTrigger asChild>{children}</TooltipTrigger>;

const Content = ({ children }: ChildProps) => <TooltipContent>{children}</TooltipContent>;

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;

export { Tooltip };
