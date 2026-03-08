import { SidebarInset, SidebarProvider } from "./primitives";
import { Sidebar, type SidebarProps } from "./Sidebar";

interface Props extends SidebarProps {
  children?: React.ReactNode;
}

export const SidebarLayout = ({ children, ...props }: Props) => {
  return (
    <SidebarProvider>
      <Sidebar {...props} />
      <SidebarInset className="max-w-screen-xl">{children}</SidebarInset>
    </SidebarProvider>
  );
};
