import type * as React from "react";
import {
  Table as BaseTable,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export { TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type TableComponent = React.FC<React.ComponentProps<"table">> & {
  Body: typeof TableBody;
  Caption: typeof TableCaption;
  Cell: typeof TableCell;
  Head: typeof TableHead;
  Header: typeof TableHeader;
  Row: typeof TableRow;
};

const Table: TableComponent = ({ children, ...props }: React.ComponentProps<"table">) => {
  return <BaseTable {...props}>{children}</BaseTable>;
};

Table.Body = TableBody;
Table.Caption = TableCaption;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Header = TableHeader;
Table.Row = TableRow;

export { Table };
