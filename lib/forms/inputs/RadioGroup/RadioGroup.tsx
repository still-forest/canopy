import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { cn } from "cn";
import "./RadioGroup.css";

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return <RadioGroupPrimitive className={cn("radio-group", className)} data-slot="radio-group" {...props} />;
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      className={cn(
        "radio-group-item peer group/radio-group-item group-has-[:focus-visible]/field-label:ring-0 group-has-[:focus-visible]/field-label:not-data-checked:border-input group-has-[:focus-visible]/field-label:data-checked:border-primary ",
        className,
      )}
      data-slot="radio-group-item"
      {...props}
    >
      <RadioPrimitive.Indicator className="radio-group-indicator" data-slot="radio-group-indicator">
        <span className="radio-group-indicator-inset" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
