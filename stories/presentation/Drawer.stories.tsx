import { exceptionallyLongText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { OrigamiIcon } from "lucide-react";
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

const SampleHeader = () => (
  <Drawer.Header>
    <Drawer.Title>Drawer title</Drawer.Title>
    <Drawer.Description>This is a description of the drawer content.</Drawer.Description>
  </Drawer.Header>
);

const SampleBody = () => (
  <Drawer.Body>
    <Text size="sm">{exceptionallyLongText}</Text>
  </Drawer.Body>
);

const SampleFooter = () => (
  <Drawer.Footer>
    <Drawer.Close render={<Button>Close</Button>} />
  </Drawer.Footer>
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
    <Drawer>
      <Drawer.Trigger>Open drawer</Drawer.Trigger>
      <Drawer.Content>
        <SampleContent />
      </Drawer.Content>
    </Drawer>
  ),
};

export const SwipeDirection: Story = {
  render: () => (
    <Flex gap="4">
      {(["right", "left", "up", "down"] as const).map((direction) => (
        <Drawer key={direction} swipeDirection={direction}>
          <Drawer.Trigger render={<Button>{direction}</Button>} />
          <Drawer.Content>
            <SampleContent />
          </Drawer.Content>
        </Drawer>
      ))}
    </Flex>
  ),
};

export const NoHeader: Story = {
  render: () => (
    <Drawer>
      <Drawer.Trigger>Open drawer</Drawer.Trigger>
      <Drawer.Content>
        <SampleBody />
        <SampleFooter />
      </Drawer.Content>
    </Drawer>
  ),
};

export const CustomTrigger: Story = {
  render: () => (
    <Drawer>
      <Drawer.Trigger
        render={
          <Button icon={<OrigamiIcon />} variant="info">
            Open drawer
          </Button>
        }
      />
      <Drawer.Content>
        <SampleContent />
      </Drawer.Content>
    </Drawer>
  ),
};

export const SimpleTrigger: Story = {
  render: () => (
    <Drawer>
      <Drawer.Trigger
        nativeButton={false}
        render={<Text className="cursor-pointer hover:underline">Open drawer</Text>}
      />
      <Drawer.Content>
        <SampleContent />
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
            <SampleContent />
          </Drawer.Content>
        </Drawer>
      </Flex>
    );
  },
};
