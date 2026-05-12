import { sampleLongText, sampleParagraphText, sampleText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "@/components";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab_1">
      <Tabs.List>
        <Tabs.Trigger value="tab_1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab_2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab_3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab_1">{sampleParagraphText}</Tabs.Content>
      <Tabs.Content value="tab_2">{sampleText}</Tabs.Content>
      <Tabs.Content value="tab_3">{sampleLongText}</Tabs.Content>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="tab_1" orientation="vertical">
      <Tabs.List>
        <Tabs.Trigger value="tab_1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab_2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab_3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab_1">{sampleParagraphText}</Tabs.Content>
      <Tabs.Content value="tab_2">{sampleText}</Tabs.Content>
      <Tabs.Content value="tab_3">{sampleLongText}</Tabs.Content>
    </Tabs>
  ),
};

export const OtherDefaultTab: Story = {
  render: () => (
    <Tabs defaultValue="tab_3" orientation="vertical">
      <Tabs.List>
        <Tabs.Trigger value="tab_1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab_2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab_3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab_1">{sampleParagraphText}</Tabs.Content>
      <Tabs.Content value="tab_2">{sampleText}</Tabs.Content>
      <Tabs.Content value="tab_3">{sampleLongText}</Tabs.Content>
    </Tabs>
  ),
};
