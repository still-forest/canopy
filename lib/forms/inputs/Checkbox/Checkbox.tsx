import type { ComponentProps } from "react";
import "./Checkbox.css";
import { cn } from "@/utils/cn";

export interface CheckboxProps extends Omit<ComponentProps<"input">, "onChange"> {
  onCheckedChange: (checked: boolean) => void;
}

export const Checkbox = ({ children, className, onCheckedChange, name, id, ...props }: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onCheckedChange(e.target.checked);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <input
      className={cn("checkbox", className)}
      data-slot="checkbox"
      id={id || name}
      name={name}
      onChange={handleChange}
      onClick={handleClick}
      type="checkbox"
      {...props}
    />
  );
};
