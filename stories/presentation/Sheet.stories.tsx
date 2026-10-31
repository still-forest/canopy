import { exceptionallyLongText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/buttons";
import { Flex } from "@/layout";
import { Sheet } from "@/presentation";
import { Text } from "@/typography";

const meta: Meta<typeof Sheet> = {
  title: "Presentation/Sheet",
  component: Sheet,
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof meta>;

const SampleFooter = () => (
  <Sheet.Footer>
    <Flex gap="2" justify="end">
      <Sheet.Close render={<Button variant="ghost">Cancel</Button>} />
      <Button>Save</Button>
    </Flex>
  </Sheet.Footer>
);

const SampleContent = () => (
  <>
    <Sheet.Header>
      <Sheet.Title>Sheet title</Sheet.Title>
      <Sheet.Description>This is a description of the sheet content.</Sheet.Description>
    </Sheet.Header>
    <Sheet.Body>
      <Text size="sm">{exceptionallyLongText}</Text>
    </Sheet.Body>
    <SampleFooter />
  </>
);

export const Default: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger render={<Button>Open sheet</Button>} />
      <Sheet.Content>
        <SampleContent />
      </Sheet.Content>
    </Sheet>
  ),
};

export const Side: Story = {
  render: () => (
    <Flex className="flex-wrap" gap="2">
      {(["right", "left", "top", "bottom"] as const).map((side) => (
        <Sheet key={side}>
          <Sheet.Trigger
            render={
              <Button outline size="sm">
                {side}
              </Button>
            }
          />
          <Sheet.Content side={side}>
            <SampleContent />
          </Sheet.Content>
        </Sheet>
      ))}
    </Flex>
  ),
};

export const NoCloseButton: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger render={<Button>Open sheet</Button>} />
      <Sheet.Content showCloseButton={false}>
        <SampleContent />
      </Sheet.Content>
    </Sheet>
  ),
};

export const NoOverlay: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger render={<Button>Open sheet</Button>} />
      <Sheet.Content showOverlay={false}>
        <SampleContent />
      </Sheet.Content>
    </Sheet>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Flex gap="4">
        <Button onClick={() => setOpen(!open)}>External trigger</Button>
        <Sheet onOpenChange={setOpen} open={open}>
          <Sheet.Trigger render={<Button>Inline trigger</Button>} />
          <Sheet.Content>
            <SampleContent />
          </Sheet.Content>
        </Sheet>
      </Flex>
    );
  },
};

export const NoHeader: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger render={<Button>Open sheet</Button>} />
      <Sheet.Content>
        <Sheet.Body>
          <Text size="sm">A simple sheet with no header, title, or description.</Text>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet>
  ),
};

export const Scrolling: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger render={<Button>Open sheet</Button>} />
      <Sheet.Content>
        <SampleContent />
      </Sheet.Content>
    </Sheet>
  ),
};

export const Size: Story = {
  render: () => (
    <Flex gap="4">
      <Sheet>
        <Sheet.Trigger render={<Button>Default size</Button>} />
        <Sheet.Content>
          <SampleContent />
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger render={<Button>Size = 'lg'</Button>} />
        <Sheet.Content size="lg">
          <SampleContent />
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger render={<Button>Size = 'xl'</Button>} />
        <Sheet.Content size="xl">
          <SampleContent />
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger render={<Button>Size = '2xl'</Button>} />
        <Sheet.Content size="2xl">
          <SampleContent />
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger render={<Button>Size = '3xl'</Button>} />
        <Sheet.Content size="3xl">
          <SampleContent />
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger render={<Button>Size = '4xl'</Button>} />
        <Sheet.Content size="4xl">
          <SampleContent />
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger render={<Button>Size = 'full'</Button>} />
        <Sheet.Content size="full">
          <SampleContent />
        </Sheet.Content>
      </Sheet>
    </Flex>
  ),
};
