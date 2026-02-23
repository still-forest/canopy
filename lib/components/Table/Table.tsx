import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";
import "./Table.css";

const Table = ({ className, ...props }: ComponentProps<"table">) => {
  return <table className={cn("table", className)} {...props} />;
};

const TableHeader = (props: ComponentProps<"thead">) => {
  return <thead {...props} />;
};

const TableBody = (props: ComponentProps<"tbody">) => {
  return <tbody {...props} />;
};

const TableFooter = (props: ComponentProps<"tfoot">) => {
  return <tfoot {...props} />;
};

const TableHead = (props: ComponentProps<"th">) => {
  return <th {...props} />;
};

const TableRow = (props: ComponentProps<"tr">) => {
  return <tr {...props} />;
};

const TableCell = (props: ComponentProps<"td">) => {
  return <td {...props} />;
};

const TableCaption = (props: ComponentProps<"caption">) => {
  return <caption {...props} />;
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Footer = TableFooter;
Table.Head = TableHead;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Caption = TableCaption;

export { Table };
