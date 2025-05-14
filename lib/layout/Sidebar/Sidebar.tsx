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
import { Fragment, useState } from "react";

interface SideLink {
  key: string;
  title: string;
  url: string;
  icon: React.ElementType;
  onClick?: () => void;
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
  activeSlug?: string;
}

export const MenuItemText = ({ children }: { children: React.ReactNode }) => (
  <Text size="base" truncate>
    {children}
  </Text>
);

interface PrimaryMenuProps extends Pick<SidebarProps, "itemSets" | "activeSlug"> {}

const PrimaryMenu = ({ itemSets, ...props }: PrimaryMenuProps) => {
  const [activeSlug, setActiveSlug] = useState<string | undefined>(props.activeSlug);
  const setCount = itemSets.length;

  console.log(activeSlug);

  return (
    <SidebarMenu>
      {itemSets.map((itemSet, i) => {
        return (
          <Fragment key={`item-set-${i}`}>
            {itemSet.links.map((item) => (
              <SidebarMenuItem
                key={item.key}
                onClick={() => {
                  setActiveSlug(item.key);
                  item.onClick?.();
                }}
                className="hover:cursor-pointer"
              >
                <SidebarMenuButton asChild isActive={activeSlug === item.key}>
                  <span>
                    <item.icon />
                    <MenuItemText>{item.title}</MenuItemText>
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            {i < setCount - 1 && <SidebarSeparator />}
          </Fragment>
        );
      })}
    </SidebarMenu>
  );
};

export const Sidebar = ({
  brandContent,
  bottomContent,
  activeSlug,
  itemSets,
  setTheme,
  theme,
  ...props
}: SidebarProps) => {
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
            <PrimaryMenu activeSlug={activeSlug} itemSets={itemSets} />
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
