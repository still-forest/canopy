import { Box, Container, Flex, MenuItemText, SidebarLayout } from "@/layout";
import ThemeProvider from "@src/context/ThemeProvider";
import { useTheme } from "./context/useTheme";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"; // TODO: Export from lib
import { Settings2, Trees, LogOut, BookType, Tag, Home, LayoutDashboard, PiggyBank, FolderTree } from "lucide-react";
import { Heading } from "@/typography";

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
    <a href="#settings" className="hover:cursor-pointer">
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <span>
            <Settings2 />
            <MenuItemText>Settings</MenuItemText>
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </a>
    <a href="#logout" className="hover:cursor-pointer">
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

const itemSet1 = [
  {
    key: "home",
    title: "Home",
    url: "#home",
    icon: Home,
    onClick: () => {
      window.alert("home");
    },
  },
  {
    key: "summary",
    title: "Summary",
    url: "#summary",
    icon: LayoutDashboard,
    onClick: () => {
      window.alert("summary");
    },
  },
  {
    key: "details",
    title: "Details",
    url: "#details",
    icon: FolderTree,
    onClick: () => {
      window.alert("details");
    },
  },
];

const itemSet2 = [
  {
    key: "references",
    title: "References",
    url: "#references",
    icon: BookType,
    onClick: () => {
      window.alert("references");
    },
  },
];

const InnerApp = () => {
  const { theme, setTheme } = useTheme();

  return (
    <SidebarLayout
      brandContent={<BrandContent />}
      bottomContent={<BottomContent />}
      setTheme={setTheme}
      theme={theme}
      activeSlug="summary"
      itemSets={[{ links: itemSet1 }, { links: itemSet2 }]}
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
