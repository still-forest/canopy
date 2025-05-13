import type { Meta, StoryObj } from "@storybook/react";
import { Box, Container } from "@/layout";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Comma-separated CSS class names",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      control: { disable: true },
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: "This is a Container component",
  },
};

export const WithPadding: Story = {
  args: {
    children: "This is a Container component",
    className: "p-8",
  },
};
