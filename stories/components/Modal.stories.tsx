import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "@/components";
import { Button } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <Flex justify="center">
        <Story />
      </Flex>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal trigger={<Button>Open modal</Button>} title="Modal title" description="Modal description">
      <Text>Modal content</Text>
    </Modal>
  ),
};

export const NoTitle: Story = {
  render: () => (
    <Modal trigger={<Button>Open modal</Button>} description="Modal description">
      <Text>Modal content</Text>
    </Modal>
  ),
};

export const NoDescription: Story = {
  render: () => (
    <Modal trigger={<Button>Open modal</Button>} title="Modal title">
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
      trigger={<Text className="cursor-pointer hover:underline">Open modal</Text>}
      title="Modal title"
      description="Modal description"
    >
      <Text>Modal content</Text>
    </Modal>
  ),
};
