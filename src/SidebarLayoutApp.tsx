import { BookType, FolderTree, Home, LayoutDashboard, LogOut, Settings2 } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/forms";
import { Container, Footer } from "@/layout";
import { SidebarLayout, SidebarTrigger } from "@/navigation";
import { Heading } from "@/typography";
import { Brand } from "./components/Brand";
import { FooterContent } from "./components/FooterContent";
import { useTheme } from "./context/useTheme";

const itemSet1 = [
  {
    slug: "home",
    title: "Home",
    icon: Home,
    onClick: () => {
      window.location.href = "/";
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

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <SidebarLayout
      activeSlug="summary"
      bottomItemSets={[{ links: itemSet3 }]}
      brandContent={<Brand />}
      brandOnClick={() => {
        window.alert("brand");
      }}
      itemSets={[{ links: itemSet1 }, { links: itemSet2 }]}
      setTheme={setTheme}
      theme={theme}
    >
      <Container className="border-b">
        <SidebarTrigger />
      </Container>
      <Container>
        <Heading className="mt-4" level="1">
          Canopy
        </Heading>
      </Container>
      <Container>
        <Button asChild fit>
          <Link to="/">Home</Link>
        </Button>
      </Container>
      <Footer>
        <FooterContent />
      </Footer>
    </SidebarLayout>
  );
}
