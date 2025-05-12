import { Text } from "@/primitives/main";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "Placeholder",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Text>Hello</Text>,
};
