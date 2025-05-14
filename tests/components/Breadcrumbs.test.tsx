import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import { Breadcrumbs } from "@/components";

describe("Breadcrumbs", () => {
  test("renders Breadcrumbs", async () => {
    const breadcrumbs = [
      { label: "Root", to: "/" },
      { label: "Level 1", to: "/level_1" },
      { label: "Level 2", to: "/level_1/two" },
      { label: "Current" },
    ];

    render(<Breadcrumbs breadcrumbs={breadcrumbs} />);

    await waitFor(() => {
      expect(screen.getByText("Root")).toBeInTheDocument();
    });

    const rootLink = screen.getByRole("link", { name: "Root" });
    expect(rootLink).toHaveAttribute("href", "/");
    expect(rootLink).not.toHaveAttribute("aria-disabled", "true");

    const level1Link = screen.getByRole("link", { name: "Level 1" });
    expect(level1Link).toHaveAttribute("href", "/level_1");
    expect(level1Link).not.toHaveAttribute("aria-disabled", "true");

    const level2Link = screen.getByRole("link", { name: "Level 2" });
    expect(level2Link).toHaveAttribute("href", "/level_1/two");
    expect(level2Link).not.toHaveAttribute("aria-disabled", "true");

    const currentPage = screen.getByText("Current");
    expect(currentPage).toBeInTheDocument();
    expect(currentPage).toHaveAttribute("aria-disabled", "true");
  });

  test("renders Breadcrumbs with custom link component", async () => {
    const breadcrumbs = [
      { label: "Root", to: "/" },
      { label: "Level 1", to: "/level_1" },
      { label: "Level 2", to: "/level_1/two" },
      { label: "Current" },
    ];

    const onLinkClick = vi.fn();

    const CustomLink = ({ to, label }: { to?: string; label: string }) => (
      <button
        type="button"
        onClick={() => onLinkClick(to)}
        className="cursor-pointer hover:bg-blue-200"
        aria-disabled={!to}
      >
        {label}
      </button>
    );

    render(<Breadcrumbs breadcrumbs={breadcrumbs} linkComponent={CustomLink} />);

    const rootLink = screen.getByRole("button", { name: "Root" });
    expect(rootLink).not.toHaveAttribute("aria-disabled", "true");
    rootLink.click();
    expect(onLinkClick).toHaveBeenCalledWith("/");

    const level1Link = screen.getByRole("button", { name: "Level 1" });
    expect(level1Link).not.toHaveAttribute("aria-disabled", "true");
    level1Link.click();
    expect(onLinkClick).toHaveBeenCalledWith("/level_1");

    const level2Link = screen.getByRole("button", { name: "Level 2" });
    expect(level2Link).not.toHaveAttribute("aria-disabled", "true");
    level2Link.click();
    expect(onLinkClick).toHaveBeenCalledWith("/level_1/two");

    const currentPage = screen.getByText("Current");
    expect(currentPage).toBeInTheDocument();
    expect(currentPage).toHaveAttribute("aria-disabled", "true");
  });
});
