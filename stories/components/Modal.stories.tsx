import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/buttons";
import { Modal } from "@/components";
import { Flex } from "@/layout";
import { Text } from "@/typography";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal description="Modal description" title="Modal title" trigger={<Button>Open modal</Button>}>
      <Text>Modal content</Text>
    </Modal>
  ),
};

export const NoTitle: Story = {
  render: () => (
    <Modal description="Modal description" trigger={<Button>Open modal</Button>}>
      <Text>Modal content</Text>
    </Modal>
  ),
};

export const NoDescription: Story = {
  render: () => (
    <Modal title="Modal title" trigger={<Button>Open modal</Button>}>
      <Text>Modal content</Text>
    </Modal>
  ),
};

export const NoTitleOrDescription: Story = {
  render: () => (
    <Modal trigger={<Button>Open modal</Button>}>
      <Text>Modal content</Text>
    </Modal>
  ),
};

export const SimpleTrigger: Story = {
  render: () => (
    <Modal
      description="Modal description"
      title="Modal title"
      trigger={<Text className="cursor-pointer hover:underline">Open modal</Text>}
    >
      <Text>Modal content</Text>
    </Modal>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Flex gap="4">
        <Button onClick={() => setOpen(true)}>External trigger</Button>
        <Modal
          description="Modal description"
          onOpenChange={setOpen}
          open={open}
          title="Modal title"
          trigger={<Button outline>Internal trigger</Button>}
        >
          <Text>Modal content</Text>
        </Modal>
      </Flex>
    );
  },
};
