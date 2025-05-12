import type { Meta, StoryObj } from "@storybook/react";

import { DeleteButton } from "@/main";

const meta: Meta<typeof DeleteButton> = {
  title: "Forms/Buttons/Delete",
  component: DeleteButton,
  tags: ["autodocs"],
} satisfies Meta<typeof DeleteButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  disabled: false,
  handleDelete: () => {
    alert("Are you sure you want to delete?");
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

export const Disabled: Story = {
  args: {
    ...defaultProps,
    disabled: true,
  },
};
