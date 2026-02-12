"use client";

import { SquareArrowOutUpRight } from "lucide-react";
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
        <SidebarMenuItem className="hover:cursor-pointer" key={item.slug} onClick={item.onClick}>
          <SidebarMenuButton isActive={activeSlug === item.slug}>
            <item.icon />
            <MenuItemText>{item.title}</MenuItemText>
            {item.external && <SquareArrowOutUpRight size={12} strokeWidth={1.5} />}
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
            <MenuSubSection activeSlug={activeSlug} itemSet={itemSet} />
            {i < itemSets.length - 1 && <SidebarSeparator />}
          </Fragment>
        );
      })}
    </SidebarMenu>
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
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className={brandOnClick ? "cursor-pointer" : "cursor-default"}
              onClick={brandOnClick}
              size="lg"
            >
              {brandContent}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <MenuSection activeSlug={activeSlug} itemSets={itemSets} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={({ className, ...props }) => (
                <SidebarTrigger className={cn("justify-start font-normal", className)} {...props}>
                  <MenuItemText>Collapse menu</MenuItemText>
                </SidebarTrigger>
              )}
              tooltip="Collapse menu"
            />
          </SidebarMenuItem>
          {bottomItemSets.length > 0 && (
            <>
              <SidebarSeparator />
              <MenuSection activeSlug={activeSlug} itemSets={bottomItemSets} />
            </>
          )}
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </BaseSidebar>
  );
};
