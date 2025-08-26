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

export type CursorType = "arrow" | "pointer" | "text" | "not-allowed";

interface TriggerProps {
  children: React.ReactNode;
  cursor?: CursorType;
  className?: string;
}

type TooltipComponent = React.FC<TooltipProps> & {
  Trigger: React.FC<TriggerProps>;
  Content: React.FC<ChildProps>;
};

const Tooltip: TooltipComponent = ({ children, open, onOpenChange }) => {
  return (
    <TooltipProvider>
      <BaseTooltip onOpenChange={onOpenChange} open={open}>
        {children}
      </BaseTooltip>
    </TooltipProvider>
  );
};

const Trigger = ({ children, cursor = "pointer", className }: TriggerProps) => (
  <TooltipTrigger
    asChild
    className={cn(
      cursor === "arrow" && "cursor-default",
      cursor === "pointer" && "cursor-pointer",
      cursor === "text" && "cursor-text",
      cursor === "not-allowed" && "cursor-not-allowed",
      className,
    )}
  >
    {children}
  </TooltipTrigger>
);

const Content = ({ children }: ChildProps) => <TooltipContent>{children}</TooltipContent>;

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;

export { Tooltip };
