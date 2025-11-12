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

const onChange = (value: string) => console.log(`Selected option: ${value}`);

const defaultProps = {
  name: "someThing",
  options: [
    { value: "homer", label: "Homer" },
    { value: "marge", label: "Marge" },
    { value: "bart", label: "Bart" },
    { value: "lisa", label: "Lisa" },
    { value: "maggie", label: "Maggie" },
  ],
  onChange,
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

    const handleChange = (value: string) => {
      setValue(value);
      onChange(value);
    };

    return (
      <Flex direction="col" gap="4">
        <ButtonSelectInput
          {...defaultProps}
          onChange={handleChange}
          secondaryOptions={secondaryOptions}
          value={value}
        />
        <Text className="italic" variant="muted">
          Selected value: {value || "none"}
        </Text>
      </Flex>
    );
  },
};

export const WithLabelAndNote: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    const secondaryOptions = [
      { value: "abraham", label: "Abraham" },
      { value: "herbert", label: "Herbert" },
      { value: "jacqueline", label: "Jacqueline" },
      { value: "patty", label: "Patty" },
      { value: "selma", label: "Selma" },
    ];

    const handleChange = (value: string) => {
      setValue(value);
      onChange(value);
    };

    const props = {
      ...defaultProps,
      label: "Select a character:",
      hint: "This is a hint",
      note: "My cat's breath smells like cat food.",
      error: value ? `You picked ${value}, which is incorrect.` : undefined,
    };

    return <ButtonSelectInput {...props} onChange={handleChange} secondaryOptions={secondaryOptions} value={value} />;
  },
};
