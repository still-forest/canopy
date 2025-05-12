import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@/primitives/main";

const meta: Meta<typeof Text> = {
  title: "Charts/Placeholder",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Text>Hello</Text>,
};
