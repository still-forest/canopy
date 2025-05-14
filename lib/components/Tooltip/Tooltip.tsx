import { Tooltip as BaseTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TooltipProps {
  children: React.ReactNode;
}

const Tooltip = ({ children }: TooltipProps) => {
  return (
    <TooltipProvider>
      <BaseTooltip>{children}</BaseTooltip>
    </TooltipProvider>
  );
};

const Trigger = ({ children }: TooltipProps) => <TooltipTrigger asChild>{children}</TooltipTrigger>;

const Content = ({ children }: TooltipProps) => <TooltipContent>{children}</TooltipContent>;

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;

export { Tooltip };
