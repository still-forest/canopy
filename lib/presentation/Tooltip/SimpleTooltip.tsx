import type { ComponentProps, ReactElement } from "react";
import { cn } from "@/utils/cn";
import { Tooltip } from "./Tooltip";
import type { CursorType } from "./types";

interface SimpleTooltipProps extends Omit<ComponentProps<typeof Tooltip.Content>, "content"> {
  children: string | ReactElement;
  cursor?: CursorType;
  content: string | ReactElement;
}

export const SimpleTooltip = ({ children, cursor = "pointer", content, className, ...props }: SimpleTooltipProps) => (
  <Tooltip>
    <Tooltip.Trigger cursor={cursor} render={typeof children === "string" ? <span>{children}</span> : children} />
    <Tooltip.Content className={cn("text-balance", className)} {...props}>
      {content}
    </Tooltip.Content>
  </Tooltip>
);
