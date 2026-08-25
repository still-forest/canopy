import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditableText, type EditableTextProps } from "@/forms";
import { Flex } from "@/layout";

const meta: Meta<typeof EditableText> = {
  title: "Forms/Inputs/EditableText",
  component: EditableText,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof EditableText>;

export default meta;

type Story = StoryObj<typeof meta>;

const handleSave = (value: string) => {
  window.alert(value);
};

const defaultArgs: EditableTextProps = {
  name: "default",
  value: "Flanders was a zombie?",
  onSave: handleSave,
};

export const Default: Story = {
  args: defaultArgs,
};

export const Editing: Story = {
  args: {
    ...defaultArgs,
    isEditing: true,
  },
};

export const TypographyVariants: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <EditableText as="h1" name="h1" onSave={handleSave} value="Heading 1" />
      <EditableText as="h2" name="h2" onSave={handleSave} value="Heading 2" />
      <EditableText as="h3" name="h3" onSave={handleSave} value="Heading 3" />
      <EditableText as="h4" name="h4" onSave={handleSave} value="Heading 4" />
      <EditableText as="h5" name="h5" onSave={handleSave} value="Heading 5" />
      <EditableText as="h6" name="h6" onSave={handleSave} value="Heading 6" />
      <EditableText as="p" name="p" onSave={handleSave} value="Paragraph" />
      <EditableText as="label" name="label" onSave={handleSave} value="Label" />
    </Flex>
  ),
};

export const TypographyVariantsEditing: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <EditableText as="h1" isEditing name="h1" onSave={handleSave} value="Heading 1" />
      <EditableText as="h2" isEditing name="h2" onSave={handleSave} value="Heading 2" />
      <EditableText as="h3" isEditing name="h3" onSave={handleSave} value="Heading 3" />
      <EditableText as="h4" isEditing name="h4" onSave={handleSave} value="Heading 4" />
      <EditableText as="h5" isEditing name="h5" onSave={handleSave} value="Heading 5" />
      <EditableText as="h6" isEditing name="h6" onSave={handleSave} value="Heading 6" />
      <EditableText as="p" isEditing name="p" onSave={handleSave} value="Paragraph" />
      <EditableText as="label" isEditing name="label" onSave={handleSave} value="Label" />
    </Flex>
  ),
};

export const TypographyVariantsReadonly: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <EditableText as="h1" name="h1" onSave={handleSave} readonly value="Heading 1" />
      <EditableText as="h2" name="h2" onSave={handleSave} readonly value="Heading 2" />
      <EditableText as="h3" name="h3" onSave={handleSave} readonly value="Heading 3" />
      <EditableText as="h4" name="h4" onSave={handleSave} readonly value="Heading 4" />
      <EditableText as="h5" name="h5" onSave={handleSave} readonly value="Heading 5" />
      <EditableText as="h6" name="h6" onSave={handleSave} readonly value="Heading 6" />
      <EditableText as="p" name="p" onSave={handleSave} readonly value="Paragraph" />
      <EditableText as="label" name="label" onSave={handleSave} readonly value="Label" />
    </Flex>
  ),
};
