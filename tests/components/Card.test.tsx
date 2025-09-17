import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { Card } from "@/components";

describe("Card", () => {
  test("renders a Card", async () => {
    render(
      <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card Description</Card.Description>
          <Card.Action>Card Action</Card.Action>
        </Card.Header>
        <Card.Content>
          <p>Card Content</p>
        </Card.Content>
        <Card.Footer>
          <p>Card Footer</p>
        </Card.Footer>
      </Card>,
    );
    const title = screen.getByText("Card Title");
    expect(title).toBeInTheDocument();

    const description = screen.getByText("Card Description");
    expect(description).toBeInTheDocument();

    const action = screen.getByText("Card Action");
    expect(action).toBeInTheDocument();

    const content = screen.getByText("Card Content");
    expect(content).toBeInTheDocument();

    const footer = screen.getByText("Card Footer");
    expect(footer).toBeInTheDocument();
  });
});
