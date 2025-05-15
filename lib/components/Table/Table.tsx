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

const Table = ({ children, ...props }: React.ComponentProps<"table">) => {
  return <BaseTable {...props}>{children}</BaseTable>;
};

Table.Body = TableBody;
Table.Caption = TableCaption;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Header = TableHeader;
Table.Row = TableRow;

export { Table };
