import { ChevronFirst, ChevronLast } from "lucide-react";
import { useMemo } from "react";

import {
  Pagination as PaginationBase,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  pageCount: number;
  currentPage: number;
  onChange: (page: number) => void;
}

export const Pagination = ({ pageCount, currentPage, onChange }: Props) => {
  const validPageCount = Math.max(1, pageCount);
  const validCurrentPage = Math.max(1, Math.min(currentPage, validPageCount));

  const selectablePages = useMemo(() => {
    if (validPageCount === 1) {
      return [1];
    }
    if (validCurrentPage <= 3) {
      return Array.from({ length: Math.min(3, validPageCount) }, (_, i) => i + 1);
    }
    if (validCurrentPage >= validPageCount - 2) {
      return Array.from(
        { length: Math.min(3, validPageCount) },
        (_, i) => validPageCount - Math.min(3, validPageCount) + i + 1,
      );
    }
    return [validCurrentPage - 1, validCurrentPage, validCurrentPage + 1];
  }, [validCurrentPage, validPageCount]);

  return (
    <PaginationBase>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            onClick={() => onChange(1)}
            className="h-auto w-auto cursor-pointer gap-1 px-2.5 py-2 has-[>svg]:px-3 sm:pl-2.5"
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : undefined}
            style={{ opacity: currentPage === 1 ? 0.5 : 1, pointerEvents: currentPage === 1 ? "none" : "auto" }}
            aria-label="Go to first page"
          >
            <ChevronFirst />
            <span className="hidden sm:block">First</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onChange(Math.max(currentPage - 1, 1))}
            className="cursor-pointer"
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : undefined}
            style={{
              opacity: currentPage === 1 ? 0.5 : 1,
              pointerEvents: currentPage === 1 ? "none" : "auto",
            }}
            aria-label="Go to previous page"
          />
        </PaginationItem>
        {selectablePages[0] > 1 && <PaginationEllipsis aria-label="More pages" />}
        {selectablePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={currentPage === page}
              onClick={() => onChange(page)}
              className="cursor-pointer"
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {selectablePages[selectablePages.length - 1] < pageCount && <PaginationEllipsis aria-label="More pages" />}
        <PaginationItem>
          <PaginationNext
            onClick={() => onChange(Math.min(currentPage + 1, pageCount))}
            className="cursor-pointer"
            aria-disabled={currentPage === pageCount}
            tabIndex={currentPage === pageCount ? -1 : undefined}
            style={{
              opacity: currentPage === pageCount ? 0.5 : 1,
              pointerEvents: currentPage === pageCount ? "none" : "auto",
            }}
            aria-label="Go to next page"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => onChange(pageCount)}
            className="h-auto w-auto cursor-pointer gap-1 px-2.5 py-2 has-[>svg]:px-3 sm:pl-2.5"
            aria-disabled={currentPage === pageCount}
            tabIndex={currentPage === pageCount ? -1 : undefined}
            style={{
              opacity: currentPage === pageCount ? 0.5 : 1,
              pointerEvents: currentPage === pageCount ? "none" : "auto",
            }}
            aria-label="Go to last page"
          >
            Last
            <ChevronLast />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </PaginationBase>
  );
};
