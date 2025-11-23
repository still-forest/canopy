import type { Meta, StoryObj } from "@storybook/react-vite";
import { PiggyBank } from "lucide-react";
import { Loader, type LoaderProps } from "@/components";
import { Flex, Grid } from "@/layout";
import { Text } from "@/typography";
import { INTERSTITIAL_DECORATOR } from "../support/decorators";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  decorators: [INTERSTITIAL_DECORATOR],
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Wheel: Story = {
  args: {
    variant: "wheel",
  },
};

export const WithCustomIcon: Story = {
  args: {
    icon: <PiggyBank />,
    size: "5xl",
  },
};

const SizeOption = ({ size }: { size: LoaderProps["size"] }) => {
  return (
    <Flex align="center" gap="2">
      <Loader size={size} />
      <Text size={size}>{size}</Text>
    </Flex>
  );
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      <SizeOption size="xs" />
      <SizeOption size="sm" />
      <SizeOption size="md" />
      <SizeOption size="lg" />
      <SizeOption size="xl" />
      <SizeOption size="2xl" />
      <SizeOption size="3xl" />
      <SizeOption size="4xl" />
      <SizeOption size="5xl" />
      <SizeOption size="6xl" />
      <SizeOption size="7xl" />
      <SizeOption size="8xl" />
      <SizeOption size="9xl" />
      <SizeOption size="10xl" />
    </Flex>
  ),
};

export const WithColorClassName: Story = {
  render: () => (
    <Grid cols="7" gap="2">
      <Loader className="text-brand" />
      <Loader className="text-primary" />
      <Loader className="text-info" />
      <Loader className="text-warning" />
      <Loader className="text-success" />
      <Loader className="text-destructive" />
      <Loader className="text-gray-500" />
      <Loader className="text-red-500" />
      <Loader className="text-orange-500" />
      <Loader className="text-yellow-500" />
      <Loader className="text-green-500" />
      <Loader className="text-blue-500" />
      <Loader className="text-indigo-500" />
      <Loader className="text-violet-500" />
    </Grid>
  ),
};
