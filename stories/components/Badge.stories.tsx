import type { Meta, StoryObj } from "@storybook/react-vite";
import { OrigamiIcon } from "lucide-react";
import { Badge } from "@/components";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-w-48">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  children: "Thing",
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

const SampleIcon = () => <OrigamiIcon />;

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <Badge label="Default" />
      <Badge className="col-start-1" label="Primary" variant="primary" />
      <Badge label="Secondary" variant="secondary" />
      <Badge label="Muted" variant="muted" />
      <Badge label="Ghost" variant="ghost" />
      <Badge label="Link" variant="link" />
      <Badge label="Info" variant="info" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Danger" variant="danger" />
    </div>
  ),
};

export const OutlineVariants: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <Badge label="Default" outline />
      <Badge className="col-start-1" label="Primary" outline variant="primary" />
      <Badge label="Secondary" outline variant="secondary" />
      <Badge label="Muted" outline variant="muted" />
      <Badge label="Ghost" outline variant="ghost" />
      <Badge label="Link" outline variant="link" />
      <Badge label="Info" outline variant="info" />
      <Badge label="Success" outline variant="success" />
      <Badge label="Warning" outline variant="warning" />
      <Badge label="Danger" outline variant="danger" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <Badge label="Extra small" size="xs" />
      <Badge label="Small" size="sm" />
      <Badge label="Medium" size="md" />
      <Badge label="Large" size="lg" />
      <Badge label="Extra large" size="xl" />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <Badge>
        <SampleIcon />
        Default
      </Badge>
      <Badge className="col-start-1" variant="primary">
        <SampleIcon />
        Primary
      </Badge>
      <Badge variant="secondary">
        <SampleIcon />
        Secondary
      </Badge>
      <Badge variant="muted">
        <SampleIcon />
        Muted
      </Badge>
      <Badge variant="ghost">
        <SampleIcon />
        Ghost
      </Badge>
      <Badge variant="link">
        <SampleIcon />
        Link
      </Badge>
      <Badge variant="info">
        <SampleIcon />
        Info
      </Badge>
      <Badge variant="success">
        <SampleIcon />
        Success
      </Badge>
      <Badge variant="warning">
        <SampleIcon />
        Warning
      </Badge>
      <Badge variant="danger">
        <SampleIcon />
        Danger
      </Badge>
    </div>
  ),
};
