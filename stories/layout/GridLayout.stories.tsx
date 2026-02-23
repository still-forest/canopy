import type { Meta, StoryObj } from "@storybook/react-vite";

import { Flex, GridLayout } from "@/layout";

const meta = {
  title: "Layout/GridLayout",
  component: GridLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Additional CSS class names for the grid container",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      control: { disable: true },
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
} satisfies Meta<typeof GridLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const Cell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <Flex
    align="center"
    className={`rounded-md bg-info px-3 py-4 text-sm text-info-foreground ${className}`}
    justify="center"
  >
    {children}
  </Flex>
);

export const Default: Story = {
  args: {
    className: "w-full max-w-4xl",
  },
  render: (args) => (
    <GridLayout {...args}>
      <GridLayout.Item span={12}>
        <Cell>span=12</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={6}>
        <Cell>span=6</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={6}>
        <Cell>span=6</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={4}>
        <Cell>span=4</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={4}>
        <Cell>span=4</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={4}>
        <Cell>span=4</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={3}>
        <Cell>span=3</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={3}>
        <Cell>span=3</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={3}>
        <Cell>span=3</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={3}>
        <Cell>span=3</Cell>
      </GridLayout.Item>
    </GridLayout>
  ),
};

export const Responsive: Story = {
  args: {
    className: "w-full max-w-4xl",
  },
  render: (args) => (
    <GridLayout {...args}>
      <GridLayout.Item lg={3} md={6} span={12}>
        <Cell>12 / md:6 / lg:3</Cell>
      </GridLayout.Item>
      <GridLayout.Item lg={3} md={6} span={12}>
        <Cell>12 / md:6 / lg:3</Cell>
      </GridLayout.Item>
      <GridLayout.Item lg={3} md={6} span={12}>
        <Cell>12 / md:6 / lg:3</Cell>
      </GridLayout.Item>
      <GridLayout.Item lg={3} md={6} span={12}>
        <Cell>12 / md:6 / lg:3</Cell>
      </GridLayout.Item>
    </GridLayout>
  ),
};

export const ResponsiveSidebar: Story = {
  args: {
    className: "w-full max-w-4xl",
  },
  render: (args) => (
    <GridLayout {...args}>
      <GridLayout.Item md={8} span={12}>
        <Cell className="min-h-48 bg-accent text-accent-foreground">Main Content (12 / md:8)</Cell>
      </GridLayout.Item>
      <GridLayout.Item md={4} span={12}>
        <Cell className="min-h-48">Sidebar (12 / md:4)</Cell>
      </GridLayout.Item>
    </GridLayout>
  ),
};

export const MixedSpans: Story = {
  args: {
    className: "w-full max-w-4xl",
  },
  render: (args) => (
    <GridLayout {...args}>
      <GridLayout.Item span={8}>
        <Cell>span=8</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={4}>
        <Cell>span=4</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={3}>
        <Cell>span=3</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={6}>
        <Cell>span=6</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={3}>
        <Cell>span=3</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={2}>
        <Cell>2</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={2}>
        <Cell>2</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={2}>
        <Cell>2</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={2}>
        <Cell>2</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={2}>
        <Cell>2</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={2}>
        <Cell>2</Cell>
      </GridLayout.Item>
    </GridLayout>
  ),
};

export const RowSpans: Story = {
  args: {
    className: "w-full max-w-4xl",
  },
  render: (args) => (
    <GridLayout {...args}>
      <GridLayout.Item rowSpan={2} span={4}>
        <Cell className="h-full min-h-32 bg-accent text-accent-foreground">span=4, rowSpan=2</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={8}>
        <Cell>span=8</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={4}>
        <Cell>span=4</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={4}>
        <Cell>span=4</Cell>
      </GridLayout.Item>
    </GridLayout>
  ),
};

export const RowSpanSidebar: Story = {
  args: {
    className: "w-full max-w-4xl",
  },
  render: (args) => (
    <GridLayout {...args}>
      <GridLayout.Item rowSpan={3} span={3}>
        <Cell className="h-full bg-accent text-accent-foreground">Navigation (rowSpan=3)</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={9}>
        <Cell className="min-h-12">Header</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={9}>
        <Cell className="min-h-32">Main Content</Cell>
      </GridLayout.Item>
      <GridLayout.Item span={9}>
        <Cell className="min-h-12">Footer</Cell>
      </GridLayout.Item>
    </GridLayout>
  ),
};

export const DashboardLayout: Story = {
  args: {
    className: "w-full max-w-5xl",
  },
  render: (args) => (
    <GridLayout {...args}>
      <GridLayout.Item lg={3} md={6} span={12}>
        <Cell className="min-h-24">Metric 1</Cell>
      </GridLayout.Item>
      <GridLayout.Item lg={3} md={6} span={12}>
        <Cell className="min-h-24">Metric 2</Cell>
      </GridLayout.Item>
      <GridLayout.Item lg={3} md={6} span={12}>
        <Cell className="min-h-24">Metric 3</Cell>
      </GridLayout.Item>
      <GridLayout.Item lg={3} md={6} span={12}>
        <Cell className="min-h-24">Metric 4</Cell>
      </GridLayout.Item>
      <GridLayout.Item md={8} span={12}>
        <Cell className="min-h-64 bg-accent text-accent-foreground">Chart</Cell>
      </GridLayout.Item>
      <GridLayout.Item md={4} rowSpan={2} span={12}>
        <Cell className="h-full">Sidebar (rowSpan=2)</Cell>
      </GridLayout.Item>
      <GridLayout.Item md={8} span={12}>
        <Cell>Table</Cell>
      </GridLayout.Item>
    </GridLayout>
  ),
};
