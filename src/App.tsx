import ThemeProvider from "@src/context/ThemeProvider";
import { BookType, FolderTree, Home, LayoutDashboard, LogOut, Settings2, Trees } from "lucide-react";
import { SidebarMenuButton } from "@/components/ui/sidebar"; // TODO: Export from lib
import { Box, Container, Flex, SidebarLayout } from "@/layout";
import { Heading } from "@/typography";
import { useTheme } from "./context/useTheme";

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

const itemSet1 = [
  {
    slug: "home",
    title: "Home",
    icon: Home,
    onClick: () => {
      window.alert("home");
    },
  },
  {
    slug: "summary",
    title: "Summary",
    icon: LayoutDashboard,
    onClick: () => {
      window.alert("summary");
    },
  },
  {
    slug: "details",
    title: "Details",
    icon: FolderTree,
    onClick: () => {
      window.alert("details");
    },
  },
];

const itemSet2 = [
  {
    slug: "references",
    title: "References",
    icon: BookType,
    onClick: () => {
      window.alert("references");
    },
  },
];

const itemSet3 = [
  {
    slug: "settings",
    title: "Settings",
    icon: Settings2,
    onClick: () => {
      window.alert("settings");
    },
  },
  {
    slug: "logout",
    title: "Log out",
    icon: LogOut,
    onClick: () => {
      window.alert("logout");
    },
  },
];

const InnerApp = () => {
  const { theme, setTheme } = useTheme();

  return (
    <SidebarLayout
      brandContent={<BrandContent />}
      setTheme={setTheme}
      theme={theme}
      activeSlug="summary"
      itemSets={[{ links: itemSet1 }, { links: itemSet2 }]}
      bottomItemSets={[{ links: itemSet3 }]}
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
