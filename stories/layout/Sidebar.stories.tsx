import type { Meta, StoryObj } from "@storybook/react-vite";
import {
	BookType,
	FolderTree,
	Home,
	LayoutDashboard,
	LogOut,
	Settings2,
	Trees,
} from "lucide-react";
import { Box, Container, Flex, Footer } from "@/layout";
import {
	Sidebar,
	SidebarLayout,
	SidebarTrigger,
	type Theme,
} from "@/navigation";
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
		<Flex
			align="center"
			className="aspect-square size-8 rounded-lg bg-info text-sidebar"
			justify="center"
		>
			<Trees className="size-6" />
		</Flex>
		<Heading className="ml-2" level="3">
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
			<Heading className="mt-4" level="1">
				Canopy
			</Heading>
		</Container>
		<Footer>
			<Text size="sm" variant="muted">
				© 2025 Still Forest LLC.
			</Text>
		</Footer>
	</>
);

const defaultArgs = {
	brandContent: <BrandContent />,
	brandOnClick: () => {
		window.alert("brand");
	},
	activeSlug: "summary",
	itemSets: [{ links: itemSet1 }, { links: itemSet2 }],
	bottomItemSets: [{ links: itemSet3 }],
	theme: "light" as Theme,
	setTheme: (newTheme: Theme) => {
		window.alert(`New theme: ${newTheme}`);
	},
};

export const Default: Story = {
	render: () => (
		<SidebarLayout {...defaultArgs}>
			<SampleContent />
		</SidebarLayout>
	),
};

export const NoBottomSets: Story = {
	render: () => (
		<SidebarLayout {...defaultArgs} bottomItemSets={undefined}>
			<SampleContent />
		</SidebarLayout>
	),
};

export const OneSection: Story = {
	render: () => (
		<SidebarLayout {...defaultArgs} itemSets={[{ links: itemSet1 }]}>
			<SampleContent />
		</SidebarLayout>
	),
};
