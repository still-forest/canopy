import { SquareArrowOutUpRight } from "lucide-react";
import { Fragment } from "react";
import { Sidebar as BaseSidebar } from "@/navigation/Sidebar";
import type { Theme } from "@/types";
import { Text } from "@/typography";
import { cn } from "@/utils";

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
  theme: Theme;
  setTheme: (theme: Theme) => void;
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
        <BaseSidebar.MenuItem className="hover:cursor-pointer" key={item.slug} onClick={item.onClick}>
          <BaseSidebar.MenuButton active={activeSlug === item.slug}>
            <item.icon />
            <MenuItemText>{item.title}</MenuItemText>
            {item.external && <SquareArrowOutUpRight size={12} strokeWidth={1.5} />}
          </BaseSidebar.MenuButton>
        </BaseSidebar.MenuItem>
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
    <BaseSidebar.Menu>
      {itemSets.map((itemSet, i) => {
        return (
          <Fragment key={`item-set-${i}`}>
            <MenuSubSection activeSlug={activeSlug} itemSet={itemSet} />
            {i < itemSets.length - 1 && <BaseSidebar.Separator />}
          </Fragment>
        );
      })}
    </BaseSidebar.Menu>
  );
};

export const Sidebar = ({
  brandContent,
  brandOnClick,
  activeSlug,
  itemSets,
  bottomItemSets = [],
  theme,
  setTheme,
  ...props
}: SidebarProps) => {
  return (
    <BaseSidebar collapsible="icon" {...props}>
      <BaseSidebar.Header>
        <BaseSidebar.Menu>
          <BaseSidebar.MenuItem>
            <BaseSidebar.MenuButton
              className={brandOnClick ? "cursor-pointer" : "cursor-default"}
              onClick={brandOnClick}
              size="lg"
            >
              {brandContent}
            </BaseSidebar.MenuButton>
          </BaseSidebar.MenuItem>
        </BaseSidebar.Menu>
      </BaseSidebar.Header>
      <BaseSidebar.Content>
        <BaseSidebar.Group>
          <BaseSidebar.GroupContent>
            <MenuSection activeSlug={activeSlug} itemSets={itemSets} />
          </BaseSidebar.GroupContent>
        </BaseSidebar.Group>
      </BaseSidebar.Content>
      <BaseSidebar.Footer className="mb-4">
        <BaseSidebar.Menu>
          <BaseSidebar.MenuItem>
            <BaseSidebar.MenuButton
              render={({ className, ...props }) => (
                <BaseSidebar.Trigger className={cn("justify-start font-normal", className)} {...props}>
                  <MenuItemText>Collapse menu</MenuItemText>
                </BaseSidebar.Trigger>
              )}
              tooltip="Collapse menu"
            />
          </BaseSidebar.MenuItem>
          {bottomItemSets.length > 0 && (
            <>
              <BaseSidebar.Separator />
              <MenuSection activeSlug={activeSlug} itemSets={bottomItemSets} />
            </>
          )}
        </BaseSidebar.Menu>
      </BaseSidebar.Footer>
      <BaseSidebar.Rail />
    </BaseSidebar>
  );
};
