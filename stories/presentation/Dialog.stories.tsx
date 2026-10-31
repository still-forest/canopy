import { exceptionallyLongText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { OrigamiIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/buttons";
import { Flex } from "@/layout";
import { Dialog } from "@/presentation";
import { Text } from "@/typography";

const meta: Meta<typeof Dialog> = {
  title: "Presentation/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

const ButtonTrigger = ({ label }: { label: string }) => <Dialog.Trigger render={<Button>{label}</Button>} />;

const SampleHeader = () => (
  <Dialog.Header>
    <Dialog.Title>Dialog title</Dialog.Title>
    <Dialog.Description>Dialog description</Dialog.Description>
  </Dialog.Header>
);

const SampleBody = () => (
  <Dialog.Body>
    <Text>{exceptionallyLongText}</Text>
  </Dialog.Body>
);

const SampleFooter = () => (
  <Dialog.Footer>
    <Dialog.Close render={<Button>Close</Button>} />
  </Dialog.Footer>
);

const SampleContent = () => (
  <>
    <SampleHeader />
    <SampleBody />
    <SampleFooter />
  </>
);

export const Default: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Content>
        <SampleContent />
      </Dialog.Content>
    </Dialog>
  ),
};

export const Size: Story = {
  render: () => (
    <Flex gap="4">
      <Dialog>
        <ButtonTrigger label="Default size" />
        <Dialog.Content>
          <SampleContent />
        </Dialog.Content>
      </Dialog>
      <Dialog>
        <ButtonTrigger label="Size = 'lg'" />
        <Dialog.Content size="lg">
          <SampleContent />
        </Dialog.Content>
      </Dialog>
      <Dialog>
        <ButtonTrigger label="Size = 'xl'" />
        <Dialog.Content size="xl">
          <SampleContent />
        </Dialog.Content>
      </Dialog>
      <Dialog>
        <ButtonTrigger label="Size = '2xl'" />
        <Dialog.Content size="2xl">
          <SampleContent />
        </Dialog.Content>
      </Dialog>
      <Dialog>
        <ButtonTrigger label="Size = '3xl'" />
        <Dialog.Content size="3xl">
          <SampleContent />
        </Dialog.Content>
      </Dialog>
      <Dialog>
        <ButtonTrigger label="Size = '4xl'" />
        <Dialog.Content size="4xl">
          <SampleContent />
        </Dialog.Content>
      </Dialog>
      <Dialog>
        <ButtonTrigger label="Size = 'full'" />
        <Dialog.Content size="full">
          <SampleContent />
        </Dialog.Content>
      </Dialog>
    </Flex>
  ),
};

export const NoHeader: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Content>
        <SampleBody />
        <SampleFooter />
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
        <SampleBody />
        <SampleFooter />
      </Dialog.Content>
    </Dialog>
  ),
};

export const SimpleTrigger: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger
        nativeButton={false}
        render={<Text className="cursor-pointer hover:underline">Open modal</Text>}
      />
      <Dialog.Content>
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
            <SampleContent />
          </Dialog.Content>
        </Dialog>
      </Flex>
    );
  },
};
