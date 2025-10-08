import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextList } from "@/components/TextList";
import { Box } from "@/layout";
import { Text } from "@/typography/Text";
import { DEFAULT_DECORATOR_WITH_WIDTH_MD } from "../support/decorators";
import { sampleSentences } from "../support/sampleText";

const meta: Meta<typeof TextList> = {
  title: "Components/TextList",
  component: TextList,
  decorators: [DEFAULT_DECORATOR_WITH_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof TextList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TextList>
      {sampleSentences.map((sentence) => (
        <TextList.Item key={sentence}>{sentence}.</TextList.Item>
      ))}
    </TextList>
  ),
};

export const Ordered: Story = {
  render: () => (
    <TextList type="ordered">
      {sampleSentences.map((sentence) => (
        <TextList.Item key={sentence}>{sentence}.</TextList.Item>
      ))}
    </TextList>
  ),
};

export const None: Story = {
  render: () => (
    <TextList type="none">
      {sampleSentences.map((sentence) => (
        <TextList.Item key={sentence}>{sentence}.</TextList.Item>
      ))}
    </TextList>
  ),
};

export const Inside: Story = {
  render: () => (
    <TextList position="inside">
      {sampleSentences.map((sentence) => (
        <TextList.Item key={sentence}>{sentence}.</TextList.Item>
      ))}
    </TextList>
  ),
};

export const WithClassName: Story = {
  render: () => (
    <TextList className="ml-0">
      {sampleSentences.map((sentence) => (
        <TextList.Item key={sentence}>{sentence}.</TextList.Item>
      ))}
    </TextList>
  ),
};

export const WithComponents: Story = {
  render: () => (
    <TextList>
      {sampleSentences.map((sentence) => (
        <TextList.Item asChild key={sentence}>
          <Box as="li" className="px-4 mb-2 hover:bg-primary/20 hover:cursor-default" rounded="sm" variant="secondary">
            <Text inheritColor inline size="sm" variant="brand">
              {sentence}.
            </Text>
          </Box>
        </TextList.Item>
      ))}
    </TextList>
  ),
};
