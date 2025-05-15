import type { Meta, StoryObj } from "@storybook/react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Are you insane?</AccordionTrigger>
        <AccordionContent>
          Now I... I finally have time to do what I've always wanted: write the great American novel. Mine is about a
          futuristic amusement park where dinosaurs are brought to life through advanced cloning techniques. I call it
          "Billy and the Cloneasaurus."
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Are you sure it's on!?</AccordionTrigger>
        <AccordionContent>I can't hear a thing!</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Want me to zinc your sniffer?</AccordionTrigger>
        <AccordionContent>
          I'll have a Shirley... No, a virgin... No, a children's... Oh, what the heck? You only live once. Give me a
          white wine spritzer!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
