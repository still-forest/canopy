import { TextField, type TextFieldProps } from "@/forms";

interface DateFieldProps extends Omit<TextFieldProps, "type"> {}

const DateField = (props: DateFieldProps) => {
  return <TextField type="date" {...props} />;
};

export { DateField };
