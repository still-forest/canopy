import { TextInput, type TextInputProps } from "@/forms";
import { cn } from "@/utils";

interface DateInputProps extends Omit<TextInputProps, "type"> {}

const DateInput = ({ name, label, placeholder, note, className, size = "md", ...props }: DateInputProps) => {
  return (
    <TextInput
      className={cn(
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

export { DateInput };
