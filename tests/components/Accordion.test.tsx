import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components";

describe("Accordion", () => {
  test("renders info Alert", async () => {
    render(
      <Accordion collapsible type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>This first thing</AccordionTrigger>
          <AccordionContent>And here's the content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>This second thing</AccordionTrigger>
          <AccordionContent>And here's more content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger1 = screen.getByRole("button", { name: "This first thing" });
    expect(trigger1).toBeInTheDocument();

    await userEvent.click(trigger1);

    const content1 = screen.getByText("And here's the content");
    expect(content1).toBeInTheDocument();

    const trigger2 = screen.getByRole("button", { name: "This second thing" });
    expect(trigger2).toBeInTheDocument();

    await userEvent.click(trigger2);

    const content2 = screen.getByText("And here's more content");
    expect(content2).toBeInTheDocument();
    expect(content1).not.toBeInTheDocument();

    await userEvent.click(trigger2);

    expect(content2).not.toBeInTheDocument();
  });
});
