import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type * as React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/utils";
import { useSidebar } from "./context";
import "./Sidebar.css";

type SidebarMenuButtonProps = useRender.ComponentProps<"button"> &
  React.ComponentProps<"button"> & {
    active?: boolean;
    tooltip?: string;
    forceTooltip?: boolean;
    size?: "default" | "lg";
  };

export const SidebarMenuButton = ({
  render,
  active = false,
  size = "default",
  tooltip,
  forceTooltip = false,
  className,
  ...buttonProps
}: SidebarMenuButtonProps) => {
  const { isMobile, state } = useSidebar();
  const hideTooltip = !forceTooltip && (state !== "collapsed" || isMobile);

  const mergedButtonProps = { ...buttonProps, "data-active": active } as React.ComponentProps<"button">;

  const comp = useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        className: cn("sidebar-menu-button", size === "lg" && "sidebar-menu-button--lg", className),
      },
      mergedButtonProps,
    ),
    render: !tooltip ? render : TooltipTrigger,
    state: {
      slot: "sidebar-menu-button",
      sidebar: "menu-button",
      size,
    },
  });

  if (!tooltip) {
    return comp;
  }

  return (
    <Tooltip>
      {comp}
      <TooltipContent align="center" hidden={hideTooltip} side="right">
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
};
