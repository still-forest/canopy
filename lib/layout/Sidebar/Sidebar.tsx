import { useTheme } from "@src/context/useTheme";
import { Computer, Moon, SquareArrowOutUpRight, Sun } from "lucide-react";
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
import { Flex } from "@/main";
import { Text } from "@/typography";

interface SideLink {
  slug: string;
  title: string;
  icon: React.ElementType;
  onClick?: () => void;
  external?: boolean;
}

interface SideLinkSet {
  links: SideLink[];
}

export interface SidebarProps extends React.ComponentProps<typeof BaseSidebar> {
  brandContent: React.ReactNode;
  brandOnClick?: () => void;
  activeSlug?: string;
  itemSets: SideLinkSet[];
  bottomItemSets?: SideLinkSet[];
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
              {item.external && (
                <Flex>
                  <SquareArrowOutUpRight size={12} strokeWidth={1.5} />
                </Flex>
              )}
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

// TODO: This doesn't support selecting system theme
const ThemeSelection = () => {
  const { theme, setTheme } = useTheme();

  return (
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
        {theme === "dark" && (
          <>
            <Sun />
            <MenuItemText>Light mode</MenuItemText>
          </>
        )}
        {theme === "system" && (
          <>
            <Computer />
            <MenuItemText>System theme</MenuItemText>
          </>
        )}
      </span>
    </SidebarMenuButton>
  );
};

export const Sidebar = ({
  brandContent,
  brandOnClick,
  activeSlug,
  itemSets,
  bottomItemSets = [],
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
            <ThemeSelection />
          </SidebarMenuItem>
          {bottomItemSets.length > 0 && (
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
