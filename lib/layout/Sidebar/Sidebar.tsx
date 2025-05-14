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

interface SideLink {
  key: string;
  title: string;
  url: string;
  icon: React.ElementType;
  active: boolean;
}

interface SideLinkSet {
  links: SideLink[];
}

export interface SidebarProps extends React.ComponentProps<typeof BaseSidebar> {
  itemSets: SideLinkSet[];
  setTheme: (theme: string) => void;
  theme: string;
  brandContent: React.ReactNode;
  bottomContent: React.ReactNode;
}

export const MenuItemText = ({ children }: { children: React.ReactNode }) => (
  <Text size="base" truncate>
    {children}
  </Text>
);

const PrimaryMenu = ({ itemSets }: Pick<SidebarProps, "itemSets">) => {
  const setCount = itemSets.length;

  return (
    <SidebarMenu>
      {itemSets.map((itemSet, i) => {
        return (
          <>
            {itemSet.links.map((item) => (
              <SidebarMenuItem key={item.key}>
                <SidebarMenuButton asChild isActive={item.active}>
                  <a href={item.url}>
                    <item.icon />
                    <MenuItemText>{item.title}</MenuItemText>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            {i < setCount - 1 && <SidebarSeparator />}
          </>
        );
      })}
    </SidebarMenu>
  );
};

export const Sidebar = ({ brandContent, bottomContent, itemSets, setTheme, theme, ...props }: SidebarProps) => {
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
            <PrimaryMenu itemSets={itemSets} />
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
          {bottomContent && (
            <>
              <SidebarSeparator />
              {bottomContent}
            </>
          )}
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </BaseSidebar>
  );
};
