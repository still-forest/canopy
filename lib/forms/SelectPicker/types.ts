export interface SelectPickerOptionGroup {
  label: string;
  options: SelectPickerOption[];
}

export type SelectPickerOptionValue = string;

export interface SelectPickerOption {
  icon?: string;
  label: string;
  value: SelectPickerOptionValue;
  keywords?: string[];
}
