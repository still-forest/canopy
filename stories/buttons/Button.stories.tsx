import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loader2, Origami } from "lucide-react";
import { Button } from "@/buttons";

const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-w-48">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  children: "Click me",
};

const SampleIcon = () => <Origami />;
const LoadingIcon = () => <Loader2 />;

const iconProps = { icon: <SampleIcon /> };

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <Button label="Default" />
      <Button className="col-start-1" label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Muted" variant="muted" />
      <Button label="Ghost" variant="ghost" />
      <Button label="Link" variant="link" />
      <Button label="Info" variant="info" />
      <Button label="Success" variant="success" />
      <Button label="Warning" variant="warning" />
      <Button label="Danger" variant="danger" />
    </div>
  ),
};

export const OutlineStyles: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <Button label="Default" outline />
      <Button className="col-start-1" label="Primary" outline variant="primary" />
      <Button label="Secondary" outline variant="secondary" />
      <Button label="Muted" outline variant="muted" />
      <Button label="Ghost" outline variant="ghost" />
      <Button label="Link" outline variant="link" />
      <Button label="Info" outline variant="info" />
      <Button label="Success" outline variant="success" />
      <Button label="Warning" outline variant="warning" />
      <Button label="Danger" outline variant="danger" />
    </div>
  ),
};

export const KnockoutStyles: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <Button knockout label="Default" />
      <Button className="col-start-1" knockout label="Primary" variant="primary" />
      <Button knockout label="Secondary" variant="secondary" />
      <Button knockout label="Muted" variant="muted" />
      <Button knockout label="Ghost" variant="ghost" />
      <Button knockout label="Link" variant="link" />
      <Button knockout label="Info" variant="info" />
      <Button knockout label="Success" variant="success" />
      <Button knockout label="Warning" variant="warning" />
      <Button knockout label="Danger" variant="danger" />
    </div>
  ),
};

export const RoundedStyles: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <Button label="Default" rounded />
      <Button className="col-start-1" label="Primary" rounded variant="primary" />
      <Button label="Secondary" rounded variant="secondary" />
      <Button label="Muted" rounded variant="muted" />
      <Button label="Ghost" rounded variant="ghost" />
      <Button label="Link" rounded variant="link" />
      <Button label="Info" rounded variant="info" />
      <Button label="Success" rounded variant="success" />
      <Button label="Warning" rounded variant="warning" />
      <Button label="Danger" rounded variant="danger" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <Button>
        <LoadingIcon />
        Default
      </Button>
      <Button disabled>
        <LoadingIcon />
        Disabled
      </Button>
      <Button data-submitting="true" icon={<LoadingIcon />}>
        Submitting...
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <Button label="Extra small" size="xs" />
      <Button label="Small" size="sm" />
      <Button label="Medium" size="md" />
      <Button label="Large" size="lg" />
      <Button label="Extra large" size="xl" />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <Button label="Default" {...iconProps} />
      <Button className="col-start-1" label="Primary" variant="primary" {...iconProps} />
      <Button label="Secondary" variant="secondary" {...iconProps} />
      <Button label="Muted" variant="muted" {...iconProps} />
      <Button label="Ghost" variant="ghost" {...iconProps} />
      <Button label="Link" variant="link" {...iconProps} />
      <Button label="Info" variant="info" {...iconProps} />
      <Button label="Success" variant="success" {...iconProps} />
      <Button label="Warning" variant="warning" {...iconProps} />
      <Button label="Danger" variant="danger" {...iconProps} />
    </div>
  ),
};

export const NoText: Story = {
  args: {
    children: <SampleIcon />,
  },
};

export const NoTextLink: Story = {
  args: {
    children: <SampleIcon />,
    variant: "link",
  },
};

export const NoTextGhost: Story = {
  args: {
    children: <SampleIcon />,
    variant: "ghost",
  },
};

export const Fit: Story = {
  args: {
    ...defaultProps,
    fit: true,
  },
};

export const FlexContainerDefault: Story = {
  args: {
    ...defaultProps,
  },
  decorators: [
    (Story) => (
      <div className="w-full flex flex-col gap-4">
        <Story />
      </div>
    ),
  ],
};

export const FlexContainerFit: Story = {
  args: {
    ...defaultProps,
    fit: true,
  },
  decorators: [
    (Story) => (
      <div className="w-full flex flex-col gap-4">
        <Story />
      </div>
    ),
  ],
};
