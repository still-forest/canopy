import React from "react";
import { Flex, type FlexProps, Footer, Header } from "@/layout";

const Content = ({ children }: { children: React.ReactNode }) => {
  return <Flex.Item className="flex-1">{children}</Flex.Item>;
};

interface LayoutProps extends FlexProps {
  children: React.ReactNode;
}

const LayoutComponent = React.forwardRef<HTMLDivElement, LayoutProps>(({ children, ...props }, ref) => {
  return (
    <Flex direction="col" className="mx-auto h-full w-full max-w-screen-lg" ref={ref} {...props}>
      {children}
    </Flex>
  );
});

const Layout = Object.assign(LayoutComponent, { Header, Content, Footer }) as typeof LayoutComponent & {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
};

export { Layout };
