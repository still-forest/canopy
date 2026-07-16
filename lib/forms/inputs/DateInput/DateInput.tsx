import { Input, type InputProps } from "@/forms";

interface DateInputProps extends Omit<InputProps, "type"> {}

const DateInput = (props: DateInputProps) => {
  return <Input type="date" {...props} />;
};

export { DateInput };
