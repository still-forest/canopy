import type { Meta, StoryObj } from "@storybook/react-vite";
import { OrigamiIcon } from "lucide-react";
import { useState } from "react";
import { Dialog } from "@/components";
import { Button } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { sampleParagraphText } from "../support/sampleText";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

const SampleContent = () => <Text>{sampleParagraphText[0]}</Text>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Dialog title</Dialog.Title>
          <Dialog.Description>Dialog description</Dialog.Description>
        </Dialog.Header>
        <SampleContent />
      </Dialog.Content>
    </Dialog>
  ),
};

export const NoDescription: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Dialog title</Dialog.Title>
        </Dialog.Header>
        <SampleContent />
      </Dialog.Content>
    </Dialog>
  ),
};

export const NoTitleOrDescription: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Content>
        <SampleContent />
      </Dialog.Content>
    </Dialog>
  ),
};

export const CustomTrigger: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger
        render={
          <Button icon={<OrigamiIcon />} variant="info">
            Open dialog
          </Button>
        }
      />
      <Dialog.Content>
        <SampleContent />
      </Dialog.Content>
    </Dialog>
  ),
};

export const SimpleTrigger: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger render={<Text className="cursor-pointer hover:underline">Open modal</Text>} />
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Dialog title</Dialog.Title>
          <Dialog.Description>Dialog description</Dialog.Description>
        </Dialog.Header>
        <SampleContent />
      </Dialog.Content>
    </Dialog>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Flex gap="4">
        <Button onClick={() => setOpen(true)}>External trigger</Button>
        <Dialog onOpenChange={setOpen} open={open}>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog title</Dialog.Title>
              <Dialog.Description>Dialog description</Dialog.Description>
            </Dialog.Header>
            <SampleContent />
          </Dialog.Content>
        </Dialog>
      </Flex>
    );
  },
};
