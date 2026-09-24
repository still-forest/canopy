import { cn } from "@/utils/cn";
import "./FieldSet.css";

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      className={cn(
        "field-set has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className,
      )}
      data-slot="field-set"
      {...props}
    />
  );
}

export { FieldSet };
