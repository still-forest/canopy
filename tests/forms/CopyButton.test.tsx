import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import { CopyButton } from "@/forms";

const mockClipboardWriteText = vi.fn().mockResolvedValue(undefined);

// Mock navigator.clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: mockClipboardWriteText,
  },
});

describe("CopyButton", () => {
  test("renders a Button with an onClick action", async () => {
    render(<CopyButton content="Some text\n\nSome more text" />);

    expect(screen.getByRole("button")).toHaveTextContent("Copy");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).not.toBeDisabled();

    fireEvent.click(screen.getByText("Copy"));
    expect(screen.getByText("Copied")).toBeInTheDocument();
    expect(mockClipboardWriteText).toHaveBeenCalledWith("Some text\\n\\nSome more text");
  });
});
