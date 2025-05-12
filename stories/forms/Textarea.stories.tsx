import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "@/main";

const meta: Meta<typeof Textarea> = {
  title: "Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  name: "someThing",
};

export const Default: Story = {
  args: defaultProps,
};

export const WithLabel: Story = {
  args: { ...defaultProps, label: "Your message:" },
};

export const WithPlaceholder: Story = {
  args: { ...defaultProps, placeholder: "Type your message here" },
};

export const WithNote: Story = {
  args: {
    ...defaultProps,
    note: "Your message will self destruct in 5 seconds",
  },
};

export const WithEverything: Story = {
  args: {
    ...defaultProps,
    label: "Your message:",
    placeholder: "Type your message here",
    note: "Your message will self destruct in 5 seconds",
  },
};
