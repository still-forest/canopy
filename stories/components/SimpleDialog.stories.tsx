import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/buttons";
import { SimpleDialog } from "@/components";
import { Flex } from "@/layout";
import { Text } from "@/typography";

const meta: Meta<typeof SimpleDialog> = {
  title: "Components/SimpleDialog",
  component: SimpleDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof SimpleDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SimpleDialog
      description="SimpleDialog description"
      title="SimpleDialog title"
      trigger={<Button>Open modal</Button>}
    >
      <Text>SimpleDialog content</Text>
    </SimpleDialog>
  ),
};

export const NoTitle: Story = {
  render: () => (
    <SimpleDialog description="SimpleDialog description" trigger={<Button>Open modal</Button>}>
      <Text>SimpleDialog content</Text>
    </SimpleDialog>
  ),
};

export const NoDescription: Story = {
  render: () => (
    <SimpleDialog title="SimpleDialog title" trigger={<Button>Open modal</Button>}>
      <Text>SimpleDialog content</Text>
    </SimpleDialog>
  ),
};

export const NoTitleOrDescription: Story = {
  render: () => (
    <SimpleDialog trigger={<Button>Open modal</Button>}>
      <Text>SimpleDialog content</Text>
    </SimpleDialog>
  ),
};

export const SimpleTrigger: Story = {
  render: () => (
    <SimpleDialog
      description="SimpleDialog description"
      title="SimpleDialog title"
      trigger={<Text className="cursor-pointer hover:underline">Open modal</Text>}
    >
      <Text>SimpleDialog content</Text>
    </SimpleDialog>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Flex gap="4">
        <Button onClick={() => setOpen(true)}>External trigger</Button>
        <SimpleDialog
          description="SimpleDialog description"
          onOpenChange={setOpen}
          open={open}
          title="SimpleDialog title"
          trigger={<Button outline>Internal trigger</Button>}
        >
          <Text>SimpleDialog content</Text>
        </SimpleDialog>
      </Flex>
    );
  },
};
