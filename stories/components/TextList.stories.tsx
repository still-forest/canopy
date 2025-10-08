import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextList } from "@/components/TextList";
import { Text } from "@/typography/Text";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";
import { sampleSentences } from "../support/sampleText";

const meta: Meta<typeof TextList> = {
  title: "Components/TextList",
  component: TextList,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
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

export const WithComponents: Story = {
  render: () => (
    <TextList>
      {sampleSentences.map((sentence) => (
        <TextList.Item key={sentence}>
          <Text className="text-sm" variant="inherit">
            {sentence}.
          </Text>
        </TextList.Item>
      ))}
    </TextList>
  ),
};
