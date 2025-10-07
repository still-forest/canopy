import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { Item } from "@/components";

describe("Item", () => {
  test("renders a Item", async () => {
    render(
      <Item>
        <Item.Header>
          <p>Item Header</p>
        </Item.Header>
        <Item.Content>
          <Item.Title>Item Title</Item.Title>
          <Item.Description>Item Description</Item.Description>
        </Item.Content>
        <Item.Actions>Item Action</Item.Actions>
        <Item.Footer>
          <p>Item Footer</p>
        </Item.Footer>
      </Item>,
    );

    const header = screen.getByText("Item Header");
    expect(header).toBeInTheDocument();

    const title = screen.getByText("Item Title");
    expect(title).toBeInTheDocument();

    const description = screen.getByText("Item Description");
    expect(description).toBeInTheDocument();

    const action = screen.getByText("Item Action");
    expect(action).toBeInTheDocument();

    const footer = screen.getByText("Item Footer");
    expect(footer).toBeInTheDocument();
  });
});
