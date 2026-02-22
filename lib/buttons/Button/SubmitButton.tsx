import { Loader2 } from "lucide-react";
import { Button, type ButtonProps } from "./Button";

export interface SubmitButtonProps extends Omit<ButtonProps, "type"> {
  submitting: boolean;
}

export const SubmitButton = ({
  variant = "primary",
  disabled = false,
  submitting = false,
  label,
  icon,
  children,
  ...props
}: SubmitButtonProps) => {
  const iconElement = submitting ? <Loader2 /> : icon;
  const resolvedLabel = children ? undefined : (label ?? "Submit");
  return (
    <Button
      data-submitting={submitting}
      disabled={disabled || submitting}
      icon={iconElement}
      label={resolvedLabel}
      type="submit"
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  );
};
