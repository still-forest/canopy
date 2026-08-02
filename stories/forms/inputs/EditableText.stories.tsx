import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditableText } from "@/forms";
import { Flex } from "@/layout";

const meta: Meta<typeof EditableText> = {
  title: "Forms/Inputs/EditableText",
  component: EditableText,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof EditableText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "default",
    value: "Flanders was a zombie?",
  },
};

export const Editing: Story = {
  args: {
    name: "editing",
    value: "Flanders was a zombie?",
    isEditing: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <EditableText name="extra-small" size="xs" value="Extra Small (xs)" />
      <EditableText name="small" size="sm" value="Small (sm)" />
      <EditableText name="medium" size="md" value="Medium (md) — default" />
      <EditableText name="large" size="lg" value="Large (lg)" />
      <EditableText name="extra-large" size="xl" value="Extra Large (xl)" />
    </Flex>
  ),
};
