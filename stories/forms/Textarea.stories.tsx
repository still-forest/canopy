import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textarea } from "@/forms";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof Textarea> = {
  title: "Forms/Inputs/Textarea",
  component: Textarea,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
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

export const WithError: Story = {
  args: {
    ...defaultProps,
    label: "Your message:",
    error: "What'd you do?!",
  },
};
