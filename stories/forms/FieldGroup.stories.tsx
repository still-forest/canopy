import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, FieldGroup } from "@/forms";

const meta: Meta<typeof FieldGroup> = {
  title: "Forms/FieldGroup",
  component: FieldGroup,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof FieldGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FieldGroup>
      <Field>
        <Field.Label htmlFor="first-name">First Name</Field.Label>
        <input className="border rounded px-2 py-1 text-sm" id="first-name" placeholder="First name" />
      </Field>
      <Field>
        <Field.Label htmlFor="last-name">Last Name</Field.Label>
        <input className="border rounded px-2 py-1 text-sm" id="last-name" placeholder="Last name" />
      </Field>
      <Field>
        <Field.Label htmlFor="email">Email</Field.Label>
        <input className="border rounded px-2 py-1 text-sm" id="email" placeholder="Email address" type="email" />
      </Field>
    </FieldGroup>
  ),
};

export const Nested: Story = {
  render: () => (
    <FieldGroup>
      <Field>
        <Field.Title>Personal Information</Field.Title>
        <Field.Description>Basic details about you.</Field.Description>
      </Field>
      <FieldGroup>
        <Field>
          <Field.Label htmlFor="nested-name">Name</Field.Label>
          <input className="border rounded px-2 py-1 text-sm" id="nested-name" placeholder="Your name" />
        </Field>
        <Field>
          <Field.Label htmlFor="nested-age">Age</Field.Label>
          <input className="border rounded px-2 py-1 text-sm" id="nested-age" placeholder="Your age" type="number" />
        </Field>
      </FieldGroup>
    </FieldGroup>
  ),
};

export const WithErrors: Story = {
  render: () => (
    <FieldGroup>
      <Field>
        <Field.Label htmlFor="err-username">Username</Field.Label>
        <input className="border rounded px-2 py-1 text-sm" id="err-username" />
        <Field.Error>Username is already taken.</Field.Error>
      </Field>
      <Field>
        <Field.Label htmlFor="err-email">Email</Field.Label>
        <input className="border rounded px-2 py-1 text-sm" id="err-email" />
        <Field.Error>Please enter a valid email address.</Field.Error>
      </Field>
      <Field>
        <Field.Label htmlFor="err-password">Password</Field.Label>
        <input className="border rounded px-2 py-1 text-sm" id="err-password" type="password" />
      </Field>
    </FieldGroup>
  ),
};

export const MixedOrientations: Story = {
  render: () => (
    <FieldGroup>
      <Field orientation="vertical">
        <Field.Label htmlFor="mix-name">Name</Field.Label>
        <Field.Description>This field uses vertical orientation (default).</Field.Description>
        <input className="border rounded px-2 py-1 text-sm" id="mix-name" placeholder="Your name" />
      </Field>
      <Field orientation="horizontal">
        <Field.Label htmlFor="mix-toggle">Enable notifications</Field.Label>
        <Field.Content>
          <Field.Description>Horizontal orientation places the label beside the content.</Field.Description>
        </Field.Content>
      </Field>
    </FieldGroup>
  ),
};
