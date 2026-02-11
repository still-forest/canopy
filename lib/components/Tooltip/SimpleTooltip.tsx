import type { ComponentProps } from "react";
import type { TooltipContent } from "@/components/ui/tooltip";
import { Tooltip } from "./Tooltip";
import type { CursorType } from "./types";

interface SimpleTooltipProps extends ComponentProps<typeof TooltipContent> {
  children: string | React.ReactNode;
  cursor?: CursorType;
  content: string | React.ReactNode;
}

export const SimpleTooltip = ({ children, cursor = "pointer", content, ...props }: SimpleTooltipProps) => (
  <Tooltip>
    <Tooltip.Trigger cursor={cursor}>
      {typeof children === "string" ? <span>{children}</span> : children}
    </Tooltip.Trigger>
    <Tooltip.Content {...props}>{content}</Tooltip.Content>
  </Tooltip>
);
