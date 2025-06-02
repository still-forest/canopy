import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container, Flex, Footer } from "@/layout";
import { Text } from "@/typography";
import { sampleLongText } from "../support/sampleText";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <Flex direction="col" className="min-h-[300px]">
        <Container className="flex-1">
          <Text>This is some page content. {sampleLongText}</Text>
        </Container>
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
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    children: "This is a Footer component",
  },
};

export const Styled: Story = {
  args: {
    children: "This is a Footer component",
    className: "bg-muted text-muted-foreground border-t-2 border-info",
  },
};
