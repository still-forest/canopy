import { BookType, FolderTree, Home, LayoutDashboard, LogOut, Settings2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/buttons";
import { buildButtonClassNames } from "@/buttons/Button/utils";
import { Container, Flex, Footer } from "@/layout";
import { SidebarTrigger } from "@/navigation";
import { Heading } from "@/typography";
import { cn } from "@/utils";
import { Brand } from "./components/Brand";
import { FooterContent } from "./components/FooterContent";
import { SidebarLayout } from "./SidebarLayout";

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
  const [showDimensions, setShowDimensions] = useState(true);

  return (
    <SidebarLayout
      activeSlug="summary"
      bottomItemSets={[{ links: itemSet3 }]}
      brandContent={<Brand />}
      brandOnClick={() => {
        window.alert("brand");
      }}
      itemSets={[{ links: itemSet1 }, { links: itemSet2 }]}
    >
      <Container className={cn(showDimensions && "bg-red-500/5 inset-shadow-sm inset-shadow-red-500", "border-b")}>
        <SidebarTrigger className="w-fit hover:bg-transparent" />
      </Container>
      <Container className={cn(showDimensions && "bg-yellow-500/5 inset-shadow-sm inset-shadow-yellow-500")}>
        <Heading className="mt-4" family="brand" level="1">
          Canopy
        </Heading>
      </Container>
      <Container className={cn(showDimensions && "bg-green-500/5 inset-shadow-sm inset-shadow-green-500")}>
        <Flex direction="col" gap="8">
          <Link className={buildButtonClassNames({ fit: true })} to="/">
            Home
          </Link>
          <Button fit onClick={() => setShowDimensions(!showDimensions)} outline>
            {showDimensions ? "Hide " : "Show "} dimensions
          </Button>
        </Flex>
      </Container>
      <Footer className={cn(showDimensions && "bg-blue-500/10 inset-shadow-sm inset-shadow-blue-500")}>
        <FooterContent />
      </Footer>
    </SidebarLayout>
  );
}
