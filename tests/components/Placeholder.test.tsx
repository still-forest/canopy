import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { Inbox } from "lucide-react";
import { Placeholder } from "@/components";

describe("Placeholder", () => {
  test("renders a Placeholder", async () => {
    render(
      <Placeholder description="Get started by creating your first item." icon={<Inbox />} title="No items yet" />,
    );

    const title = screen.getByText("No items yet");
    expect(title).toBeInTheDocument();

    const description = screen.getByText("Get started by creating your first item.");
    expect(description).toBeInTheDocument();
  });
});
