import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components";

describe("Tabs", () => {
  const EXPECTED_TAB_TRIGGER_CLASS_NAME =
    "gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100";

  const EXPECTED_TAB_CONTENT_CLASS_NAME = "text-sm flex-1 outline-none";

  const EXPECTED_TABS_LIST_CLASS_NAME =
    "rounded-lg p-[3px] group-data-horizontal/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col bg-muted";

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
      </Tabs>,
    );

    const tabs = screen.getByRole("tablist");
    expect(tabs).toBeInTheDocument();
    expect(tabs.className).toBe(EXPECTED_TABS_LIST_CLASS_NAME);

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
      <Tabs defaultValue="tab_2" orientation="vertical">
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
    expect(tabs.className).toBe(EXPECTED_TABS_LIST_CLASS_NAME);

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
