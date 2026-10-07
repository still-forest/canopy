import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/buttons";
import { DropdownMenu, Menubar } from "@/components";
import { ComboboxInput, DatePickerField, type SelectOption, SelectPicker, type SelectPickerOption } from "@/forms";
import { Flex } from "@/layout";
import { Dialog, Drawer, Popover, Sheet, Tooltip } from "@/presentation";
import { Text } from "@/typography";

const meta: Meta = {
  title: "Testing/ZIndexes",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const SELECT_OPTIONS: SelectPickerOption[] = [
  { value: "earth", label: "Earth" },
  { value: "wind", label: "Wind" },
  { value: "fire", label: "Fire" },
  { value: "water", label: "Water" },
];

const COMBOBOX_OPTIONS: SelectOption[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Dragonfruit", value: "dragonfruit" },
  { label: "Elderberry", value: "elderberry" },
];

/**
 * Renders all six layered controls together so each can be opened and
 * checked against whatever surface (page, Sheet, Dialog, Drawer) it's
 * nested inside — confirming popups/tooltips still stack above their host.
 */
const LayeredControls = () => {
  const [selectValue, setSelectValue] = useState<string | undefined>();
  const [comboboxSelected, setComboboxSelected] = useState<string[]>([]);

  return (
    <Flex direction="col" gap="6">
      <Flex direction="col" gap="2">
        <Text size="sm" variant="muted">
          SelectPicker
        </Text>
        <SelectPicker name="z-index-select" onChange={setSelectValue} options={SELECT_OPTIONS} value={selectValue} />
      </Flex>

      <Flex direction="col" gap="2">
        <Text size="sm" variant="muted">
          Tooltip
        </Text>
        <Tooltip>
          <Tooltip.Trigger render={<Button outline>Hover me</Button>} />
          <Tooltip.Content>This is a tooltip</Tooltip.Content>
        </Tooltip>
      </Flex>

      <Flex direction="col" gap="2">
        <Text size="sm" variant="muted">
          DropdownMenu
        </Text>
        <DropdownMenu>
          <DropdownMenu.Trigger>Options</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item
              onClick={() => {
                window.alert("Profile");
              }}
            >
              Profile
            </DropdownMenu.Item>
            <DropdownMenu.Item
              onClick={() => {
                window.alert("Settings");
              }}
            >
              Settings
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item
              onClick={() => {
                window.alert("Log out");
              }}
            >
              Log out
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </Flex>

      <Flex direction="col" gap="2">
        <Text size="sm" variant="muted">
          ComboboxInput
        </Text>
        <ComboboxInput onChange={setComboboxSelected} options={COMBOBOX_OPTIONS} selectedOptions={comboboxSelected} />
      </Flex>

      <Flex direction="col" gap="2">
        <Text size="sm" variant="muted">
          MenuBar
        </Text>
        <Menubar>
          <Menubar.Menu>
            <Menubar.Trigger>File</Menubar.Trigger>
            <Menubar.Content>
              <Menubar.Item
                onClick={() => {
                  window.alert("New File");
                }}
              >
                New File
              </Menubar.Item>
              <Menubar.Item
                onClick={() => {
                  window.alert("Open File");
                }}
              >
                Open File
              </Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item
                onClick={() => {
                  window.alert("Save");
                }}
              >
                Save
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Menu>
        </Menubar>
      </Flex>

      <Flex direction="col" gap="2">
        <Text size="sm" variant="muted">
          DatePicker
        </Text>
        <DatePickerField onDateSelection={() => {}} />
      </Flex>
    </Flex>
  );
};

export const OnPage: Story = {
  render: () => <LayeredControls />,
};

export const InSheet: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger render={<Button>Open sheet</Button>} />
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Z-index testing</Sheet.Title>
          <Sheet.Description>Open each control below and confirm it renders above the sheet.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <LayeredControls />
        </Sheet.Body>
      </Sheet.Content>
    </Sheet>
  ),
};

export const InDialog: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Z-index testing</Dialog.Title>
          <Dialog.Description>Open each control below and confirm it renders above the dialog.</Dialog.Description>
        </Dialog.Header>
        <LayeredControls />
      </Dialog.Content>
    </Dialog>
  ),
};

export const InDrawer: Story = {
  render: () => (
    <Drawer>
      <Drawer.Trigger render={<Button>Open drawer</Button>} />
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Z-index testing</Drawer.Title>
          <Drawer.Description>Open each control below and confirm it renders above the drawer.</Drawer.Description>
        </Drawer.Header>
        <Drawer.Body>
          <LayeredControls />
        </Drawer.Body>
      </Drawer.Content>
    </Drawer>
  ),
};

const SheetOpenedFrom = ({ trigger }: { trigger: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open sheet</Button>
      <Sheet onOpenChange={setOpen} open={open}>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Opened from {trigger}</Sheet.Title>
            <Sheet.Description>
              This sheet should render above the {trigger}, and its own controls above it.
            </Sheet.Description>
          </Sheet.Header>
          <Sheet.Body>
            <LayeredControls />
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
    </>
  );
};

/**
 * The reverse of InSheet: the Sheet is rendered inside the Popover's content,
 * so it is nested in the Popover's React tree and must still stack above it.
 * Right-aligned so the popover overlaps the sheet, as with a header info menu.
 */
export const SheetFromPopover: Story = {
  render: () => (
    <Flex justify="end">
      <Popover>
        <Popover.Trigger render={<Button outline>Open popover</Button>} />
        <Popover.Content>
          <SheetOpenedFrom trigger="popover" />
        </Popover.Content>
      </Popover>
    </Flex>
  ),
};

export const DialogFromPopover: Story = {
  render: () => (
    <Flex justify="end">
      <Popover>
        <Popover.Trigger render={<Button outline>Open popover</Button>} />
        <Popover.Content>
          <Dialog>
            <Dialog.Trigger>Open dialog</Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Opened from popover</Dialog.Title>
                <Dialog.Description>This dialog should render above the popover.</Dialog.Description>
              </Dialog.Header>
              <LayeredControls />
            </Dialog.Content>
          </Dialog>
        </Popover.Content>
      </Popover>
    </Flex>
  ),
};
