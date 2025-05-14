import ThemeProvider from "@src/context/ThemeProvider";
import { BookType, FolderTree, Home, LayoutDashboard, LogOut, Settings2, Trees } from "lucide-react";
import { Container, Flex, SidebarLayout } from "@/layout";
import { Heading } from "@/typography";

const BrandContent = () => (
  <>
    <Flex align="center" justify="center" className="aspect-square size-8 rounded-lg bg-info text-sidebar">
      <Trees className="size-6" />
    </Flex>
    <Heading level="3" className="ml-2">
      Canopy
    </Heading>
  </>
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
    external: true,
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
  return (
    <SidebarLayout
      brandContent={<BrandContent />}
      brandOnClick={() => {
        window.alert("brand");
      }}
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
