import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Menubar } from "@/components";

const meta: Meta<typeof Menubar> = {
  title: "Components/MenuBar",
  component: Menubar,
  tags: ["autodocs"],
} satisfies Meta<typeof Menubar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>New File</Menubar.Item>
          <Menubar.Item>Open File</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Save</Menubar.Item>
          <Menubar.Item>Save As</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Exit</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Undo</Menubar.Item>
          <Menubar.Item>Redo</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Cut</Menubar.Item>
          <Menubar.Item>Copy</Menubar.Item>
          <Menubar.Item>Paste</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Zoom In</Menubar.Item>
          <Menubar.Item>Zoom Out</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Full Screen</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            New File
            <Menubar.Shortcut>⌘N</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            Open File
            <Menubar.Shortcut>⌘O</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>
            Save
            <Menubar.Shortcut>⌘S</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            Save As
            <Menubar.Shortcut>⇧⌘S</Menubar.Shortcut>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            Undo
            <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            Redo
            <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>
            Cut
            <Menubar.Shortcut>⌘X</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            Copy
            <Menubar.Shortcut>⌘C</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            Paste
            <Menubar.Shortcut>⌘V</Menubar.Shortcut>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger>Account</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Group>
            <Menubar.Label>My Account</Menubar.Label>
            <Menubar.Item>Profile</Menubar.Item>
            <Menubar.Item>Billing</Menubar.Item>
            <Menubar.Item>Settings</Menubar.Item>
          </Menubar.Group>
          <Menubar.Separator />
          <Menubar.Group>
            <Menubar.Label>Team</Menubar.Label>
            <Menubar.Item>Invite Members</Menubar.Item>
            <Menubar.Item>Manage Team</Menubar.Item>
          </Menubar.Group>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Help</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Documentation</Menubar.Item>
          <Menubar.Item>Support</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>About</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};

export const WithCheckboxItems: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showActivityBar, setShowActivityBar] = useState(false);
    const [showPanel, setShowPanel] = useState(false);

    return (
      <Menubar>
        <Menubar.Menu>
          <Menubar.Trigger>View</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Group>
              <Menubar.Label>Appearance</Menubar.Label>
              <Menubar.CheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
                Status Bar
              </Menubar.CheckboxItem>
              <Menubar.CheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
                Activity Bar
              </Menubar.CheckboxItem>
              <Menubar.CheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
                Panel
              </Menubar.CheckboxItem>
            </Menubar.Group>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );
  },
};

export const WithRadioItems: Story = {
  render: () => {
    const [value, setValue] = useState("comfortable");

    return (
      <Menubar>
        <Menubar.Menu>
          <Menubar.Trigger>Density</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Group>
              <Menubar.Label>Row Density</Menubar.Label>
            </Menubar.Group>
            <Menubar.RadioGroup onValueChange={setValue} value={value}>
              <Menubar.RadioItem value="compact">Compact</Menubar.RadioItem>
              <Menubar.RadioItem value="comfortable">Comfortable</Menubar.RadioItem>
              <Menubar.RadioItem value="spacious">Spacious</Menubar.RadioItem>
            </Menubar.RadioGroup>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );
  },
};

export const WithSubmenu: Story = {
  render: () => (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>New File</Menubar.Item>
          <Menubar.Item>Open File</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Sub>
            <Menubar.SubTrigger>Share</Menubar.SubTrigger>
            <Menubar.SubContent>
              <Menubar.Item>Email</Menubar.Item>
              <Menubar.Item>Messages</Menubar.Item>
              <Menubar.Item>Airdrop</Menubar.Item>
            </Menubar.SubContent>
          </Menubar.Sub>
          <Menubar.Separator />
          <Menubar.Item>Print</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Undo</Menubar.Item>
          <Menubar.Item>Redo</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Sub>
            <Menubar.SubTrigger>Find</Menubar.SubTrigger>
            <Menubar.SubContent>
              <Menubar.Item>Find</Menubar.Item>
              <Menubar.Item>Find and Replace</Menubar.Item>
              <Menubar.Item>Find in Files</Menubar.Item>
            </Menubar.SubContent>
          </Menubar.Sub>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>New File</Menubar.Item>
          <Menubar.Item>Save</Menubar.Item>
          <Menubar.Item disabled>Save As (disabled)</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Export</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};

export const WithMenuSeparator: Story = {
  render: () => (
    <Menubar>
      <Menubar.TriggerGroup>
        <Menubar.Menu>
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>New</Menubar.Item>
            <Menubar.Item>Open</Menubar.Item>
            <Menubar.Item>Save</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>Undo</Menubar.Item>
            <Menubar.Item>Redo</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar.TriggerGroup>
      <Menubar.MenuSeparator />
      <Menubar.TriggerGroup>
        <Menubar.Menu>
          <Menubar.Trigger>Window</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>Minimize</Menubar.Item>
            <Menubar.Item>Zoom</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>Help</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>Documentation</Menubar.Item>
            <Menubar.Item>About</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar.TriggerGroup>
    </Menubar>
  ),
};

export const OutlineVariant: Story = {
  render: () => (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger variant="outline">File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>New File</Menubar.Item>
          <Menubar.Item>Open File</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Save</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger variant="outline">Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Undo</Menubar.Item>
          <Menubar.Item>Redo</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger variant="outline">View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Zoom In</Menubar.Item>
          <Menubar.Item>Zoom Out</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};
