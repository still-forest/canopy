import { Box, Container, Flex, MenuItemText, SidebarLayout } from "@/layout";
import ThemeProvider from "@src/context/ThemeProvider";
import { useTheme } from "./context/useTheme";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Settings2, Trees, LogOut } from "lucide-react";
import { Heading, Text } from "@/typography";

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

const BottomContent = () => (
  <>
    <a href="#" className="hover:cursor-pointer">
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <span>
            <Settings2 />
            <MenuItemText>Settings</MenuItemText>
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </a>
    <a href="#" className="hover:cursor-pointer">
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <span>
            <LogOut />
            <MenuItemText>Log out</MenuItemText>
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </a>
  </>
);

const InnerApp = () => {
  const { theme, setTheme } = useTheme();

  return (
    <SidebarLayout
      brandContent={<BrandContent />}
      bottomContent={<BottomContent />}
      setTheme={setTheme}
      theme={theme}
      items={[]}
    >
      <Container>Canopy</Container>
    </SidebarLayout>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="canopy-theme">
      <InnerApp />
    </ThemeProvider>
  );
}

export default App;
