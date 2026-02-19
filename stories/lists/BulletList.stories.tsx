import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BulletList } from "@/lists";
import { Heading, Text } from "@/typography";

const meta: Meta<typeof BulletList> = {
  title: "Lists/BulletList",
  component: BulletList,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof BulletList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BulletList>
      <BulletList.Item>Item 1</BulletList.Item>
      <BulletList.Item>Item 2</BulletList.Item>
      <BulletList.Item>Item 3</BulletList.Item>
    </BulletList>
  ),
};

const sampleItems = [
  {
    title: "Item 1",
    description: "Description 1",
    details: "Details 1",
  },
  {
    title: "Item 2",
    description: "Description 2",
    details: "Details 2",
  },
  {
    title: "Item 3",
    description: "Description 3",
    details: "Details 3",
  },
];

export const Styled: Story = {
  render: () => (
    <BulletList className="flex-1 justify-between">
      {sampleItems.map((item) => (
        <BulletList.Item key={item.title}>
          <Heading family="body" level="6">
            {item.title}
          </Heading>
          <Text variant="muted">{item.description}</Text>
        </BulletList.Item>
      ))}
    </BulletList>
  ),
};
