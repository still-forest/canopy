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
  const selectablePages = useMemo(() => {
    if (currentPage <= 3) {
      return Array.from({ length: 3 }, (_, i) => i + 1);
    }
    if (currentPage >= pageCount - 2) {
      return Array.from({ length: 3 }, (_, i) => pageCount - 3 + i + 1);
    }
    return [currentPage - 1, currentPage, currentPage + 1];
  }, [currentPage, pageCount]);

  return (
    <PaginationBase>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            onClick={() => onChange(1)}
            className="h-auto w-auto cursor-pointer gap-1 px-2.5 py-2 has-[>svg]:px-3 sm:pl-2.5"
          >
            <ChevronFirst />
            <span className="hidden sm:block">First</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious onClick={() => onChange(Math.max(currentPage - 1, 1))} className="cursor-pointer" />
        </PaginationItem>
        {selectablePages[0] > 1 && <PaginationEllipsis />}
        {selectablePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink isActive={currentPage === page} onClick={() => onChange(page)} className="cursor-pointer">
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {selectablePages[selectablePages.length - 1] < pageCount && <PaginationEllipsis />}
        <PaginationItem>
          <PaginationNext onClick={() => onChange(Math.min(currentPage + 1, pageCount))} className="cursor-pointer" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => onChange(pageCount)}
            className="h-auto w-auto cursor-pointer gap-1 px-2.5 py-2 has-[>svg]:px-3 sm:pl-2.5"
          >
            Last
            <ChevronLast />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </PaginationBase>
  );
};
