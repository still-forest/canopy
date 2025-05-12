import type { Meta, StoryObj } from "@storybook/react";

import { NumberInput } from "@/main";

const meta: Meta<typeof NumberInput> = {
  title: "Forms/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  name: "mockField",
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const WithInitialValue: Story = {
  args: {
    ...defaultProps,
    value: 123.45,
  },
};

export const WithLabel: Story = {
  args: {
    ...defaultProps,
    label: "Some value:",
  },
};
export const WithPlaceholder: Story = {
  args: {
    ...defaultProps,
    placeholder: "Do alligators alligate?",
  },
};

export const WithNote: Story = {
  args: {
    ...defaultProps,
    note: "Sorry, buddy. You got me confused with Fred Flintstone.",
  },
};

export const WithEverything: Story = {
  args: {
    ...defaultProps,
    placeholder: "Do alligators alligate?",
    label: "Some value:",
    note: "Sorry, buddy. You got me confused with Fred Flintstone.",
  },
};

export const WithLeftLabelOrientation: Story = {
  args: {
    ...defaultProps,
    label: "Some value:",
    labelOrientation: "left",
  },
};

export const WithCustomStep: Story = {
  args: {
    ...defaultProps,
    step: "10",
  },
};

export const Disabled: Story = {
  args: {
    ...defaultProps,
    label: "Disabled input:",
    placeholder: "This input is disabled",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...defaultProps,
    label: "Read-only input:",
    value: 47,
    readOnly: true,
  },
};

export const WithMinMax: Story = {
  args: {
    ...defaultProps,
    label: "Enter a value between 1 and 100:",
    min: 1,
    max: 100,
  },
};
