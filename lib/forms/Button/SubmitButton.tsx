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
  default: { label: "Submit", submittingLabel: "Submitting", icon: <Send /> },
  submit: { label: "Submit", submittingLabel: "Submitting", icon: <Send /> },
  save: { label: "Save", submittingLabel: "Saving", icon: <Save /> },
  send: { label: "Send", submittingLabel: "Sending", icon: <Send /> },
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

  const { label, submittingLabel, icon } = BUTTON_TEXT_MAP[action];

  const labelIcon = submitting ? <SubmitIcon className="animate-spin" /> : icon;

  return (
    <Button
      type="submit"
      variant="primary"
      disabled={disabled || submitting}
      icon={!noIcon ? labelIcon : undefined}
      {...rest}
    >
      {submitting ? submittingLabel : label}
    </Button>
  );
};

export { SubmitButton };
