import { Box, Text } from "@jszymanowski/breeze-primitives";
import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/main";

const meta: Meta<typeof Label> = {
  title: "Label",
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
  decorators: [
    (Story) => (
      <Box className="min-w-[400px]">
        <Story />
      </Box>
    ),
  ],
};
