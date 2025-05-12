import type { Meta, StoryObj } from "@storybook/react";
import { PiggyBank } from "lucide-react";

import { SaveButton } from "@/main";

const meta: Meta<typeof SaveButton> = {
  title: "Forms/Buttons/Save",
  component: SaveButton,
  tags: ["autodocs"],
} satisfies Meta<typeof SaveButton>;

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

export const WithCustomSubmittingIcon: Story = {
  args: {
    ...defaultProps,
    submittingIcon: PiggyBank,
    submitting: true,
  },
};
