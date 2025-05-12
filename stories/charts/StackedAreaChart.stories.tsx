import type { Meta, StoryObj } from "@storybook/react";

import { StackedAreaChart } from "@/main";

const meta: Meta<typeof StackedAreaChart> = {
  title: "Charts/StackedAreaChart",
  component: StackedAreaChart,
  decorators: [
    (Story) => (
      <div style={{ width: "600px", height: "400px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof StackedAreaChart>;

export default meta;

type Story = StoryObj<typeof meta>;

const keys = ["key1", "key2"];

const buildSeriesDataPoint = (dateStr: string, y: number) => ({
  x: new Date(dateStr),
  yTotal: y,
  ySeries: [
    { key: keys[0], label: "Slice 1", y: y * 0.75 },
    { key: keys[1], label: "Slice 2", y: y * 0.25 },
  ],
});

const defaultData = [
  buildSeriesDataPoint("2023-01-01", 12),
  buildSeriesDataPoint("2023-01-02", 25),
  buildSeriesDataPoint("2023-01-04", 16),
  buildSeriesDataPoint("2023-01-05", 20),
  buildSeriesDataPoint("2023-01-08", 25),
  buildSeriesDataPoint("2023-01-15", 35),
];

export const Default: Story = {
  args: { data: defaultData },
};

export const WithMediumTermSeries: Story = {
  args: {
    data: [
      buildSeriesDataPoint("2023-01-01", 12),
      buildSeriesDataPoint("2023-02-02", 25),
      buildSeriesDataPoint("2023-04-04", 16),
      buildSeriesDataPoint("2023-05-05", 20),
      buildSeriesDataPoint("2023-08-08", 25),
      buildSeriesDataPoint("2024-01-15", 35),
    ],
  },
};

export const WithLongTermSeries: Story = {
  args: {
    data: [
      buildSeriesDataPoint("2018-01-01", 12),
      buildSeriesDataPoint("2019-02-02", 25),
      buildSeriesDataPoint("2020-04-04", 16),
      buildSeriesDataPoint("2021-05-05", 20),
      buildSeriesDataPoint("2022-08-08", 25),
      buildSeriesDataPoint("2024-01-15", 35),
    ],
  },
};

export const ThousandsScale: Story = {
  args: {
    data: [
      buildSeriesDataPoint("2018-01-01", 12_250),
      buildSeriesDataPoint("2019-02-02", 25_848),
      buildSeriesDataPoint("2020-04-04", 16_129),
      buildSeriesDataPoint("2021-05-05", 20_002),
      buildSeriesDataPoint("2022-08-08", 25_473),
      buildSeriesDataPoint("2024-01-15", 35_047),
    ],
  },
};

export const MillionsScale: Story = {
  args: {
    data: [
      buildSeriesDataPoint("2018-01-01", 12_250_487),
      buildSeriesDataPoint("2019-02-02", 25_848_098),
      buildSeriesDataPoint("2020-04-04", 16_129_736),
      buildSeriesDataPoint("2021-05-05", 20_002_836),
      buildSeriesDataPoint("2022-08-08", 25_473_111),
      buildSeriesDataPoint("2024-01-15", 35_047_024),
    ],
  },
};

export const NegativeBalances: Story = {
  args: {
    data: [
      buildSeriesDataPoint("2018-01-01", -12_250),
      buildSeriesDataPoint("2019-02-02", -25_848),
      buildSeriesDataPoint("2020-04-04", -16_129),
      buildSeriesDataPoint("2021-05-05", -20_002),
      buildSeriesDataPoint("2022-08-08", -25_473),
      buildSeriesDataPoint("2024-01-15", -35_047),
    ],
  },
};

export const MixedPositiveAndNegativeBalances: Story = {
  args: {
    data: [
      buildSeriesDataPoint("2018-01-01", -12_250),
      buildSeriesDataPoint("2019-02-02", 25_848),
      buildSeriesDataPoint("2020-04-04", -16_129),
      buildSeriesDataPoint("2021-05-05", 20_002),
      buildSeriesDataPoint("2022-08-08", -25_473),
      buildSeriesDataPoint("2024-01-15", 35_047),
    ],
  },
};
