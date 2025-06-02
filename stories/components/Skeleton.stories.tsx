import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from "@/components";
import { Flex } from "@/layout";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Flex align="center" gapX="4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Flex direction="col" gapY="2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </Flex>
    </Flex>
  ),
};
