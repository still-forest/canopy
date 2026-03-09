import type { Meta, StoryObj } from "@storybook/react-vite";
import { TrashIcon, TriangleAlertIcon } from "lucide-react";
import { Button } from "@/buttons";
import { AlertDialog } from "@/components";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialog.Trigger render={<Button>Delete item</Button>} />
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Are you sure?</AlertDialog.Title>
          <AlertDialog.Description>
            This action cannot be undone. This will permanently delete the item.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action variant="destructive">Delete</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  ),
};

export const WithMedia: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialog.Trigger render={<Button variant="destructive">Delete account</Button>} />
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Media>
            <TriangleAlertIcon className="text-destructive" />
          </AlertDialog.Media>
          <AlertDialog.Title>Delete account</AlertDialog.Title>
          <AlertDialog.Description>
            This will permanently delete your account and all associated data. This action cannot be undone.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action variant="destructive">Delete account</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialog.Trigger render={<Button outline>Remove</Button>} />
      <AlertDialog.Content size="sm">
        <AlertDialog.Header>
          <AlertDialog.Title>Remove item?</AlertDialog.Title>
          <AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel size="sm">Cancel</AlertDialog.Cancel>
          <AlertDialog.Action size="sm" variant="destructive">
            Remove
          </AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  ),
};

export const SmallSizeWithMedia: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialog.Trigger render={<Button outline>Delete</Button>} />
      <AlertDialog.Content size="sm">
        <AlertDialog.Header>
          <AlertDialog.Media>
            <TrashIcon className="text-destructive" />
          </AlertDialog.Media>
          <AlertDialog.Title>Delete item?</AlertDialog.Title>
          <AlertDialog.Description>This will permanently remove the item from your account.</AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel size="sm">Cancel</AlertDialog.Cancel>
          <AlertDialog.Action size="sm" variant="destructive">
            Delete
          </AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  ),
};

export const NonDestructive: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialog.Trigger render={<Button>Publish</Button>} />
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Publish changes?</AlertDialog.Title>
          <AlertDialog.Description>Your changes will be visible to all users immediately.</AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Publish</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  ),
};
