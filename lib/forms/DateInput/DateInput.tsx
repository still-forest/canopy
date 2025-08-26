import { TextInput, type TextInputProps } from "@/forms";
import { cn } from "@/utils";

interface DateInputProps extends Omit<TextInputProps, "type"> {}

const DateInput = ({ name, label, placeholder, note, className, ...props }: DateInputProps) => {
  return (
    <TextInput
      className={cn("max-w-[150px]", className)}
      label={label}
      name={name}
      note={note}
      placeholder={placeholder}
      type="date"
      {...props}
    />
  );
};

export { DateInput };
