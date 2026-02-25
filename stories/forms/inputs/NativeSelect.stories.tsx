import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NativeSelect } from "@/forms/inputs/NativeSelect/NativeSelect";
import { Flex } from "@/layout";

const meta: Meta<typeof NativeSelect> = {
  title: "Forms/Inputs/NativeSelect",
  component: NativeSelect,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof NativeSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NativeSelect name="default">
      <NativeSelect.Option value="">Select an option</NativeSelect.Option>
      <NativeSelect.Option value="homer">Homer</NativeSelect.Option>
      <NativeSelect.Option value="marge">Marge</NativeSelect.Option>
      <NativeSelect.Option value="bart">Bart</NativeSelect.Option>
      <NativeSelect.Option value="lisa">Lisa</NativeSelect.Option>
      <NativeSelect.Option value="maggie">Maggie</NativeSelect.Option>
    </NativeSelect>
  ),
};

export const WithValue: Story = {
  render: () => (
    <NativeSelect defaultValue="marge" name="with-value">
      <NativeSelect.Option value="homer">Homer</NativeSelect.Option>
      <NativeSelect.Option value="marge">Marge</NativeSelect.Option>
      <NativeSelect.Option value="bart">Bart</NativeSelect.Option>
    </NativeSelect>
  ),
};

export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled name="disabled">
      <NativeSelect.Option value="">Select an option</NativeSelect.Option>
      <NativeSelect.Option value="homer">Homer</NativeSelect.Option>
      <NativeSelect.Option value="marge">Marge</NativeSelect.Option>
    </NativeSelect>
  ),
};

export const WithOptGroups: Story = {
  render: () => (
    <NativeSelect name="optgroups">
      <NativeSelect.Option value="">Select an option</NativeSelect.Option>
      <NativeSelect.OptGroup label="Elements">
        <NativeSelect.Option value="earth">Earth</NativeSelect.Option>
        <NativeSelect.Option value="wind">Wind</NativeSelect.Option>
        <NativeSelect.Option value="fire">Fire</NativeSelect.Option>
        <NativeSelect.Option value="water">Water</NativeSelect.Option>
      </NativeSelect.OptGroup>
      <NativeSelect.OptGroup label="Colors">
        <NativeSelect.Option value="red">Red</NativeSelect.Option>
        <NativeSelect.Option value="yellow">Yellow</NativeSelect.Option>
        <NativeSelect.Option value="green">Green</NativeSelect.Option>
        <NativeSelect.Option value="blue">Blue</NativeSelect.Option>
      </NativeSelect.OptGroup>
    </NativeSelect>
  ),
};

export const Invalid: Story = {
  render: () => (
    <NativeSelect aria-invalid="true" name="invalid">
      <NativeSelect.Option value="">Select an option</NativeSelect.Option>
      <NativeSelect.Option value="homer">Homer</NativeSelect.Option>
      <NativeSelect.Option value="marge">Marge</NativeSelect.Option>
    </NativeSelect>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <NativeSelect name="first">
        <NativeSelect.Option value="">First select</NativeSelect.Option>
        <NativeSelect.Option value="a">Option A</NativeSelect.Option>
        <NativeSelect.Option value="b">Option B</NativeSelect.Option>
      </NativeSelect>
      <NativeSelect name="second">
        <NativeSelect.Option value="">Second select</NativeSelect.Option>
        <NativeSelect.Option value="x">Option X</NativeSelect.Option>
        <NativeSelect.Option value="y">Option Y</NativeSelect.Option>
      </NativeSelect>
    </Flex>
  ),
};
