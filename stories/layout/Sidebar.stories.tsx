import type { Meta, StoryObj } from "@storybook/react";
import { BookType, FolderTree, Home, LayoutDashboard, LogOut, Settings2, Trees } from "lucide-react";
import { Box, Container, Flex, Footer, Sidebar, SidebarLayout, SidebarTrigger } from "@/layout";
import { Heading, Text } from "@/typography";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <Box className="max-h-[500px]">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

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

const SampleContent = () => (
  <>
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
  </>
);

export const Default: Story = {
  render: () => (
    <SidebarLayout
      brandContent={<BrandContent />}
      brandOnClick={() => {
        window.alert("brand");
      }}
      activeSlug="summary"
      itemSets={[{ links: itemSet1 }, { links: itemSet2 }]}
      bottomItemSets={[{ links: itemSet3 }]}
    >
      <SampleContent />
    </SidebarLayout>
  ),
};

export const NoBottomSets: Story = {
  render: () => (
    <SidebarLayout
      brandContent={<BrandContent />}
      brandOnClick={() => {
        window.alert("brand");
      }}
      activeSlug="summary"
      itemSets={[{ links: itemSet1 }, { links: itemSet2 }]}
    >
      <SampleContent />
    </SidebarLayout>
  ),
};

export const OneSection: Story = {
  render: () => (
    <SidebarLayout
      brandContent={<BrandContent />}
      brandOnClick={() => {
        window.alert("brand");
      }}
      activeSlug="summary"
      itemSets={[{ links: itemSet1 }]}
    >
      <SampleContent />
    </SidebarLayout>
  ),
};
