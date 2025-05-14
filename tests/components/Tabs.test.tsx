import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { Tabs } from "@/components";

describe("Tabs", () => {
  test("renders Tabs", async () => {
    render(
      <Tabs defaultValue="tab_1">
        <TabsList>
          <TabsTrigger value="tab_1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab_2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab_3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab_1">This is tab 1</TabsContent>
        <TabsContent value="tab_2">Tab 2, this is</TabsContent>
        <TabsContent value="tab_3">Tab the 3rd, at your service</TabsContent>
      </Tabs>,
    );

    const tabs = screen.getByRole("tablist");
    expect(tabs).toBeInTheDocument();
    expect(tabs.className).toBe("flex w-full items-center gap-2");
  });
});
