import { Tooltip as BaseTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TooltipProps {
  children: React.ReactNode;
  tooltipContent: React.ReactNode;
}

export const Tooltip = ({ children, tooltipContent }: TooltipProps) => {
  return (
    <TooltipProvider>
      <BaseTooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </BaseTooltip>
    </TooltipProvider>
  );
};
