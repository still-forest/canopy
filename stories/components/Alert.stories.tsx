import type { Meta, StoryObj } from "@storybook/react-vite";
import type { AlertProps } from "@/components/Alert";
import { Alert } from "@/components/Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: AlertProps = {
  type: "info",
  title: "Title",
  message: "This is an important message.",
};

export const Default: Story = {
  args: defaultArgs,
};

export const Success: Story = {
  args: { ...defaultArgs, type: "success" },
};

export const Warning: Story = {
  args: { ...defaultArgs, type: "warning" },
};

export const ErrorStatus: Story = {
  args: { ...defaultArgs, type: "error" },
};

export const NoTitle: Story = {
  args: { ...defaultArgs, title: undefined },
};
