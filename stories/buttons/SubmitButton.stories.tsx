import type { Meta, StoryObj } from "@storybook/react-vite";
import { SendHorizontalIcon } from "lucide-react";
import { SubmitButton } from "@/buttons";

const meta: Meta<typeof SubmitButton> = {
  title: "Buttons/SubmitButton",
  component: SubmitButton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-w-48">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SubmitButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = { submitting: false };

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
export const WithIcon: Story = {
  args: {
    ...defaultProps,
    icon: <SendHorizontalIcon />,
  },
};

export const States: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <SubmitButton {...defaultProps} label="Default" />
      <SubmitButton {...defaultProps} disabled label="Disabled" />
      <SubmitButton {...defaultProps} submitting />
    </div>
  ),
};

export const StatesWithIcon: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <SubmitButton {...defaultProps} icon={<SendHorizontalIcon />} label="Default" />
      <SubmitButton {...defaultProps} disabled icon={<SendHorizontalIcon />} />
      <SubmitButton {...defaultProps} icon={<SendHorizontalIcon />} submitting />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <SubmitButton {...defaultProps} label="Extra small" size="xs" />
      <SubmitButton {...defaultProps} label="Small" size="sm" />
      <SubmitButton {...defaultProps} label="Medium" size="md" />
      <SubmitButton {...defaultProps} label="Large" size="lg" />
      <SubmitButton {...defaultProps} label="Extra large" size="xl" />
    </div>
  ),
};
