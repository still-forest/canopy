import { Tooltip as BaseTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/utils";
import type { CursorType } from "./types";

type TooltipProps = React.ComponentProps<typeof BaseTooltip>;
type TooltipTriggerProps = React.ComponentProps<typeof TooltipTrigger> & {
  cursor?: CursorType;
};
type TooltipContentProps = React.ComponentProps<typeof TooltipContent>;

type TooltipComponent = React.FC<TooltipProps> & {
  Trigger: React.FC<TooltipTriggerProps>;
  Content: React.FC<TooltipContentProps>;
};

const Tooltip: TooltipComponent = ({ children, open, onOpenChange, ...props }) => {
  return (
    <TooltipProvider>
      <BaseTooltip onOpenChange={onOpenChange} open={open} {...props}>
        {children}
      </BaseTooltip>
    </TooltipProvider>
  );
};

const Trigger = ({ cursor = "pointer", className, ...props }: TooltipTriggerProps) => (
  <TooltipTrigger
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
    {...props}
  />
);

const Content = ({ className, children, ...props }: TooltipContentProps) => (
  <TooltipContent className={className} role="tooltip" {...props}>
    {children}
  </TooltipContent>
);

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;

export { Tooltip };
