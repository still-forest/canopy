import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/buttons";
import { Flex } from "@/layout";
import { Popover } from "@/presentation";
import { Text } from "@/typography";

const meta: Meta<typeof Popover> = {
  title: "Presentation/Popover",
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger render={<Button>Open popover</Button>} />
      <Popover.Content>
        <Popover.Header>
          <Popover.Title>Popover title</Popover.Title>
          <Popover.Description>This is a description of the popover content.</Popover.Description>
        </Popover.Header>
        <Text size="sm">Additional popover content goes here.</Text>
      </Popover.Content>
    </Popover>
  ),
};

export const NoDescription: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger render={<Button>Open popover</Button>} />
      <Popover.Content>
        <Popover.Header>
          <Popover.Title>Popover title</Popover.Title>
        </Popover.Header>
        <Text size="sm">Content without a description.</Text>
      </Popover.Content>
    </Popover>
  ),
};

export const NoHeader: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger render={<Button>Open popover</Button>} />
      <Popover.Content>
        <Text size="sm">A simple popover with no header, title, or description.</Text>
      </Popover.Content>
    </Popover>
  ),
};

export const Side: Story = {
  render: () => (
    <Flex className="flex-wrap" gap="2">
      {(["bottom", "top", "left", "right"] as const).map((side) => (
        <Popover key={side}>
          <Popover.Trigger
            render={
              <Button outline size="sm">
                {side}
              </Button>
            }
          />
          <Popover.Content side={side}>
            <Popover.Header>
              <Popover.Title>Popover on {side}</Popover.Title>
            </Popover.Header>
          </Popover.Content>
        </Popover>
      ))}
    </Flex>
  ),
};

export const Align: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      {(["start", "center", "end"] as const).map((align) => (
        <Popover key={align}>
          <Popover.Trigger
            render={
              <Button outline size="sm">
                {align}
              </Button>
            }
          />
          <Popover.Content align={align}>
            <Popover.Header>
              <Popover.Title>Aligned to {align}</Popover.Title>
            </Popover.Header>
          </Popover.Content>
        </Popover>
      ))}
    </Flex>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Flex gap="4">
        <Button onClick={() => setOpen(!open)}>External trigger</Button>
        <Popover onOpenChange={setOpen} open={open}>
          <Popover.Trigger render={<Button>Inline trigger</Button>} />
          <Popover.Content>
            <Popover.Header>
              <Popover.Title>Controlled popover</Popover.Title>
              <Popover.Description>Opened via external state.</Popover.Description>
            </Popover.Header>
          </Popover.Content>
        </Popover>
      </Flex>
    );
  },
};

export const DefaultOpen: Story = {
  render: () => (
    <Popover defaultOpen={true}>
      <Popover.Trigger render={<Button>Open by default</Button>} />
      <Popover.Content>
        <Popover.Header>
          <Popover.Title>Open by default</Popover.Title>
          <Popover.Description>This popover starts open but can be closed.</Popover.Description>
        </Popover.Header>
      </Popover.Content>
    </Popover>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger render={<Button>Settings</Button>} />
      <Popover.Content className="w-72">
        <Popover.Header>
          <Popover.Title>Dimensions</Popover.Title>
          <Popover.Description>Set the dimensions for the layer.</Popover.Description>
        </Popover.Header>
        <Flex direction="col" gap="2">
          <Flex gap="4" justify="between">
            <Text size="sm">Width</Text>
            <Text size="sm" variant="muted">
              100%
            </Text>
          </Flex>
          <Flex gap="4" justify="between">
            <Text size="sm">Max. width</Text>
            <Text size="sm" variant="muted">
              300px
            </Text>
          </Flex>
          <Flex gap="4" justify="between">
            <Text size="sm">Height</Text>
            <Text size="sm" variant="muted">
              25px
            </Text>
          </Flex>
          <Flex gap="4" justify="between">
            <Text size="sm">Max. height</Text>
            <Text size="sm" variant="muted">
              none
            </Text>
          </Flex>
        </Flex>
      </Popover.Content>
    </Popover>
  ),
};
