import { Tooltip as BaseTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/utils";

export const CURSOR_TYPES = [
  "arrow",
  "pointer",
  "text",
  "not-allowed",
  "help",
  "wait",
  "context-menu",
  "none",
  "copy",
  "move",
  "progress",
  "cell",
  "crosshair",
  "vertical-text",
  "alias",
  "zoom-in",
  "zoom-out",
  "no-drop",
  "grab",
  "grabbing",
  "all-scroll",
  "col-resize",
  "row-resize",
  "n-resize",
  "s-resize",
  "e-resize",
  "w-resize",
  "ne-resize",
  "nw-resize",
  "se-resize",
  "sw-resize",
  "nesw-resize",
  "nwse-resize",
] as const;

export type CursorType = (typeof CURSOR_TYPES)[number];

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
      cursor === "help" && "cursor-help",
      cursor === "wait" && "cursor-wait",
      cursor === "context-menu" && "cursor-context-menu",
      cursor === "none" && "cursor-none",
      cursor === "copy" && "cursor-copy",
      cursor === "move" && "cursor-move",
      cursor === "progress" && "cursor-progress",
      cursor === "cell" && "cursor-cell",
      cursor === "crosshair" && "cursor-crosshair",
      cursor === "vertical-text" && "cursor-vertical-text",
      cursor === "alias" && "cursor-alias",
      cursor === "zoom-in" && "cursor-zoom-in",
      cursor === "zoom-out" && "cursor-zoom-out",
      cursor === "no-drop" && "cursor-no-drop",
      cursor === "grab" && "cursor-grab",
      cursor === "grabbing" && "cursor-grabbing",
      cursor === "all-scroll" && "cursor-all-scroll",
      cursor === "col-resize" && "cursor-col-resize",
      cursor === "row-resize" && "cursor-row-resize",
      cursor === "n-resize" && "cursor-n-resize",
      cursor === "s-resize" && "cursor-s-resize",
      cursor === "e-resize" && "cursor-e-resize",
      cursor === "w-resize" && "cursor-w-resize",
      cursor === "ne-resize" && "cursor-ne-resize",
      cursor === "nw-resize" && "cursor-nw-resize",
      cursor === "se-resize" && "cursor-se-resize",
      cursor === "sw-resize" && "cursor-sw-resize",
      cursor === "nesw-resize" && "cursor-nesw-resize",
      cursor === "nwse-resize" && "cursor-nwse-resize",
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
  cursor?: CursorType;
  content: string | React.ReactNode;
}

const SimpleTooltip = ({ children, cursor = "pointer", content }: SimpleTooltipProps) => (
  <Tooltip>
    <Tooltip.Trigger cursor={cursor}>
      {typeof children === "string" ? <span>{children}</span> : children}
    </Tooltip.Trigger>
    <Tooltip.Content>{content}</Tooltip.Content>
  </Tooltip>
);

export { Tooltip, SimpleTooltip };
