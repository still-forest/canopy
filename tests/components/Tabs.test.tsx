import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { Tabs } from "@/components";

describe("Tabs", () => {
  test("renders Tabs", async () => {
    const user = userEvent.setup();
    render(
      <Tabs defaultValue="tab_1">
        <Tabs.List>
          <Tabs.Trigger value="tab_1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab_2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab_3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab_1">This is tab 1</Tabs.Content>
        <Tabs.Content value="tab_2">Tab 2, this is</Tabs.Content>
        <Tabs.Content value="tab_3">Tab the 3rd, at your service</Tabs.Content>
      </Tabs>,
    );

    const tabs = screen.getByRole("tablist");
    expect(tabs).toBeInTheDocument();

    const tab1 = screen.getByRole("tab", { name: "Tab 1" });
    expect(tab1).toBeInTheDocument();

    const tab2 = screen.getByRole("tab", { name: "Tab 2" });
    expect(tab2).toBeInTheDocument();

    const tab3 = screen.getByRole("tab", { name: "Tab 3" });
    expect(tab3).toBeInTheDocument();

    const tab1Content = screen.getByRole("tabpanel", { name: "Tab 1" });
    expect(tab1Content).toBeInTheDocument();
    expect(tab1Content.textContent).toBe("This is tab 1");

    await user.click(tab2);

    const tab2Content = screen.getByRole("tabpanel", { name: "Tab 2" });
    expect(tab2Content).toBeInTheDocument();
    expect(tab2Content.textContent).toBe("Tab 2, this is");

    await user.click(tab3);

    const tab3Content = screen.getByRole("tabpanel", { name: "Tab 3" });
    expect(tab3Content).toBeInTheDocument();
    expect(tab3Content.textContent).toBe("Tab the 3rd, at your service");
  });

  test("renders Tabs with different default tab", async () => {
    const user = userEvent.setup();
    render(
      <Tabs defaultValue="tab_2" orientation="vertical">
        <Tabs.List>
          <Tabs.Trigger value="tab_1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab_2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab_3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab_1">This is tab 1</Tabs.Content>
        <Tabs.Content value="tab_2">Tab 2, this is</Tabs.Content>
        <Tabs.Content value="tab_3">Tab the 3rd, at your service</Tabs.Content>
      </Tabs>,
    );

    const tabs = screen.getByRole("tablist");
    expect(tabs).toBeInTheDocument();

    const tab1 = screen.getByRole("tab", { name: "Tab 1" });
    expect(tab1).toBeInTheDocument();

    const tab2 = screen.getByRole("tab", { name: "Tab 2" });
    expect(tab2).toBeInTheDocument();

    const tab3 = screen.getByRole("tab", { name: "Tab 3" });
    expect(tab3).toBeInTheDocument();

    const tab2Content = screen.getByRole("tabpanel", { name: "Tab 2" });
    expect(tab2Content).toBeInTheDocument();
    expect(tab2Content.textContent).toBe("Tab 2, this is");

    await user.click(tab1);

    const tab1Content = screen.getByRole("tabpanel", { name: "Tab 1" });
    expect(tab1Content).toBeInTheDocument();
    expect(tab1Content.textContent).toBe("This is tab 1");
    await user.click(tab3);

    const tab3Content = screen.getByRole("tabpanel", { name: "Tab 3" });
    expect(tab3Content).toBeInTheDocument();
    expect(tab3Content.textContent).toBe("Tab the 3rd, at your service");
  });
});
