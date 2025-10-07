import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { Empty } from "@/components";

describe("Empty", () => {
  test("renders a Empty", async () => {
    render(
      <Empty>
        <Empty.Header>
          <p>Empty Header</p>
        </Empty.Header>
        <Empty.Content>
          <Empty.Title>Empty Title</Empty.Title>
          <Empty.Description>Empty Description</Empty.Description>
        </Empty.Content>
      </Empty>,
    );

    const header = screen.getByText("Empty Header");
    expect(header).toBeInTheDocument();

    const title = screen.getByText("Empty Title");
    expect(title).toBeInTheDocument();

    const description = screen.getByText("Empty Description");
    expect(description).toBeInTheDocument();
  });
});
