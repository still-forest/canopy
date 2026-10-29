import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/buttons";
import { Flex } from "@/layout";
import { SimpleDialog } from "@/presentation";
import { Text } from "@/typography";

const meta: Meta<typeof SimpleDialog> = {
  title: "Presentation/SimpleDialog",
  component: SimpleDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof SimpleDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  description: "SimpleDialog description",
  title: "SimpleDialog title",
  trigger: <Button>Open modal</Button>,
};

const SampleContent = () => <Text>SimpleDialog content</Text>;

export const Default: Story = {
  render: () => (
    <SimpleDialog {...defaultProps}>
      <SampleContent />
    </SimpleDialog>
  ),
};

export const NoTitle: Story = {
  render: () => (
    <SimpleDialog {...defaultProps} description="SimpleDialog description">
      <SampleContent />
    </SimpleDialog>
  ),
};

export const NoDescription: Story = {
  render: () => (
    <SimpleDialog {...defaultProps} title="SimpleDialog title">
      <SampleContent />
    </SimpleDialog>
  ),
};

export const NoTitleOrDescription: Story = {
  render: () => (
    <SimpleDialog {...defaultProps}>
      <SampleContent />
    </SimpleDialog>
  ),
};

export const SimpleTrigger: Story = {
  render: () => (
    <SimpleDialog {...defaultProps} trigger={<Text className="cursor-pointer hover:underline">Open modal</Text>}>
      <SampleContent />
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
          {...defaultProps}
          onOpenChange={setOpen}
          open={open}
          trigger={<Button outline>Internal trigger</Button>}
        >
          <SampleContent />
        </SimpleDialog>
      </Flex>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <Flex gap="4">
      <SimpleDialog {...defaultProps} size="default" trigger={<Button>Default size</Button>}>
        <SampleContent />
      </SimpleDialog>
      <SimpleDialog {...defaultProps} size="xl" trigger={<Button>Size = 'xl'</Button>}>
        <SampleContent />
      </SimpleDialog>
      <SimpleDialog {...defaultProps} size="2xl" trigger={<Button>Size = '2xl'</Button>}>
        <SampleContent />
      </SimpleDialog>
      <SimpleDialog {...defaultProps} size="3xl" trigger={<Button>Size = '3xl'</Button>}>
        <SampleContent />
      </SimpleDialog>
      <SimpleDialog {...defaultProps} size="4xl" trigger={<Button>Size = '4xl'</Button>}>
        <SampleContent />
      </SimpleDialog>
      <SimpleDialog {...defaultProps} size="full" trigger={<Button>Size = 'full'</Button>}>
        <SampleContent />
      </SimpleDialog>
    </Flex>
  ),
};
