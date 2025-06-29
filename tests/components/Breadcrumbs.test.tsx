import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import { Breadcrumbs } from "@/components";

describe("Breadcrumbs", () => {
  const breadcrumbs = [
    { label: "Root", to: "/" },
    { label: "Level 1", to: "/level_1" },
    { label: "Level 2", to: "/level_1/two" },
    { label: "Current" },
  ];

  test("renders Breadcrumbs", async () => {
    render(<Breadcrumbs breadcrumbs={breadcrumbs} />);

    await waitFor(() => {
      expect(screen.getByText("Root")).toBeInTheDocument();
    });

    const rootLink = screen.getByRole("link", { name: "Root" });
    expect(rootLink).toHaveAttribute("href", "/");
    expect(rootLink).not.toHaveAttribute("aria-disabled", "true");
    expect(rootLink.className).toBe("transition-colors hover:text-foreground font-display");

    const level1Link = screen.getByRole("link", { name: "Level 1" });
    expect(level1Link).toHaveAttribute("href", "/level_1");
    expect(level1Link).not.toHaveAttribute("aria-disabled", "true");
    expect(level1Link.className).toBe("transition-colors hover:text-foreground font-display");

    const level2Link = screen.getByRole("link", { name: "Level 2" });
    expect(level2Link).toHaveAttribute("href", "/level_1/two");
    expect(level2Link).not.toHaveAttribute("aria-disabled", "true");
    expect(level2Link.className).toBe("transition-colors hover:text-foreground font-display");

    const currentPage = screen.getByText("Current");
    expect(currentPage).toBeInTheDocument();
    expect(currentPage).toHaveAttribute("aria-disabled", "true");
    expect(currentPage.className).toBe("font-normal text-foreground font-display");
  });

  test("renders Breadcrumbs with custom link component", async () => {
    const onLinkClick = vi.fn();

    const CustomLink = ({ to, label }: { to: string; label: string }) => (
      <button
        aria-disabled={!to}
        className={to ? "cursor-pointer hover:bg-blue-200" : "cursor-default text-black"}
        onClick={to ? () => onLinkClick(to) : undefined}
        type="button"
      >
        {label}
      </button>
    );

    const CustomPage = ({ label }: { label: string }) => (
      <span aria-disabled={true} className="cursor-default text-black">
        {label}
      </span>
    );

    render(<Breadcrumbs breadcrumbs={breadcrumbs} linkComponent={CustomLink} pageComponent={CustomPage} />);

    const rootLink = screen.getByRole("button", { name: "Root" });
    expect(rootLink).not.toHaveAttribute("aria-disabled", "true");
    rootLink.click();
    expect(onLinkClick).toHaveBeenCalledWith("/");
    expect(rootLink.className).toBe("cursor-pointer hover:bg-blue-200");

    const level1Link = screen.getByRole("button", { name: "Level 1" });
    expect(level1Link).not.toHaveAttribute("aria-disabled", "true");
    level1Link.click();
    expect(onLinkClick).toHaveBeenCalledWith("/level_1");
    expect(level1Link.className).toBe("cursor-pointer hover:bg-blue-200");

    const level2Link = screen.getByRole("button", { name: "Level 2" });
    expect(level2Link).not.toHaveAttribute("aria-disabled", "true");
    level2Link.click();
    expect(onLinkClick).toHaveBeenCalledWith("/level_1/two");
    expect(level2Link.className).toBe("cursor-pointer hover:bg-blue-200");

    const currentPage = screen.getByText("Current");
    expect(currentPage).toBeInTheDocument();
    expect(currentPage).toHaveAttribute("aria-disabled", "true");
    expect(currentPage.className).toBe("cursor-default text-black");
  });
});
