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
  render: () => <Alert description="This is an informational message." title="Information" variant="info" />,
};

export const Success: Story = {
  render: () => <Alert description="This is a success message." title="Success" variant="success" />,
};

export const Warning: Story = {
  render: () => <Alert description="This is a warning message." title="Warning" variant="warning" />,
};

export const Danger: Story = {
  render: () => <Alert description="This is a danger message." title="Danger" variant="danger" />,
};

export const WithoutTitle: Story = {
  render: () => <Alert description="This alert only has a description without a title." variant="info" />,
};

export const WithoutDescription: Story = {
  render: () => <Alert title="Just a Title" variant="info" />,
};

export const WithSingleAction: Story = {
  render: () => (
    <Alert
      actions={<Button size="sm">Retry</Button>}
      description="An error occurred that requires your attention."
      title="Critical Danger"
      variant="danger"
    />
  ),
};

export const WithMultipleActions: Story = {
  render: () => (
    <Alert
      actions={
        <>
          <Button size="sm">Take Action</Button>{" "}
          <Button size="sm" variant="ghost">
            Dismiss
          </Button>
        </>
      }
      description="Please review this important information and take action."
      title="Action Required"
      variant="warning"
    />
  ),
};

export const LongContent: Story = {
  render: () => (
    <Alert
      description="This is a longer message that provides more detailed information. It demonstrates how the alert component handles multiple lines of text and maintains proper spacing and alignment with the icon. The content should wrap naturally and remain readable."
      title="Detailed Information"
      variant="info"
    />
  ),
};

export const WithChildren: Story = {
  render: () => (
    <Alert title="Detailed Information" variant="info">
      <i>This is a longer message that provides more detailed information.</i>
      <ul className="list-disc pl-4">
        <li>
          It demonstrates how the alert component handles multiple lines of text and maintains proper spacing and
          alignment with the icon.
        </li>
        <li>The content should wrap naturally and remain readable.</li>
      </ul>
    </Alert>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert description="This is an informational message for general notices." title="Information" variant="info" />
      <Alert description="This is a success message for successful operations." title="Success" variant="success" />
      <Alert description="This is a warning message for cautionary information." title="Warning" variant="warning" />
      <Alert description="This is an error message for critical issues." title="Danger" variant="danger" />
    </div>
  ),
};

export const ComplexWithMultipleActions: Story = {
  render: () => (
    <Alert
      actions={
        <>
          <Button size="sm">Update Now</Button>{" "}
          <Button size="sm" variant="secondary">
            Remind Me Later
          </Button>{" "}
          <Button size="sm" variant="ghost">
            Skip This Version
          </Button>
        </>
      }
      description="A new version of the application is available. We recommend updating to get the latest features and security improvements."
      title="Update Available"
      variant="warning"
    />
  ),
};

export const CustomClassName: Story = {
  render: () => (
    <Alert
      className="max-w-md"
      description="This alert has a custom className applied to limit its width."
      title="Custom Styling"
      variant="info"
    />
  ),
};
