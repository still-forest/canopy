import { Loader, Save, Send } from "lucide-react";
import { Button, type ButtonProps } from "@/forms";

export interface SubmitButtonProps extends ButtonProps {
  action?: "default" | "submit" | "save" | "send";
  submitting?: boolean;
  disabled?: boolean;
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
  noIcon = false,
  ...rest
}: SubmitButtonProps) => {
  const SubmitIcon = submittingIcon || Loader;

  if (!BUTTON_TEXT_MAP[action]) {
    throw new Error(`Invalid action: ${action}`);
  }

  const { label, submittingLabel, IconComponent } = BUTTON_TEXT_MAP[action];

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
