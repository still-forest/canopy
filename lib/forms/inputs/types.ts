export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectOptionGroup {
  label: string | null;
  options: SelectOption[];
}
