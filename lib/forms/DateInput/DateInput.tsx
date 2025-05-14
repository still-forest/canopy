import { TextInput, type TextInputProps } from "@/forms";
import { cn } from "@/utils";

interface DateInputProps extends Omit<TextInputProps, "type"> {}

const DateInput = ({ name, label, placeholder, note, className, ...props }: DateInputProps) => {
  return (
    <TextInput
      name={name}
      type="date"
      label={label}
      placeholder={placeholder}
      note={note}
      className={cn("max-w-[150px]", className)}
      {...props}
    />
  );
};

export { DateInput };
