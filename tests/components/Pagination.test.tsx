import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { Pagination } from "@/components";

describe("Pagination", () => {
  const onPageChange = vi.fn();

  const EXPECTED_CURRENT_PAGE_CLASSES =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 cursor-pointer";

  const EXPECTED_OTHER_PAGE_CLASSES =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 cursor-pointer";

  test("renders Pagination with the correct number of pages and styles", async () => {
    render(<Pagination pageCount={10} currentPage={1} onChange={onPageChange} />);

    const pagination = screen.getByRole("navigation");
    expect(pagination.className).toBe("mx-auto flex w-full justify-center");

    const firstPage = screen.getByLabelText("Go to first page");
    expect(firstPage).toBeInTheDocument();
    expect(firstPage.className).toBe(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 h-auto w-auto cursor-pointer gap-1 px-2.5 py-2 has-[>svg]:px-3 sm:pl-2.5",
    );
    expect(firstPage.getAttribute("aria-disabled")).toBe("true");

    const previousPage = screen.getByLabelText("Go to previous page");
    expect(previousPage).toBeInTheDocument();
    expect(previousPage.className).toBe(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 py-2 has-[>svg]:px-3 gap-1 px-2.5 sm:pl-2.5 cursor-pointer",
    );
    expect(previousPage.getAttribute("aria-disabled")).toBe("true");

    const page1 = screen.getByLabelText("Go to page 1");
    expect(page1).toBeInTheDocument();
    expect(page1.className).toBe(EXPECTED_CURRENT_PAGE_CLASSES);
    expect(page1.getAttribute("aria-disabled")).toBe(null);

    const page2 = screen.getByLabelText("Go to page 2");
    expect(page2).toBeInTheDocument();
    expect(page2.className).toBe(EXPECTED_OTHER_PAGE_CLASSES);
    expect(page2.getAttribute("aria-disabled")).toBe(null);

    const page3 = screen.getByLabelText("Go to page 3");
    expect(page3).toBeInTheDocument();
    expect(page3.className).toBe(EXPECTED_OTHER_PAGE_CLASSES);
    expect(page3.getAttribute("aria-disabled")).toBe(null);

    const ellipsis = document.querySelector("[data-slot='pagination-ellipsis']");
    expect(ellipsis).toBeInTheDocument();
    expect(ellipsis?.className).toBe("flex size-9 items-center justify-center");

    expect(screen.queryByText("4")).not.toBeInTheDocument();
    expect(screen.queryByText("5")).not.toBeInTheDocument();
    expect(screen.queryByText("6")).not.toBeInTheDocument();
    expect(screen.queryByText("7")).not.toBeInTheDocument();
    expect(screen.queryByText("8")).not.toBeInTheDocument();
    expect(screen.queryByText("9")).not.toBeInTheDocument();
    expect(screen.queryByText("10")).not.toBeInTheDocument();

    const nextPage = screen.getByLabelText("Go to next page");
    expect(nextPage).toBeInTheDocument();
    expect(nextPage.className).toBe(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 py-2 has-[>svg]:px-3 gap-1 px-2.5 sm:pr-2.5 cursor-pointer",
    );

    const lastPage = screen.getByLabelText("Go to last page");
    expect(lastPage).toBeInTheDocument();
    expect(lastPage.className).toBe(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 h-auto w-auto cursor-pointer gap-1 px-2.5 py-2 has-[>svg]:px-3 sm:pl-2.5",
    );
  });

  test("renders Pagination without ellipsis when there are fewer than 3 pages", async () => {
    render(<Pagination pageCount={2} currentPage={1} onChange={onPageChange} />);

    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Previous")).toBeInTheDocument();

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.queryByText("3")).not.toBeInTheDocument();
    expect(document.querySelector("[data-slot='pagination-ellipsis']")).not.toBeInTheDocument();

    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Last")).toBeInTheDocument();
  });

  test("calls onChange when a page number is clicked", async () => {
    render(<Pagination pageCount={10} currentPage={1} onChange={onPageChange} />);

    const page2 = screen.getByText("2");
    await userEvent.click(page2);

    expect(onPageChange).toHaveBeenCalledWith(2);

    const page3 = screen.getByText("3");
    await userEvent.click(page3);

    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  test("calls onChange when the first button is clicked", async () => {
    render(<Pagination pageCount={10} currentPage={2} onChange={onPageChange} />);

    const firstPage = screen.getByText("First");
    await userEvent.click(firstPage);

    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  test("calls onChange when the last button is clicked", async () => {
    render(<Pagination pageCount={10} currentPage={1} onChange={onPageChange} />);

    const lastPage = screen.getByText("Last");
    await userEvent.click(lastPage);

    expect(onPageChange).toHaveBeenCalledWith(10);
  });

  test("calls onChange when the next button is clicked", async () => {
    render(<Pagination pageCount={10} currentPage={1} onChange={onPageChange} />);

    const nextPage = screen.getByText("Next");
    await userEvent.click(nextPage);

    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  test("calls onChange when navigating from a middle page", async () => {
    render(<Pagination pageCount={10} currentPage={5} onChange={onPageChange} />);

    const previousPage = screen.getByText("Previous");
    await userEvent.click(previousPage);

    expect(onPageChange).toHaveBeenCalledWith(4);

    const nextPage = screen.getByText("Next");
    await userEvent.click(nextPage);

    expect(onPageChange).toHaveBeenCalledWith(6);
  });

  test("disables all navigation when there is only one page", async () => {
    render(<Pagination pageCount={1} currentPage={1} onChange={onPageChange} />);

    const firstPage = screen.getByLabelText("Go to first page");
    const previousPage = screen.getByLabelText("Go to previous page");
    const nextPage = screen.getByLabelText("Go to next page");
    const lastPage = screen.getByLabelText("Go to last page");

    expect(firstPage.getAttribute("aria-disabled")).toBe("true");
    expect(previousPage.getAttribute("aria-disabled")).toBe("true");
    expect(nextPage.getAttribute("aria-disabled")).toBe("true");
    expect(lastPage.getAttribute("aria-disabled")).toBe("true");

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.queryByText("2")).not.toBeInTheDocument();
  });
});
