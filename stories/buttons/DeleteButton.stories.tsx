import type { Meta, StoryObj } from "@storybook/react-vite";

import { DeleteButton } from "@/buttons";

const meta: Meta<typeof DeleteButton> = {
  title: "Buttons/DeleteButton",
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

export const Sizes: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <div className="flex flex-col items-center gap-2">
        <p className="footnote">xs</p>
        <DeleteButton {...defaultProps} size="xs" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="footnote">sm</p>
        <DeleteButton {...defaultProps} size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="footnote">md</p>
        <DeleteButton {...defaultProps} size="md" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="footnote">lg</p>
        <DeleteButton {...defaultProps} size="lg" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="footnote">xl</p>
        <DeleteButton {...defaultProps} size="xl" />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    ...defaultProps,
    disabled: true,
  },
};
