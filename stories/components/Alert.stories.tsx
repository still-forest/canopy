import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/buttons";
import { Alert } from "@/components/Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => (
    <Alert variant="info">
      <Alert.Content>
        <Alert.Title>Information</Alert.Title>
        <Alert.Description>This is an informational message.</Alert.Description>
      </Alert.Content>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning">
      <Alert.Content>
        <Alert.Title>Warning</Alert.Title>
        <Alert.Description>This is a warning message.</Alert.Description>
      </Alert.Content>
    </Alert>
  ),
};

export const Danger: Story = {
  render: () => (
    <Alert variant="danger">
      <Alert.Content>
        <Alert.Title>Danger</Alert.Title>
        <Alert.Description>This is a danger message.</Alert.Description>
      </Alert.Content>
    </Alert>
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <Alert variant="info">
      <Alert.Content>
        <Alert.Description>This alert only has a description without a title.</Alert.Description>
      </Alert.Content>
    </Alert>
  ),
};

export const WithoutDescription: Story = {
  render: () => (
    <Alert variant="info">
      <Alert.Content>
        <Alert.Title>Just a Title</Alert.Title>
      </Alert.Content>
    </Alert>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Alert variant="warning">
      <Alert.Content>
        <Alert.Title>Action Required</Alert.Title>
        <Alert.Description>Please review this important information and take action.</Alert.Description>
      </Alert.Content>
      <Alert.Actions>
        <Button size="sm">Take Action</Button>
        <Button size="sm" variant="ghost">
          Dismiss
        </Button>
      </Alert.Actions>
    </Alert>
  ),
};

export const WithSingleAction: Story = {
  render: () => (
    <Alert variant="danger">
      <Alert.Content>
        <Alert.Title>Critical Danger</Alert.Title>
        <Alert.Description>An error occurred that requires your attention.</Alert.Description>
      </Alert.Content>
      <Alert.Actions>
        <Button size="sm">Retry</Button>
      </Alert.Actions>
    </Alert>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Alert variant="info">
      <Alert.Content>
        <Alert.Title>Detailed Information</Alert.Title>
        <Alert.Description>
          This is a longer message that provides more detailed information. It demonstrates how the alert component
          handles multiple lines of text and maintains proper spacing and alignment with the icon. The content should
          wrap naturally and remain readable.
        </Alert.Description>
      </Alert.Content>
    </Alert>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert variant="info">
        <Alert.Content>
          <Alert.Title>Information</Alert.Title>
          <Alert.Description>This is an informational message for general notices.</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert variant="warning">
        <Alert.Content>
          <Alert.Title>Warning</Alert.Title>
          <Alert.Description>This is a warning message for cautionary information.</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert variant="danger">
        <Alert.Content>
          <Alert.Title>Danger</Alert.Title>
          <Alert.Description>This is an error message for critical issues.</Alert.Description>
        </Alert.Content>
      </Alert>
    </div>
  ),
};

export const ComplexWithMultipleActions: Story = {
  render: () => (
    <Alert variant="warning">
      <Alert.Content>
        <Alert.Title>Update Available</Alert.Title>
        <Alert.Description>
          A new version of the application is available. We recommend updating to get the latest features and security
          improvements.
        </Alert.Description>
      </Alert.Content>
      <Alert.Actions>
        <Button size="sm">Update Now</Button>
        <Button size="sm" variant="secondary">
          Remind Me Later
        </Button>
        <Button size="sm" variant="ghost">
          Skip This Version
        </Button>
      </Alert.Actions>
    </Alert>
  ),
};

export const CustomClassName: Story = {
  render: () => (
    <Alert className="max-w-md" variant="info">
      <Alert.Content>
        <Alert.Title>Custom Styling</Alert.Title>
        <Alert.Description>This alert has a custom className applied to limit its width.</Alert.Description>
      </Alert.Content>
    </Alert>
  ),
};
