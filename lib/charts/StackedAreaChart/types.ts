import ProperDate from "@jszymanowski/proper-date.js";

export interface TooltipData {
  date: ProperDate;
  label: string;
  total: number;
  value: number;
}

export interface Serie {
  key: string;
  label: string;
  y: number;
}

export interface DataPoint {
  x: Date;
  yTotal: number;
  ySeries: Serie[];
}
