import { sampleParagraphText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/buttons";
import { Flex } from "@/layout";
import { Drawer } from "@/presentation";
import { Text } from "@/typography";

const meta: Meta<typeof Drawer> = {
  title: "Presentation/Drawer",
  component: Drawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <Drawer.Trigger render={<Button>Open sheet</Button>} />
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Drawer title</Drawer.Title>
          <Drawer.Description>This is a description of the sheet content.</Drawer.Description>
        </Drawer.Header>
        <Drawer.Body>
          <Text size="sm">{sampleParagraphText[0]}</Text>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Flex gap="4">
        <Button onClick={() => setOpen(!open)}>External trigger</Button>
        <Drawer onOpenChange={setOpen} open={open}>
          <Drawer.Trigger render={<Button>Inline trigger</Button>} />
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Controlled sheet</Drawer.Title>
              <Drawer.Description>Opened via external state.</Drawer.Description>
            </Drawer.Header>
            <Drawer.Body>
              <Text size="sm">{sampleParagraphText[0]}</Text>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer>
      </Flex>
    );
  },
};

export const NoHeader: Story = {
  render: () => (
    <Drawer>
      <Drawer.Trigger render={<Button>Open sheet</Button>} />
      <Drawer.Content>
        <Drawer.Body>
          <Text size="sm">A simple sheet with no header, title, or description.</Text>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer>
  ),
};
