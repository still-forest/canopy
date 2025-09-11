import { Tooltip as BaseTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/utils";

export type CursorType = "arrow" | "pointer" | "text" | "not-allowed";

type TooltipProps = React.ComponentProps<typeof BaseTooltip>;
type TooltipTriggerProps = React.ComponentProps<typeof TooltipTrigger> & {
  cursor?: CursorType;
};
type TooltipContentProps = React.ComponentProps<typeof TooltipContent>;

type TooltipComponent = React.FC<TooltipProps> & {
  Trigger: React.FC<TooltipTriggerProps>;
  Content: React.FC<TooltipContentProps>;
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

const Trigger = ({ children, cursor = "pointer", className }: TooltipTriggerProps) => (
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

const Content = ({ className, children }: TooltipContentProps) => (
  <TooltipContent className={className}>{children}</TooltipContent>
);

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;

interface SimpleTooltipProps {
  children: string | React.ReactNode;
  content: string | React.ReactNode;
}

const SimpleTooltip = ({ children, content }: SimpleTooltipProps) => (
  <Tooltip>
    <Tooltip.Trigger>{typeof children === "string" ? <span>{children}</span> : children}</Tooltip.Trigger>
    <Tooltip.Content>{content}</Tooltip.Content>
  </Tooltip>
);

export { Tooltip, SimpleTooltip };
