import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { ButtonSelectInput } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";

const meta: Meta<typeof ButtonSelectInput> = {
  title: "Forms/Inputs/ButtonSelectInput",
  component: ButtonSelectInput,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonSelectInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  name: "someThing",
  options: [
    { value: "homer", label: "Homer" },
    { value: "marge", label: "Marge" },
    { value: "bart", label: "Bart" },
    { value: "lisa", label: "Lisa" },
    { value: "maggie", label: "Maggie" },
  ],
  onChange: (value: string) => window.alert(`Selected option ${value}`),
};

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return (
      <Flex direction="col" gap="4">
        <ButtonSelectInput {...defaultProps} onChange={setValue} value={value} />
        <Text className="italic" variant="muted">
          Selected value: {value || "none"}
        </Text>
      </Flex>
    );
  },
};

export const WithSecondaryOptions: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    const secondaryOptions = [
      { value: "abraham", label: "Abraham" },
      { value: "herbert", label: "Herbert" },
      { value: "jacqueline", label: "Jacqueline" },
      { value: "patty", label: "Patty" },
      { value: "selma", label: "Selma" },
    ];
    return (
      <Flex direction="col" gap="4">
        <ButtonSelectInput {...defaultProps} onChange={setValue} secondaryOptions={secondaryOptions} value={value} />
        <Text className="italic" variant="muted">
          Selected value: {value || "none"}
        </Text>
      </Flex>
    );
  },
};
