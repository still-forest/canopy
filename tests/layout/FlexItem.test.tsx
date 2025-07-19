import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { Flex } from "@/layout";
import { FLEX_ALIGNS, FLEX_DIRECTIONS, FLEX_GROWS, FLEX_JUSTIFIES, FLEX_WRAPS, GAPS } from "@/types";

describe("FlexItem", () => {
  it("renders with default props", () => {
    render(<Flex.Item data-testid="flex-element">Content</Flex.Item>);
    const element = screen.getByTestId("flex-element");

    expect(element.tagName).toBe("DIV");
    expect(element.className).toBe("");
  });

  it("renders with custom element type", () => {
    render(
      <Flex.Item as="section" data-testid="flex-element">
        Content
      </Flex.Item>,
    );
    const element = screen.getByTestId("flex-element");

    expect(element.tagName).toBe("SECTION");
    expect(element.className).toBe("");
  });
});
