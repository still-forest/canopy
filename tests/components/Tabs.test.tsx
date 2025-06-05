import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components";

describe("Tabs", () => {
  const EXPECTED_TAB_TRIGGER_CLASS_NAME =
    "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-2 py-1 font-medium text-foreground text-sm transition-[color,box-shadow] focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-sm dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0";

  const EXPECTED_TAB_CONTENT_CLASS_NAME = "flex-1 outline-none";

  test("renders Tabs", async () => {
    const user = userEvent.setup();
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
      </Tabs>
    );

    const tabs = screen.getByRole("tablist");
    expect(tabs).toBeInTheDocument();
    expect(tabs.className).toBe(
      "inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground"
    );

    const tab1 = screen.getByRole("tab", { name: "Tab 1" });
    expect(tab1).toBeInTheDocument();
    expect(tab1.className).toBe(EXPECTED_TAB_TRIGGER_CLASS_NAME);

    const tab2 = screen.getByRole("tab", { name: "Tab 2" });
    expect(tab2).toBeInTheDocument();
    expect(tab2.className).toBe(EXPECTED_TAB_TRIGGER_CLASS_NAME);

    const tab3 = screen.getByRole("tab", { name: "Tab 3" });
    expect(tab3).toBeInTheDocument();
    expect(tab3.className).toBe(EXPECTED_TAB_TRIGGER_CLASS_NAME);

    const tab1Content = screen.getByRole("tabpanel", { name: "Tab 1" });
    expect(tab1Content).toBeInTheDocument();
    expect(tab1Content.className).toBe(EXPECTED_TAB_CONTENT_CLASS_NAME);
    expect(tab1Content.textContent).toBe("This is tab 1");

    await user.click(tab2);

    const tab2Content = screen.getByRole("tabpanel", { name: "Tab 2" });
    expect(tab2Content).toBeInTheDocument();
    expect(tab2Content.className).toBe(EXPECTED_TAB_CONTENT_CLASS_NAME);
    expect(tab2Content.textContent).toBe("Tab 2, this is");

    await user.click(tab3);

    const tab3Content = screen.getByRole("tabpanel", { name: "Tab 3" });
    expect(tab3Content).toBeInTheDocument();
    expect(tab3Content.className).toBe(EXPECTED_TAB_CONTENT_CLASS_NAME);
    expect(tab3Content.textContent).toBe("Tab the 3rd, at your service");
  });

  test("renders Tabs with different default tab", async () => {
    const user = userEvent.setup();
    render(
      <Tabs orientation="vertical" defaultValue="tab_2">
        <TabsList>
          <TabsTrigger value="tab_1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab_2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab_3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab_1">This is tab 1</TabsContent>
        <TabsContent value="tab_2">Tab 2, this is</TabsContent>
        <TabsContent value="tab_3">Tab the 3rd, at your service</TabsContent>
      </Tabs>
    );

    const tabs = screen.getByRole("tablist");
    expect(tabs).toBeInTheDocument();
    expect(tabs.className).toBe(
      "inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground"
    );

    const tab1 = screen.getByRole("tab", { name: "Tab 1" });
    expect(tab1).toBeInTheDocument();
    expect(tab1.className).toBe(EXPECTED_TAB_TRIGGER_CLASS_NAME);

    const tab2 = screen.getByRole("tab", { name: "Tab 2" });
    expect(tab2).toBeInTheDocument();
    expect(tab2.className).toBe(EXPECTED_TAB_TRIGGER_CLASS_NAME);

    const tab3 = screen.getByRole("tab", { name: "Tab 3" });
    expect(tab3).toBeInTheDocument();
    expect(tab3.className).toBe(EXPECTED_TAB_TRIGGER_CLASS_NAME);

    const tab2Content = screen.getByRole("tabpanel", { name: "Tab 2" });
    expect(tab2Content).toBeInTheDocument();
    expect(tab2Content.className).toBe(EXPECTED_TAB_CONTENT_CLASS_NAME);
    expect(tab2Content.textContent).toBe("Tab 2, this is");

    await user.click(tab1);

    const tab1Content = screen.getByRole("tabpanel", { name: "Tab 1" });
    expect(tab1Content).toBeInTheDocument();
    expect(tab1Content.className).toBe(EXPECTED_TAB_CONTENT_CLASS_NAME);
    expect(tab1Content.textContent).toBe("This is tab 1");
    await user.click(tab3);

    const tab3Content = screen.getByRole("tabpanel", { name: "Tab 3" });
    expect(tab3Content).toBeInTheDocument();
    expect(tab3Content.className).toBe(EXPECTED_TAB_CONTENT_CLASS_NAME);
    expect(tab3Content.textContent).toBe("Tab the 3rd, at your service");
  });
});
