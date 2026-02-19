import { sampleLongText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container, Flex, Header } from "@/layout";
import { Heading, Text } from "@/typography";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  decorators: [
    (Story) => (
      <Flex className="min-h-[300px]" direction="col">
        <Story />
        <Container className="flex-1">
          <Text>This is some page content. {sampleLongText}</Text>
        </Container>
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
  args: {
    children: (
      <>
        <Heading level="1">Header</Heading>
        <Text variant="muted">(sticky doesn't really work in storybook)</Text>
      </>
    ),
  },
};

export const NonSticky: Story = {
  args: {
    children: (
      <>
        <Heading level="1">Header</Heading>
        <Text variant="muted">(sticky doesn't really work in storybook)</Text>
      </>
    ),
    sticky: false,
  },
};

export const SingleItem: Story = {
  args: {
    children: <Heading level="1">Header</Heading>,
    sticky: false,
  },
};

export const Styled: Story = {
  args: {
    children: "This is a Header component",
    className: "bg-muted text-primary border-b-2 border-info",
  },
};
