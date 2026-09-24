import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";
import "./Field.css";
import { FieldError } from "./FieldError";

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend className={cn("field-legend", className)} data-slot="field-legend" data-variant={variant} {...props} />
  );
}

const FieldLabelGroup = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn("field-label-group", className)} data-slot="field-label-group" {...props}>
      {children}
    </div>
  );
};

const FieldContent = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn("field-content group/field-content", className)} data-slot="field-content" {...props}>
      {children}
    </div>
  );
};

interface FieldLabelProps extends ComponentProps<"label"> {
  htmlFor?: string;
}

const FieldLabel = ({ children, className, htmlFor, ...props }: FieldLabelProps) => {
  return (
    <label
      className={cn(
        "field-label group/field-label peer/field-label group-data-[disabled=true]/field:opacity-50",
        className,
      )}
      data-slot="field-label"
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
};

const FieldTitle = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn("field-title group-data-[disabled=true]/field:opacity-50", className)}
      data-slot="field-label"
      {...props}
    >
      {children}
    </div>
  );
};

const FieldDescription = ({ children, className, ...props }: ComponentProps<"p">) => {
  return (
    <p
      className={cn(
        "field-description group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5",
        className,
      )}
      data-slot="field-description"
      {...props}
    >
      {children}
    </p>
  );
};
interface FieldProps extends ComponentProps<"div"> {
  orientation?: "vertical" | "horizontal";
}

const Field = ({ children, className, orientation = "vertical", ...props }: FieldProps) => {
  return (
    <div
      className={cn("field group/field", orientation === "horizontal" && "field--horizontal", className)}
      data-slot="field"
      {...props}
    >
      {children}
    </div>
  );
};

Field.Label = FieldLabel;
Field.LabelGroup = FieldLabelGroup;
Field.Legend = FieldLegend;
Field.Title = FieldTitle;
Field.Content = FieldContent;
Field.Description = FieldDescription;
Field.Error = FieldError;

export { Field };
