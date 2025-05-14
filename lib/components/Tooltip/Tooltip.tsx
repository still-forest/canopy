import { Tooltip as BaseTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TooltipProps {
  children: React.ReactNode;
  open?: boolean;
}

interface ChildProps {
  children: React.ReactNode;
}

const Tooltip = ({ children, open }: TooltipProps) => {
  return (
    <TooltipProvider>
      <BaseTooltip open={open}>{children}</BaseTooltip>
    </TooltipProvider>
  );
};

const Trigger = ({ children }: ChildProps) => <TooltipTrigger asChild>{children}</TooltipTrigger>;

const Content = ({ children }: ChildProps) => <TooltipContent>{children}</TooltipContent>;

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;

export { Tooltip };
