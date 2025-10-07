import type { Meta, StoryObj } from "@storybook/react-vite";
import { PiggyBank } from "lucide-react";
import { Loader } from "@/components";
import { Flex } from "@/layout";
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
    icon: PiggyBank,
  },
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      <Flex align="center" gap="2">
        <Loader size="xs" />
        <Text size="xs">Extra small</Text>
      </Flex>
      <Flex align="center" gap="2">
        <Loader size="sm" />
        <Text size="sm">Small</Text>
      </Flex>
      <Flex align="center" gap="2">
        <Loader size="md" />
        <Text size="md">Medium</Text>
      </Flex>
      <Flex align="center" gap="2">
        <Loader size="lg" />
        <Text size="lg">Large</Text>
      </Flex>
      <Flex align="center" gap="2">
        <Loader size="xl" />
        <Text size="xl">Extra large</Text>
      </Flex>
    </Flex>
  ),
};
