import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import type * as React from "react";
import type { ElementType } from "react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "./context";

interface SidebarTriggerProps extends React.ComponentProps<typeof Button> {
  icon?: ElementType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SidebarTrigger = ({ className, icon, onClick, children, ...props }: SidebarTriggerProps) => {
  const { toggleSidebar, open } = useSidebar();

  const Icon = icon || (open ? PanelRightOpen : PanelLeftOpen);

  return (
    <Button
      className={className}
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      size="icon-sm"
      variant="ghost"
      {...props}
    >
      <Icon className="size-4" />
      {!children && <span className="sr-only">Toggle Sidebar</span>}
      {children && <span>{children}</span>}
    </Button>
  );
};
