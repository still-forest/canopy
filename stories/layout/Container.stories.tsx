import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "@/layout";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
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

export const WithNoVerticalPadding: Story = {
  args: {
    children: "This is a Container component",
    separation: "none",
  },
};

export const WithExtraSmallVerticalPadding: Story = {
  args: {
    children: "This is a Container component",
    separation: "xs",
  },
};

export const WithSmallVerticalPadding: Story = {
  args: {
    children: "This is a Container component",
    separation: "sm",
  },
};

export const WithMediumVerticalPadding: Story = {
  args: {
    children: "This is a Container component",
    separation: "md",
  },
};

export const WithLargeVerticalPadding: Story = {
  args: {
    children: "This is a Container component",
    separation: "lg",
  },
};

export const WithExtraLargeVerticalPadding: Story = {
  args: {
    children: "This is a Container component",
    separation: "xl",
  },
};
