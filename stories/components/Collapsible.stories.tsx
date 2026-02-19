import { DEFAULT_DECORATOR_WITH_WIDTH_MD } from "@stories/support/decorators";
import { sampleParagraphText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronsUpDown } from "lucide-react";
import { Collapsible, type CollapsibleProps } from "@/components/Collapsible";
import { Button } from "@/components/ui/button";
import { Text } from "@/typography";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  decorators: [DEFAULT_DECORATOR_WITH_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof Collapsible>;

const defaultRender = (args: CollapsibleProps) => (
  <Collapsible {...args}>
    <Collapsible.Trigger>Are you insane?</Collapsible.Trigger>
    <Collapsible.Content>
      Now I... I finally have time to do what I've always wanted: write the great American novel. Mine is about a
      futuristic amusement park where dinosaurs are brought to life through advanced cloning techniques. I call it
      "Billy and the Cloneasaurus."
    </Collapsible.Content>
  </Collapsible>
);

export const Default: Story = {
  args: {},
  render: defaultRender,
};

export const OpenByDefault: Story = {
  args: {
    open: true,
  },
  render: defaultRender,
};

export const Styled: Story = {
  args: {},
  render: (args: CollapsibleProps) => (
    <Collapsible className="flex flex-col items-center gap-2" {...args}>
      <Collapsible.Trigger
        render={(props) => (
          <Button className="w-fit" variant="outline" {...props}>
            <Text weight="bold">Are you insane?</Text>
            <ChevronsUpDown />
          </Button>
        )}
      />
      <Collapsible.Content className="flex flex-col gap-2 bg-info/10 p-2">
        {sampleParagraphText.map((paragraph, index) => (
          <Text className="text-sm" key={index}>
            {paragraph}
          </Text>
        ))}
      </Collapsible.Content>
    </Collapsible>
  ),
};
