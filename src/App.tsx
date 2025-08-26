import ThemeProvider from "@src/context/ThemeProvider";
import {
	BookType,
	FolderTree,
	Home,
	LayoutDashboard,
	LogOut,
	Settings2,
	Trees,
} from "lucide-react";
import { Container, Flex, Footer } from "@/layout";
import { SidebarLayout, SidebarTrigger } from "@/navigation";
import { Heading, Text } from "@/typography";
import { useTheme } from "./context/useTheme";

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
			activeSlug="summary"
			bottomItemSets={[{ links: itemSet3 }]}
			brandContent={<BrandContent />}
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
			<Footer>
				<Text size="sm" variant="muted">
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
