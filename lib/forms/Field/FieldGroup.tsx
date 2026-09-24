import { cn } from "@/utils/cn";
import "./FieldGroup.css";

export const FieldGroup = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("field-group group/field-group @container/field-group", className)}
      data-slot="field-group"
      {...props}
    />
  );
};
