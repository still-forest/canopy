import type { Meta, StoryObj } from "@storybook/react";
import { Box, Footer } from "@/layout";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <Box width="full" className="min-h-[400px]">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { disable: true },
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    children: "This is a Footer component",
  },
};
