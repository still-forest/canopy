import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import type * as React from "react";
import type { ElementType } from "react";
import { useSidebar } from "./context";
import { SidebarMenuButton } from "./SidebarMenuButton";

interface SidebarTriggerProps extends React.ComponentProps<typeof SidebarMenuButton> {
  icon?: ElementType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SidebarTrigger = ({ className, icon, onClick, children, ...props }: SidebarTriggerProps) => {
  const { toggleSidebar, open } = useSidebar();

  const Icon = icon || (open ? PanelRightOpen : PanelLeftOpen);

  return (
    <SidebarMenuButton
      className={className}
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      forceTooltip
      onClick={toggleSidebar}
      tooltip={open ? "Collapse menu" : "Expand menu"}
      {...props}
    >
      <Icon className="size-4" />
      {!children && <span className="sr-only">Toggle Sidebar</span>}
      {children && <span>{children}</span>}
    </SidebarMenuButton>
  );
};
