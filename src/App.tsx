import ThemeProvider from "@src/context/ThemeProvider";
import { BookType, FolderTree, Home, LayoutDashboard, LogOut, Settings2, Trees } from "lucide-react";
import { Container, Flex, Footer, SidebarLayout, SidebarTrigger } from "@/layout";
import { Heading, Text } from "@/typography";
import { useTheme } from "./context/useTheme";

const BrandContent = () => (
  <>
    <Flex align="center" justify="center" className="bg-info text-sidebar aspect-square size-8 rounded-lg">
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
    slug: "storybook",
    title: "Storybook",
    icon: BookType,
    external: true,
    onClick: () => {
      window.open("https://still-forest.github.io/canopy/", "_blank");
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
      brandOnClick={() => {
        window.alert("brand");
      }}
      activeSlug="summary"
      itemSets={[{ links: itemSet1 }, { links: itemSet2 }]}
      bottomItemSets={[{ links: itemSet3 }]}
      theme={theme}
      setTheme={setTheme}
    >
      <Container className="border-b">
        <SidebarTrigger />
      </Container>
      <Container>
        <Heading level="1" className="mt-4">
          Canopy
        </Heading>
      </Container>
      <Footer>
        <Text variant="muted" size="sm">
          © 2025 Still Forest LLC.
        </Text>
      </Footer>
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
