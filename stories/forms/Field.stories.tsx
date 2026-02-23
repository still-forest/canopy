import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field } from "@/forms";
import { Flex } from "@/layout";

const meta: Meta<typeof Field> = {
  title: "Forms/Field",
  component: Field,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <Field orientation="vertical">
      <Field.Label htmlFor="name">Full Name</Field.Label>
      <input className="border rounded px-2 py-1 text-sm" id="name" placeholder="Enter your name" />
    </Field>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Field orientation="horizontal">
      <Field.Label htmlFor="email">Email</Field.Label>
      <input className="border rounded px-2 py-1 text-sm" id="email" placeholder="Enter your email" />
    </Field>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Field>
      <Field.Label htmlFor="username">Username</Field.Label>
      <Field.Description>Choose a unique username for your account.</Field.Description>
      <input className="border rounded px-2 py-1 text-sm" id="username" placeholder="Enter a username" />
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field>
      <Field.Label htmlFor="password">Password</Field.Label>
      <input className="border rounded px-2 py-1 text-sm" id="password" type="password" />
      <Field.Error>Password must be at least 8 characters.</Field.Error>
    </Field>
  ),
};

export const WithNoError: Story = {
  name: "Error (empty)",
  render: () => (
    <Field>
      <Field.Label htmlFor="valid">Valid Field</Field.Label>
      <input className="border rounded px-2 py-1 text-sm" id="valid" readOnly value="Good value" />
      <Field.Error>{null}</Field.Error>
    </Field>
  ),
};

export const WithLabelGroup: Story = {
  render: () => (
    <Field>
      <Field.LabelGroup>
        <Field.Label htmlFor="status">Status</Field.Label>
        <span className="text-xs text-muted-foreground">Optional</span>
      </Field.LabelGroup>
      <input className="border rounded px-2 py-1 text-sm" id="status" placeholder="Enter status" />
    </Field>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <Field>
      <Field.Title>Section Title</Field.Title>
      <Field.Description>This uses a Title instead of a Label for non-input contexts.</Field.Description>
    </Field>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Field orientation="horizontal">
      <Field.Label htmlFor="setting">Enable feature</Field.Label>
      <Field.Content>
        <Field.Description>This setting controls whether the feature is active.</Field.Description>
      </Field.Content>
    </Field>
  ),
};

export const FullComposition: Story = {
  render: () => (
    <Flex direction="col" gap="6">
      <Field>
        <Field.LabelGroup>
          <Field.Label htmlFor="full-name">Full Name</Field.Label>
          <span className="text-xs text-muted-foreground">Required</span>
        </Field.LabelGroup>
        <Field.Description>Enter your first and last name.</Field.Description>
        <input className="border rounded px-2 py-1 text-sm" id="full-name" placeholder="Jane Doe" />
        <Field.Error>Name is required.</Field.Error>
      </Field>

      <Field>
        <Field.Label htmlFor="bio">Bio</Field.Label>
        <Field.Description>Tell us about yourself.</Field.Description>
        <textarea className="border rounded px-2 py-1 text-sm" id="bio" placeholder="Write something..." rows={3} />
      </Field>
    </Flex>
  ),
};
