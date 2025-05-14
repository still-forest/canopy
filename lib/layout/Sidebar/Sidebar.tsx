import {
  Sidebar as BaseSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Sun, Moon } from "lucide-react";

import { Text } from "@/typography";
export interface SideLink {
  key: string;
  title: string;
  url: string;
  icon: React.ElementType;
}

export interface SidebarProps extends React.ComponentProps<typeof BaseSidebar> {
  activeItem?: string | undefined;
  items: string[];
  setTheme: (theme: string) => void;
  theme: string;
  brandContent: React.ReactNode;
}

const MenuItemText = ({ children }: { children: React.ReactNode }) => (
  <Text size="base" truncate>
    {children}
  </Text>
);

export const Sidebar = ({ brandContent, activeItem, setTheme, theme, ...props }: SidebarProps) => {
  return (
    <BaseSidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>{brandContent}</SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>{/* item list */}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <SidebarTrigger className="justify-start font-normal">
                <MenuItemText>Collapse menu</MenuItemText>
              </SidebarTrigger>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="cursor-pointer"
              onClick={() => {
                const newTheme = theme === "light" ? "dark" : "light";
                setTheme(newTheme);
              }}
              asChild
            >
              <span>
                {theme === "light" && (
                  <>
                    <Moon />
                    <MenuItemText>Dark mode</MenuItemText>
                  </>
                )}
                {theme !== "light" && (
                  <>
                    <Sun />
                    <MenuItemText>Light mode</MenuItemText>
                  </>
                )}
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {/* user menu */}
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </BaseSidebar>
  );
};
