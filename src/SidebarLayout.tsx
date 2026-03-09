import { Sidebar as BaseSidebar, SidebarProvider } from "@/navigation/Sidebar";
import { Sidebar, type SidebarProps } from "./Sidebar";

interface Props extends SidebarProps {
  children?: React.ReactNode;
}

export const SidebarLayout = ({ children, ...props }: Props) => {
  return (
    <SidebarProvider>
      <Sidebar {...props} />
      <BaseSidebar.Inset className="max-w-screen-xl">{children}</BaseSidebar.Inset>
    </SidebarProvider>
  );
};
