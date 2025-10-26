import type { Meta, StoryObj } from "@storybook/react-vite";

import { BulletList, Timeline } from "@/components";
import { Text } from "@/typography";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Timeline>;

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
    id: 1,
    date: "2025-01-01",
    title: "Item 1",
    description: "Description 1",
  },
  {
    id: 2,
    date: "2025-01-02",
    title: "Item 2",
    description: "Description 2",
  },
  {
    id: 3,
    date: "2025-01-03",
    title: "Item 3",
    description: "Description 3",
  },
];

const Description = ({ description }: { description: string | string[] }) => {
  if (typeof description === "string") {
    return <Text variant="muted">{description}</Text>;
  }
  return (
    <BulletList>
      {description.map((d) => (
        <BulletList.Item key={d} variant="muted">
          {d}
        </BulletList.Item>
      ))}
    </BulletList>
  );
};

export const Styled: Story = {
  render: () => (
    <Timeline defaultValue={1}>
      {sampleItems.map((item) => (
        <Timeline.Item
          className="group-data-[orientation=vertical]/timeline:sm:ms-32 group-data-[orientation=vertical]/timeline:not-last:pb-8"
          key={item.id}
          step={item.id}
        >
          <Timeline.Header>
            <Timeline.Separator />
            <Timeline.Date className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
              {item.date}
            </Timeline.Date>
            <Timeline.Title className="sm:-mt-1.5" family="serif" level="4">
              {item.title}
            </Timeline.Title>
            <Timeline.Indicator />
          </Timeline.Header>
          <Timeline.Content>
            <Description description={item.description} />
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  ),
};
