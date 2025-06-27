import type { Meta, StoryObj } from "@storybook/react-vite";
import { PiggyBank } from "lucide-react";

import { SubmitButton } from "@/forms";

const meta: Meta<typeof SubmitButton> = {
  title: "Forms/Buttons/Submit",
  component: SubmitButton,
  tags: ["autodocs"],
} satisfies Meta<typeof SubmitButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  disabled: false,
  handleDelete: () => {
    alert("Are you sure you want to save?");
  },
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const ExtraSmall: Story = {
  args: {
    ...defaultProps,
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    ...defaultProps,
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    ...defaultProps,
    size: "md",
  },
};

export const Large: Story = {
  args: {
    ...defaultProps,
    size: "lg",
  },
};

export const Submitting: Story = {
  args: {
    ...defaultProps,
    submitting: true,
  },
};

export const Disabled: Story = {
  args: {
    ...defaultProps,
    disabled: true,
  },
};

export const Submit: Story = {
  args: {
    ...defaultProps,
    action: "submit",
  },
};

export const Save: Story = {
  args: {
    ...defaultProps,
    action: "save",
  },
};

export const Send: Story = {
  args: {
    ...defaultProps,
    action: "send",
  },
};

export const NoIcon: Story = {
  args: {
    ...defaultProps,
    noIcon: true,
  },
};

export const WithCustomSubmittingIcon: Story = {
  args: {
    ...defaultProps,
    submittingIcon: PiggyBank,
    submitting: true,
  },
};
