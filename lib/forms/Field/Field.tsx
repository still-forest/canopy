import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";
import "./Field.css";

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return <fieldset className={cn("field-set", className)} data-slot="field-set" {...props} />;
}

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

interface FieldLabelProps extends ComponentProps<"label"> {
  htmlFor?: string;
}

const FieldLabel = ({ children, className, htmlFor, ...props }: FieldLabelProps) => {
  return (
    <label className={cn("field-label", className)} data-slot="field-label" htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
};

const FieldDescription = ({ children, className, ...props }: ComponentProps<"p">) => {
  return (
    <p className={cn("field-description", className)} data-slot="field-description" {...props}>
      {children}
    </p>
  );
};

const FieldTitle = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn("field-title", className)} data-slot="field-label" {...props}>
      {children}
    </div>
  );
};

const FieldContent = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn("field-content", className)} data-slot="field-content" {...props}>
      {children}
    </div>
  );
};

const FieldError = ({ children, className, ...props }: ComponentProps<"div">) => {
  if (!children) {
    return null;
  }

  return (
    <div className={cn("field-error", className)} data-slot="field-error" role="alert" {...props}>
      {children}
    </div>
  );
};

interface FieldProps extends ComponentProps<"div"> {
  orientation?: "vertical" | "horizontal";
}

const Field = ({ children, className, orientation = "vertical", ...props }: FieldProps) => {
  return (
    <div
      className={cn(
        "field",
        {
          "field--vertical": orientation === "vertical",
          "field--horizontal": orientation === "horizontal",
        },
        className,
      )}
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
export { Field, FieldSet };
