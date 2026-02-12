import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { TextList } from "@/components";

describe("TextList", () => {
  test("renders a TextList", async () => {
    render(
      <TextList>
        <TextList.Item>Item 1</TextList.Item>
        <TextList.Item>Item 2</TextList.Item>
        <TextList.Item>Item 3</TextList.Item>
      </TextList>,
    );

    const textList = screen.getByRole("list");
    expect(textList).toBeInTheDocument();
    expect(textList.tagName).toBe("UL");
    expect(textList.className).toBe("list-disc list-outside ml-4");

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);

    const item1 = items[0];
    expect(item1).toBeInTheDocument();
    expect(item1.tagName).toBe("LI");
    expect(item1.className).toBe("");
    expect(item1.textContent).toBe("Item 1");

    const item2 = items[1];
    expect(item2).toBeInTheDocument();
    expect(item2.tagName).toBe("LI");
    expect(item2.className).toBe("");
    expect(item2.textContent).toBe("Item 2");

    const item3 = items[2];
    expect(item3).toBeInTheDocument();
    expect(item3.tagName).toBe("LI");
    expect(item3.className).toBe("");
    expect(item3.textContent).toBe("Item 3");
  });

  test("renders a an ordered TextList", async () => {
    render(
      <TextList variant="ordered">
        <TextList.Item>Item 1</TextList.Item>
        <TextList.Item>Item 2</TextList.Item>
      </TextList>,
    );

    const textList = screen.getByRole("list");
    expect(textList).toBeInTheDocument();
    expect(textList.tagName).toBe("OL");
    expect(textList.className).toBe("list-decimal list-outside ml-6");

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);

    const item1 = items[0];
    expect(item1).toBeInTheDocument();
    expect(item1.tagName).toBe("LI");
    expect(item1.className).toBe("");
    expect(item1.textContent).toBe("Item 1");

    const item2 = items[1];
    expect(item2).toBeInTheDocument();
    expect(item2.tagName).toBe("LI");
    expect(item2.className).toBe("");
    expect(item2.textContent).toBe("Item 2");
  });

  test("renders a none TextList", async () => {
    render(
      <TextList variant="none">
        <TextList.Item>Item 1</TextList.Item>
      </TextList>,
    );

    const textList = screen.getByRole("list");
    expect(textList).toBeInTheDocument();
    expect(textList.tagName).toBe("UL");
    expect(textList.className).toBe("list-none list-outside");

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(1);

    const item1 = items[0];
    expect(item1).toBeInTheDocument();
    expect(item1.tagName).toBe("LI");
    expect(item1.className).toBe("");
    expect(item1.textContent).toBe("Item 1");
  });

  test("renders an inside TextList", async () => {
    render(
      <TextList position="inside">
        <TextList.Item>Item 1</TextList.Item>
      </TextList>,
    );

    const textList = screen.getByRole("list");
    expect(textList).toBeInTheDocument();
    expect(textList.tagName).toBe("UL");
    expect(textList.className).toBe("list-disc list-inside");

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(1);

    const item1 = items[0];
    expect(item1).toBeInTheDocument();
    expect(item1.tagName).toBe("LI");
    expect(item1.className).toBe("");
    expect(item1.textContent).toBe("Item 1");
  });
});
