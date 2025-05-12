export interface VisxAreaStackData {
  x: Date;
  [key: string]: number | Date; // TODO: this shouldn't be a Date, but is necessary because of x
}

export type VisxAreaStackDataPoint = {
  [key: number]: number; // in practice, 2 elements
  data: VisxAreaStackData;
};

export type VisxAreaStack = {
  [key: string]: VisxAreaStackDataPoint | number | string; // In practice, a VisxAreaStackDataPoint for each data point
  index: number;
  key: string;
};
