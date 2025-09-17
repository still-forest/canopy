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

export const WithNoSeparation: Story = {
  args: {
    children: "This is a Container component",
    separation: "none",
  },
};

export const WithExtraSmallSeparation: Story = {
  args: {
    children: "This is a Container component",
    separation: "xs",
  },
};

export const WithSmallSeparation: Story = {
  args: {
    children: "This is a Container component",
    separation: "sm",
  },
};

export const WithMediumSeparation: Story = {
  args: {
    children: "This is a Container component",
    separation: "md",
  },
};

export const WithLargeSeparation: Story = {
  args: {
    children: "This is a Container component",
    separation: "lg",
  },
};

export const WithExtraLargeSeparation: Story = {
  args: {
    children: "This is a Container component",
    separation: "xl",
  },
};
