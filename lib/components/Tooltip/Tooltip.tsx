import { Tooltip as BaseTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/utils";

interface TooltipProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface ChildProps {
  children: React.ReactNode;
}

interface TriggerProps {
  children: React.ReactNode;
  cursor?: "arrow" | "pointer";
}

type TooltipComponent = React.FC<TooltipProps> & {
  Trigger: React.FC<TriggerProps>;
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

const Trigger = ({ children, cursor = "pointer" }: TriggerProps) => (
  <TooltipTrigger
    asChild
    className={cn(cursor === "arrow" && "cursor-default", cursor === "pointer" && "cursor-pointer")}
  >
    {children}
  </TooltipTrigger>
);

const Content = ({ children }: ChildProps) => <TooltipContent>{children}</TooltipContent>;

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;

export { Tooltip };
