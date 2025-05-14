import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "@/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components";
import { sampleParagraphText, sampleText, sampleLongText } from "@stories/support/sampleText";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  decorators: [
    (Story) => (
      <Flex justify="center" className="w-full">
        <Story />
      </Flex>
    ),
  ],
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
