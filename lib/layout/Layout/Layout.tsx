import React from "react";
import { Flex, type FlexProps, Footer, Header } from "@/layout";
import { Body } from "@/layout/Layout/Body";
import { layoutClasses } from "@/layout/style";
import { cn } from "@/utils";

interface LayoutProps extends FlexProps {
  children: React.ReactNode;
}

const LayoutComponent = React.forwardRef<HTMLDivElement, LayoutProps>(({ children, className, ...props }, ref) => {
  return (
    <Flex className={cn(layoutClasses, "flex-1", className)} direction="col" ref={ref} {...props}>
      {children}
    </Flex>
  );
});

const Layout = Object.assign(LayoutComponent, { Header, Body, Footer }) as typeof LayoutComponent & {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
};

export { Layout };
