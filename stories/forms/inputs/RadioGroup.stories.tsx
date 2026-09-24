import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, FieldSet, Label, RadioGroup, RadioGroupItem } from "@/forms";

const meta: Meta<typeof RadioGroup> = {
  title: "Forms/Inputs/RadioGroup",
  component: RadioGroup,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup className="w-fit" defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem id="r1" value="default" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem id="r2" value="comfortable" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem id="r3" value="compact" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <RadioGroup className="w-fit" defaultValue="comfortable">
      <Field orientation="horizontal">
        <RadioGroupItem id="desc-r1" value="default" />
        <Field.Content>
          <Field.Label htmlFor="desc-r1">Default</Field.Label>
          <Field.Description>Standard spacing for most use cases.</Field.Description>
        </Field.Content>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem id="desc-r2" value="comfortable" />
        <Field.Content>
          <Field.Label htmlFor="desc-r2">Comfortable</Field.Label>
          <Field.Description>More space between elements.</Field.Description>
        </Field.Content>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem id="desc-r3" value="compact" />
        <Field.Content>
          <Field.Label htmlFor="desc-r3">Compact</Field.Label>
          <Field.Description>Minimal spacing for dense layouts.</Field.Description>
        </Field.Content>
      </Field>
    </RadioGroup>
  ),
};

export const ChoiceCards: Story = {
  render: () => (
    <RadioGroup className="max-w-sm" defaultValue="plus">
      <Field.Label htmlFor="plus-plan">
        <Field orientation="horizontal">
          <Field.Content>
            <Field.Title>Plus</Field.Title>
            <Field.Description>For individuals and small teams.</Field.Description>
          </Field.Content>
          <RadioGroupItem id="plus-plan" value="plus" />
        </Field>
      </Field.Label>
      <Field.Label htmlFor="pro-plan">
        <Field orientation="horizontal">
          <Field.Content>
            <Field.Title>Pro</Field.Title>
            <Field.Description>For growing businesses.</Field.Description>
          </Field.Content>
          <RadioGroupItem id="pro-plan" value="pro" />
        </Field>
      </Field.Label>
      <Field.Label htmlFor="enterprise-plan">
        <Field orientation="horizontal">
          <Field.Content>
            <Field.Title>Enterprise</Field.Title>
            <Field.Description>For large teams and enterprises.</Field.Description>
          </Field.Content>
          <RadioGroupItem id="enterprise-plan" value="enterprise" />
        </Field>
      </Field.Label>
    </RadioGroup>
  ),
};

export const WithFieldSet: Story = {
  render: () => (
    <FieldSet className="w-full max-w-xs">
      <Field.Legend variant="label">Subscription Plan</Field.Legend>
      <Field.Description>Yearly and lifetime plans offer significant savings.</Field.Description>
      <RadioGroup defaultValue="monthly">
        <Field orientation="horizontal">
          <RadioGroupItem id="plan-monthly" value="monthly" />
          <Field.Label className="font-normal" htmlFor="plan-monthly">
            Monthly ($9.99/month)
          </Field.Label>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="plan-yearly" value="yearly" />
          <Field.Label className="font-normal" htmlFor="plan-yearly">
            Yearly ($99.99/year)
          </Field.Label>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="plan-lifetime" value="lifetime" />
          <Field.Label className="font-normal" htmlFor="plan-lifetime">
            Lifetime ($299.99)
          </Field.Label>
        </Field>
      </RadioGroup>
    </FieldSet>
  ),
};

export const DisabledOption: Story = {
  render: () => (
    <RadioGroup className="w-fit" defaultValue="option2">
      <Field data-disabled orientation="horizontal">
        <RadioGroupItem disabled id="disabled-1" value="option1" />
        <Field.Label className="font-normal" htmlFor="disabled-1">
          Disabled
        </Field.Label>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem id="disabled-2" value="option2" />
        <Field.Label className="font-normal" htmlFor="disabled-2">
          Option 2
        </Field.Label>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem id="disabled-3" value="option3" />
        <Field.Label className="font-normal" htmlFor="disabled-3">
          Option 3
        </Field.Label>
      </Field>
    </RadioGroup>
  ),
};

export const Invalid: Story = {
  render: () => (
    <FieldSet className="w-full max-w-xs">
      <Field.Legend variant="label">Notification Preferences</Field.Legend>
      <Field.Description>Choose how you want to receive notifications.</Field.Description>
      <RadioGroup defaultValue="email">
        <Field data-invalid orientation="horizontal">
          <RadioGroupItem aria-invalid id="invalid-email" value="email" />
          <Field.Label className="font-normal" htmlFor="invalid-email">
            Email only
          </Field.Label>
        </Field>
        <Field data-invalid orientation="horizontal">
          <RadioGroupItem aria-invalid id="invalid-sms" value="sms" />
          <Field.Label className="font-normal" htmlFor="invalid-sms">
            SMS only
          </Field.Label>
        </Field>
        <Field data-invalid orientation="horizontal">
          <RadioGroupItem aria-invalid id="invalid-both" value="both" />
          <Field.Label className="font-normal" htmlFor="invalid-both">
            Both Email & SMS
          </Field.Label>
        </Field>
      </RadioGroup>
    </FieldSet>
  ),
};
