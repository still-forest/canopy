import { Moon, Sun } from "lucide-react";
import { Fragment } from "react";
import {
  Sidebar as BaseSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Box } from "@/layout";
import { Text } from "@/typography";

interface SideLink {
  slug: string;
  title: string;
  icon: React.ElementType;
  onClick?: () => void;
}

interface SideLinkSet {
  links: SideLink[];
}

type Theme = "light" | "dark" | "system";

export interface SidebarProps extends React.ComponentProps<typeof BaseSidebar> {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  brandContent: React.ReactNode;
  brandOnClick?: () => void;
  activeSlug?: string;
  itemSets: SideLinkSet[];
  bottomItemSets: SideLinkSet[];
}

export const MenuItemText = ({ children }: { children: React.ReactNode }) => (
  <Text size="base" truncate>
    {children}
  </Text>
);

interface MenuSubSectionProps {
  itemSet: SideLinkSet;
  activeSlug?: string;
}

const MenuSubSection = ({ itemSet, activeSlug }: MenuSubSectionProps) => {
  return (
    <>
      {itemSet.links.map((item) => (
        <SidebarMenuItem key={item.slug} onClick={item.onClick} className="hover:cursor-pointer">
          <SidebarMenuButton asChild isActive={activeSlug === item.slug}>
            <span>
              <item.icon />
              <MenuItemText>{item.title}</MenuItemText>
            </span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
};

interface MenuSectionProps {
  itemSets: SideLinkSet[];
  activeSlug?: string;
}

const MenuSection = ({ itemSets, activeSlug }: MenuSectionProps) => {
  return (
    <SidebarMenu>
      {itemSets.map((itemSet, i) => {
        return (
          <Fragment key={`item-set-${i}`}>
            <MenuSubSection itemSet={itemSet} activeSlug={activeSlug} />
            {i < itemSets.length - 1 && <SidebarSeparator />}
          </Fragment>
        );
      })}
    </SidebarMenu>
  );
};

export const Sidebar = ({
  theme,
  setTheme,
  brandContent,
  brandOnClick,
  activeSlug,
  itemSets,
  bottomItemSets,
  ...props
}: SidebarProps) => {
  return (
    <BaseSidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className={brandOnClick ? "cursor-pointer" : "cursor-default"}
              onClick={brandOnClick}
            >
              {brandContent}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <MenuSection itemSets={itemSets} activeSlug={activeSlug} />
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
          {bottomItemSets && (
            <>
              <SidebarSeparator />
              <MenuSection itemSets={bottomItemSets} activeSlug={activeSlug} />
            </>
          )}
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </BaseSidebar>
  );
};
