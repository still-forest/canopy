import { sampleParagraphText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex, type Header, Layout } from "@/layout";
import { Heading, Text } from "@/typography";

const meta: Meta<typeof Layout> = {
  title: "Layout/Layout",
  component: Layout,
  decorators: [
    (Story) => (
      <Flex direction="col" className="min-h-[500px] w-[600px]">
        <Story />
      </Flex>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { disable: true },
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <Layout>
      <Layout.Header>
        <Heading level="1">Header</Heading>
      </Layout.Header>
      <Layout.Content>
        {sampleParagraphText.map((paragraph, i) => (
          <Text key={`paragraph-${i}`}>{paragraph}</Text>
        ))}
      </Layout.Content>
      <Layout.Footer>
        <Text variant="muted" size="sm">
          © 2025 Still Forest LLC.
        </Text>
        </Layout.Footer>
    </Layout>
  ),
};
