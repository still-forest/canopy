import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextList } from "@/components";
import type { AlertProps } from "@/components/Alert";
import { Alert } from "@/components/Alert";
import { Flex } from "@/layout/Flex";
import { Text } from "@/typography/Text";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";
import { sampleSentences, sampleText } from "../support/sampleText";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: AlertProps = {
  type: "info",
  title: "Title",
  message: "This is an important message.",
};

export const Default: Story = {
  args: defaultArgs,
};

export const Success: Story = {
  args: { ...defaultArgs, type: "success" },
};

export const Warning: Story = {
  args: { ...defaultArgs, type: "warning" },
};

export const ErrorStatus: Story = {
  args: { ...defaultArgs, type: "error" },
};

export const NoTitle: Story = {
  args: { ...defaultArgs, title: undefined },
};

export const WithComplexMessage: Story = {
  render: () => (
    <Alert title="Suggestions" type="info">
      <Flex direction="col" gap="1">
        <Text className="text-sm" variant="inherit">
          {sampleText}
        </Text>
        <TextList>
          {sampleSentences.map((sentence) => (
            <TextList.Item key={sentence}>{sentence}.</TextList.Item>
          ))}
        </TextList>
      </Flex>
    </Alert>
  ),
};
