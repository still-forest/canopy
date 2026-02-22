import { Loader2 } from "lucide-react";
import { Button, type ButtonProps } from "./Button";

export interface SubmitButtonProps extends Omit<ButtonProps, "type"> {
  submitting: boolean;
}

export const SubmitButton = ({
  variant = "primary",
  disabled = false,
  submitting = false,
  label = "Submit",
  icon,
  ...props
}: SubmitButtonProps) => {
  const iconElement = submitting ? <Loader2 /> : icon;
  return (
    <Button
      data-submitting={submitting}
      disabled={disabled || submitting}
      icon={iconElement}
      label={label}
      type="submit"
      variant={variant}
      {...props}
    />
  );
};
