import { TextField, type TextFieldProps } from "@/forms";
import { cn } from "@/utils";

interface DateFieldProps extends Omit<TextFieldProps, "type"> {}

const DateField = ({ name, label, placeholder, note, className, size = "md", ...props }: DateFieldProps) => {
  return (
    <TextField
      className={cn(
        size === "xs" && "max-w-[140px] md:max-w-[135px]",
        size === "sm" && "max-w-[150px] md:max-w-[140px]",
        size === "md" && "max-w-[170px] md:max-w-[150px]",
        size === "lg" && "max-w-[180px] md:max-w-[170px]",
        size === "xl" && "max-w-[200px]",
        className,
      )}
      label={label}
      name={name}
      note={note}
      placeholder={placeholder}
      size={size}
      type="date"
      {...props}
    />
  );
};

export { DateField };
