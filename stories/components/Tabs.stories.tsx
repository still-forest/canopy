import { sampleLongText, sampleParagraphText, sampleText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components";

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
      <TabsList>
        <TabsTrigger value="tab_1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab_2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab_3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab_1">{sampleParagraphText}</TabsContent>
      <TabsContent value="tab_2">{sampleText}</TabsContent>
      <TabsContent value="tab_3">{sampleLongText}</TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="tab_1" orientation="vertical">
      <TabsList>
        <TabsTrigger value="tab_1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab_2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab_3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab_1">{sampleParagraphText}</TabsContent>
      <TabsContent value="tab_2">{sampleText}</TabsContent>
      <TabsContent value="tab_3">{sampleLongText}</TabsContent>
    </Tabs>
  ),
};

export const OtherDefaultTab: Story = {
  render: () => (
    <Tabs defaultValue="tab_3" orientation="vertical">
      <TabsList>
        <TabsTrigger value="tab_1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab_2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab_3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab_1">{sampleParagraphText}</TabsContent>
      <TabsContent value="tab_2">{sampleText}</TabsContent>
      <TabsContent value="tab_3">{sampleLongText}</TabsContent>
    </Tabs>
  ),
};
