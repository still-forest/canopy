import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { Collapsible } from "@/components";
import { Button } from "@/components/ui/button";
import { Text } from "@/typography";

describe("Collapsible", () => {
  test("renders a Collapsible", async () => {
    render(
      <Collapsible>
        <Collapsible.Trigger>This is the thing that is collapsed</Collapsible.Trigger>
        <Collapsible.Content>And here's the content</Collapsible.Content>
      </Collapsible>,
    );

    const trigger = screen.getByRole("button", { name: "This is the thing that is collapsed" });
    expect(trigger).toBeInTheDocument();

    await userEvent.click(trigger);

    expect(screen.getByText("And here's the content")).toBeInTheDocument();
  });

  test("renders a Collapsible with custom trigger and styled content", async () => {
    render(
      <Collapsible>
        <Collapsible.Trigger
          render={(props) => (
            <Button variant="outline" {...props}>
              This is the thing that is collapsed
            </Button>
          )}
        />
        <Collapsible.Content className="bg-info/10 p-2">
          <Text weight="thin">And here's the content</Text>
        </Collapsible.Content>
      </Collapsible>,
    );

    const trigger = screen.getByRole("button", { name: "This is the thing that is collapsed" });
    expect(trigger).toBeInTheDocument();
    expect(trigger.tagName).toBe("BUTTON");
    expect(trigger.className).toContain("border");

    await userEvent.click(trigger);

    const content = screen.getByText("And here's the content");
    expect(content).toBeInTheDocument();
    expect(content.className).toContain("font-thin");
  });
});
