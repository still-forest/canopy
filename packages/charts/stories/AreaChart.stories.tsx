import type { Meta, StoryObj } from "@storybook/react";

import { AreaChart, Brush } from "@/main";

const meta: Meta<typeof AreaChart> = {
  title: "Charts/AreaChart",
  component: AreaChart,
  decorators: [
    (Story) => (
      <div style={{ width: "600px", height: "400px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof AreaChart>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultData = [
  { x: new Date("2023-01-01"), y: 12 },
  { x: new Date("2023-01-02"), y: 25 },
  { x: new Date("2023-01-03"), y: 16 },
  { x: new Date("2023-01-04"), y: 20 },
  { x: new Date("2023-01-05"), y: 25 },
  { x: new Date("2023-01-10"), y: 35 },
];

const brushProps = {
  data: defaultData,
  onChange: () => console.log("changed"),
  onClick: () => console.log("clicked"),
};

export const Default: Story = {
  args: { data: defaultData },
};

export const WithNegativeData: Story = {
  args: { data: defaultData.map((d) => ({ ...d, y: -d.y })) },
};

export const WithPositiveAndNegativeData: Story = {
  args: {
    data: [
      { x: new Date("2023-01-01"), y: 12 },
      { x: new Date("2023-01-02"), y: 25 },
      { x: new Date("2023-01-03"), y: 16 },
      { x: new Date("2023-01-04"), y: 2 },
      { x: new Date("2023-01-05"), y: -12 },
      { x: new Date("2023-01-10"), y: -35 },
    ],
  },
};

export const WithBrush: Story = {
  args: { data: defaultData, children: <Brush {...brushProps} /> },
};
