import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail, User } from "lucide-react";
import { useState } from "react";

import { Card } from "@/components";
import {
  Button,
  ButtonSelectInput,
  Checkbox,
  DateInput,
  DatePicker,
  Input,
  NumberInput,
  PasswordInput,
  RadioSelect,
  SelectInput,
  Slider,
  SubmitButton,
  Switch,
  Textarea,
  TextInput,
} from "@/forms";
import { Flex } from "@/layout";
import { Heading, Text } from "@/typography";

const meta: Meta = {
  title: "Forms/Form Composition",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-2xl p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const CompleteFormExample = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    country: "",
    accountType: "personal",
    notifications: false,
    newsletter: false,
    privacy: false,
    bio: "",
    theme: "light",
    volume: 50,
    birthdate: "",
    preferredContact: "",
    experience: "beginner",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    window.alert("Form submitted! Check the console for data.");
  };

  const handleInputChange = (name: string) => (value: string | number | boolean | Date) => {
    setFormData((prev) => ({ ...prev, [name]: typeof value === "object" ? value.toISOString() : value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="col" gap="6">
        <Heading level={2}>User Registration Form</Heading>

        {/* Text Inputs Section */}
        <Flex direction="col" gap="4">
          <Heading level={3}>Basic Information</Heading>

          <TextInput
            icon={<User />}
            label="Username"
            name="username"
            onChange={handleInputChange("username")}
            placeholder="Enter your username"
            value={formData.username}
          />

          <Input
            icon={<Mail />}
            label="Email Address"
            name="email"
            onChange={handleInputChange("email")}
            placeholder="user@example.com"
            type="email"
            value={formData.email}
          />

          <PasswordInput
            label="Password"
            name="password"
            note="Must be at least 8 characters"
            onChange={handleInputChange("password")}
            placeholder="Enter a secure password"
            value={formData.password}
          />

          <NumberInput
            hint="You must be 18 or older"
            label="Age"
            max={120}
            min={18}
            name="age"
            onChange={handleInputChange("age")}
            placeholder="Enter your age"
            value={formData.age}
          />

          <DateInput
            label="Date of Birth"
            name="birthdate"
            onChange={handleInputChange("birthdate")}
            value={formData.birthdate}
          />
        </Flex>

        {/* Select Inputs Section */}
        <Flex direction="col" gap="4">
          <Heading level={3}>Location & Preferences</Heading>

          <SelectInput
            label="Country"
            name="country"
            onChange={handleInputChange("country")}
            options={[
              { value: "us", label: "United States" },
              { value: "uk", label: "United Kingdom" },
              { value: "ca", label: "Canada" },
              { value: "au", label: "Australia" },
              { value: "de", label: "Germany" },
            ]}
            placeholder="Select your country"
            value={formData.country}
          />

          <ButtonSelectInput
            label="Experience Level"
            name="experience"
            onChange={handleInputChange("experience")}
            options={[
              { value: "beginner", label: "Beginner" },
              { value: "intermediate", label: "Intermediate" },
              { value: "advanced", label: "Advanced" },
              { value: "expert", label: "Expert" },
            ]}
            value={formData.experience}
          />
        </Flex>

        {/* Radio & Checkbox Section */}
        <Flex direction="col" gap="4">
          <Heading level={3}>Account Settings</Heading>

          <RadioSelect
            label="Account Type"
            name="accountType"
            onChange={handleInputChange("accountType")}
            options={[
              { value: "personal", label: "Personal", hint: "For individual use" },
              { value: "business", label: "Business", hint: "For company accounts" },
              { value: "enterprise", label: "Enterprise", hint: "For large organizations" },
            ]}
            value={formData.accountType}
          />

          <Flex direction="col" gap="2">
            <Checkbox
              checked={formData.notifications}
              hint="Receive updates about new features"
              label="Enable email notifications"
              name="notifications"
              onChange={handleInputChange("notifications")}
              value="notifications"
            />

            <Checkbox
              checked={formData.newsletter}
              label="Subscribe to newsletter"
              name="newsletter"
              onChange={handleInputChange("newsletter")}
              value="newsletter"
            />

            <Checkbox
              checked={formData.privacy}
              error={!formData.privacy ? "You must accept the privacy policy to continue" : undefined}
              label="I accept the privacy policy"
              name="privacy"
              onChange={handleInputChange("privacy")}
              value="privacy"
            />
          </Flex>
        </Flex>

        {/* Advanced Inputs Section */}
        <Flex direction="col" gap="4">
          <Heading level={3}>Additional Settings</Heading>

          <Textarea
            label="Bio"
            name="bio"
            note="Tell us a little about yourself"
            onChange={handleInputChange("bio")}
            placeholder="Write a short bio..."
            rows={4}
            value={formData.bio}
          />

          <Switch
            checked={formData.theme === "dark"}
            label="Dark Mode"
            name="theme"
            onChange={(checked) => handleInputChange("theme")(checked ? "dark" : "light")}
          />

          <Slider
            label="Notification Volume"
            max={100}
            min={0}
            name="volume"
            onValueChange={(value) => handleInputChange("volume")(value[0])}
            step={5}
            value={[formData.volume]}
          />

          <DatePicker
            initialValue={formData.preferredContact ? new Date(formData.preferredContact) : undefined}
            onDateSelection={(date) => handleInputChange("preferredContact")(date)}
          />
        </Flex>

        {/* Submit Section */}
        <Flex direction="row" gap="4" justify="end">
          <Button type="button" variant="secondary">
            Cancel
          </Button>
          <SubmitButton disabled={!formData.privacy}>Submit Registration</SubmitButton>
        </Flex>
      </Flex>
    </form>
  );
};

export const CompleteForm: Story = {
  render: () => <CompleteFormExample />,
};

export const FormInCard: Story = {
  render: () => (
    <Card>
      <Card.Header>
        <Card.Title>Create Your Account</Card.Title>
        <Card.Description>
          Fill out the form below to get started with your new account. All fields marked with an asterisk are required.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <CompleteFormExample />
      </Card.Content>
      <Card.Footer>
        <Text size="sm" variant="muted">
          By submitting this form, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </Card.Footer>
    </Card>
  ),
};
