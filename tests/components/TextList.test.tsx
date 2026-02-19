import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { TextList } from "@/lists";

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
    expect(textList.className).toContain("list-disc");
    expect(textList.className).toContain("list-outside");

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);

    expect(items[0].textContent).toBe("Item 1");
    expect(items[1].textContent).toBe("Item 2");
    expect(items[2].textContent).toBe("Item 3");
  });

  test("renders an ordered TextList", async () => {
    render(
      <TextList variant="ordered">
        <TextList.Item>Item 1</TextList.Item>
        <TextList.Item>Item 2</TextList.Item>
      </TextList>,
    );

    const textList = screen.getByRole("list");
    expect(textList).toBeInTheDocument();
    expect(textList.tagName).toBe("OL");
    expect(textList.className).toContain("list-decimal");
    expect(textList.className).toContain("list-outside");

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);

    expect(items[0].textContent).toBe("Item 1");
    expect(items[1].textContent).toBe("Item 2");
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
    expect(textList.className).toContain("list-none");
    expect(textList.className).toContain("list-outside");

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(1);

    expect(items[0].textContent).toBe("Item 1");
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
    expect(textList.className).toContain("list-disc");
    expect(textList.className).toContain("list-inside");

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(1);

    expect(items[0].textContent).toBe("Item 1");
  });
});
