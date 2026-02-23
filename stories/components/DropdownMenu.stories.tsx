import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { DropdownMenu } from "@/components";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger>Options</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Profile</DropdownMenu.Item>
        <DropdownMenu.Item>Settings</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Log out</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger>Edit</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          Undo
          <DropdownMenu.Shortcut>⌘Z</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          Redo
          <DropdownMenu.Shortcut>⇧⌘Z</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          Cut
          <DropdownMenu.Shortcut>⌘X</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          Copy
          <DropdownMenu.Shortcut>⌘C</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          Paste
          <DropdownMenu.Shortcut>⌘V</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger>Account</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <DropdownMenu.Label>My Account</DropdownMenu.Label>
          <DropdownMenu.Item>Profile</DropdownMenu.Item>
          <DropdownMenu.Item>Billing</DropdownMenu.Item>
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Label>Team</DropdownMenu.Label>
          <DropdownMenu.Item>Invite members</DropdownMenu.Item>
          <DropdownMenu.Item>Manage team</DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const WithCheckboxItems: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showActivityBar, setShowActivityBar] = useState(false);
    const [showPanel, setShowPanel] = useState(false);

    return (
      <DropdownMenu>
        <DropdownMenu.Trigger>View</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <DropdownMenu.Label>Appearance</DropdownMenu.Label>
            <DropdownMenu.CheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
              Status Bar
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
              Activity Bar
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
              Panel
            </DropdownMenu.CheckboxItem>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};

export const WithRadioItems: Story = {
  render: () => {
    const [value, setValue] = useState("comfortable");

    return (
      <DropdownMenu>
        <DropdownMenu.Trigger>Density</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <DropdownMenu.Label>Row Density</DropdownMenu.Label>
          </DropdownMenu.Group>
          <DropdownMenu.RadioGroup onValueChange={setValue} value={value}>
            <DropdownMenu.RadioItem value="compact">Compact</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="comfortable">Comfortable</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="spacious">Spacious</DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};

export const WithSubmenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger>More</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>New Tab</DropdownMenu.Item>
        <DropdownMenu.Item>New Window</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Email</DropdownMenu.Item>
            <DropdownMenu.Item>Messages</DropdownMenu.Item>
            <DropdownMenu.Item>Airdrop</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Print</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const DestructiveItem: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger>Actions</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item variant="destructive">Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger>File</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>New File</DropdownMenu.Item>
        <DropdownMenu.Item>Save</DropdownMenu.Item>
        <DropdownMenu.Item disabled>Save As (disabled)</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Export</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};
