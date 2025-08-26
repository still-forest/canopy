"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { Sidebar, type SidebarProps } from "./Sidebar";

interface Props extends SidebarProps {
  children?: React.ReactNode;
}

export const SidebarLayout = ({ children, ...props }: Props) => {
  return (
    <SidebarProvider>
      <Sidebar {...props} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
};
