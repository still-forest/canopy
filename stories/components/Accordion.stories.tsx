import type { Meta, StoryObj } from "@storybook/react-vite";

import { Accordion, type AccordionProps } from "@/components/Accordion";
import { DEFAULT_DECORATOR_WITH_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  decorators: [DEFAULT_DECORATOR_WITH_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

const defaultRender = (args: AccordionProps) => (
  <Accordion {...args}>
    <Accordion.Item value="item-1">
      <Accordion.Trigger>Are you insane?</Accordion.Trigger>
      <Accordion.Content>
        Now I... I finally have time to do what I've always wanted: write the great American novel. Mine is about a
        futuristic amusement park where dinosaurs are brought to life through advanced cloning techniques. I call it
        "Billy and the Cloneasaurus."
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
      <Accordion.Trigger>Are you sure it's on!?</Accordion.Trigger>
      <Accordion.Content>I can't hear a thing!</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-3">
      <Accordion.Trigger>Want me to zinc your sniffer?</Accordion.Trigger>
      <Accordion.Content>
        I'll have a Shirley... No, a virgin... No, a children's... Oh, what the heck? You only live once. Give me a
        white wine spritzer!
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
  },
  render: defaultRender,
};

export const WithDefaultValue: Story = {
  args: {
    type: "single",
    collapsible: true,
    defaultValue: "item-3",
  },
  render: defaultRender,
};

export const Multiple: Story = {
  args: {
    type: "multiple",
  },
  render: defaultRender,
};

export const MultipleWithDefaultValues: Story = {
  args: {
    type: "multiple",
    defaultValue: ["item-1", "item-3"],
  },
  render: defaultRender,
};
