import { cn } from "@/utils/cn";
import "./Field.css";

export const FieldGroup = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cn("field-group", className)} data-slot="field-group" {...props} />;
};
