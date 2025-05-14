import { SidebarProvider, SidebarInset, SidebarMenuButton } from "@/components/ui/sidebar";

import { Sidebar, SidebarProps } from "./Sidebar";
import { Trees } from "lucide-react";
import { Box, Flex } from "@/layout";
import { Heading } from "@/typography";

interface Props extends Omit<SidebarProps, "brandContent"> {
  children?: React.ReactNode;
}

const BrandContent = () => (
  <SidebarMenuButton size="lg" asChild>
    <Box>
      <Flex align="center" justify="center" className="aspect-square size-8 rounded-lg bg-info text-sidebar">
        <Trees className="size-6" />
      </Flex>
      <Heading level="3" className="ml-2 cursor-default">
        Canopy
      </Heading>
    </Box>
  </SidebarMenuButton>
);

export const SidebarLayout = ({ children, ...props }: Props) => {
  return (
    <SidebarProvider>
      <Sidebar brandContent={<BrandContent />} {...props} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
};
