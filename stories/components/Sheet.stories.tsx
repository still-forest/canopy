import { sampleParagraphText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/buttons";
import { Sheet } from "@/components";
import { Flex } from "@/layout";
import { Text } from "@/typography";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger render={<Button>Open sheet</Button>} />
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Sheet title</Sheet.Title>
          <Sheet.Description>This is a description of the sheet content.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Text size="sm">{sampleParagraphText[0]}</Text>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger render={<Button>Open sheet</Button>} />
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Sheet title</Sheet.Title>
          <Sheet.Description>A sheet with header, body, and footer sections.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Text size="sm">{sampleParagraphText[0]}</Text>
        </Sheet.Body>
        <Sheet.Footer>
          <Flex gap="2" justify="end">
            <Sheet.Close render={<Button variant="ghost">Cancel</Button>} />
            <Button>Save changes</Button>
          </Flex>
        </Sheet.Footer>
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
            <Sheet.Header>
              <Sheet.Title>Sheet from {side}</Sheet.Title>
            </Sheet.Header>
            <Sheet.Body>
              <Text size="sm">{sampleParagraphText[0]}</Text>
            </Sheet.Body>
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
        <Sheet.Header>
          <Sheet.Title>No close button</Sheet.Title>
          <Sheet.Description>Click the overlay to close.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Text size="sm">{sampleParagraphText[0]}</Text>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet>
  ),
};

export const NoOverlay: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger render={<Button>Open sheet</Button>} />
      <Sheet.Content showOverlay={false}>
        <Sheet.Header>
          <Sheet.Title>No overlay</Sheet.Title>
          <Sheet.Description>This sheet has no backdrop overlay.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Text size="sm">{sampleParagraphText[0]}</Text>
        </Sheet.Body>
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
            <Sheet.Header>
              <Sheet.Title>Controlled sheet</Sheet.Title>
              <Sheet.Description>Opened via external state.</Sheet.Description>
            </Sheet.Header>
            <Sheet.Body>
              <Text size="sm">{sampleParagraphText[0]}</Text>
            </Sheet.Body>
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
