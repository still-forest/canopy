import { sampleParagraphText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex, type Header, Layout } from "@/layout";
import { Heading, Paragraph, Text } from "@/typography";

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
      <Layout.Body>
        {sampleParagraphText.map((paragraph, i) => (
          <Paragraph key={`paragraph-${i}`}>{paragraph}</Paragraph>
        ))}
      </Layout.Body>
      <Layout.Footer>
        <Text variant="muted" size="sm">
          © 2025 Still Forest LLC.
        </Text>
        </Layout.Footer>
    </Layout>
  ),
};

export const WithBodyContainer: Story = {
  render: () => (
    <Layout>
      <Layout.Header>
        <Heading level="1">Header</Heading>
      </Layout.Header>
      <Layout.Body withContainer>
        {sampleParagraphText.map((paragraph, i) => (
          <Paragraph key={`paragraph-${i}`}>{paragraph}</Paragraph>
        ))}
      </Layout.Body>
      <Layout.Footer>
        <Text variant="muted" size="sm">
          © 2025 Still Forest LLC.
        </Text>
        </Layout.Footer>
    </Layout>
  ),
};
