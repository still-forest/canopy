import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Label } from "@/forms";
import { Text } from "@/typography";

const meta: Meta<typeof Label> = {
  title: "Forms/Label",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Some thing",
  },
};
