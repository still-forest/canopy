import { Loader, Save, Send } from "lucide-react";
import { Button, type ButtonProps } from "@/forms";

export interface SubmitButtonProps extends Omit<ButtonProps, "icon"> {
  action?: "default" | "submit" | "save" | "send";
  label?: string;
  submittingLabel?: string;
  submitting?: boolean;
  disabled?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  submittingIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  noIcon?: boolean;
}

const BUTTON_TEXT_MAP = {
  default: { label: "Submit", submittingLabel: "Submitting", IconComponent: Send },
  submit: { label: "Submit", submittingLabel: "Submitting", IconComponent: Send },
  save: { label: "Save", submittingLabel: "Saving", IconComponent: Save },
  send: { label: "Send", submittingLabel: "Sending", IconComponent: Send },
};

const SubmitButton = ({
  submitting = false,
  disabled = false,
  submittingIcon,
  action = "default",
  label: customLabel,
  submittingLabel: customSubmittingLabel,
  icon: customIcon,
  noIcon = false,
  ...rest
}: SubmitButtonProps) => {
  const SubmitIcon = submittingIcon || Loader;

  if (!BUTTON_TEXT_MAP[action]) {
    throw new Error(`Invalid action: ${action}`);
  }

  const defaultActionMap = BUTTON_TEXT_MAP[action];
  const label = customLabel || defaultActionMap.label;
  const submittingLabel = customSubmittingLabel || defaultActionMap.submittingLabel;
  const IconComponent = customIcon || defaultActionMap.IconComponent;

  const labelIcon = submitting ? <SubmitIcon className="animate-spin" /> : <IconComponent />;

  return (
    <Button
      disabled={disabled || submitting}
      icon={!noIcon ? labelIcon : undefined}
      type="submit"
      variant="primary"
      {...rest}
    >
      {submitting ? submittingLabel : label}
    </Button>
  );
};

export { SubmitButton };
