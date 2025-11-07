import { CircleCheckBig, Info, OctagonX, TriangleAlert } from "lucide-react";

import { Alert as AlertBase, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { AlertVariant } from "@/types/variants";

const icons: Record<AlertProps["type"], React.ElementType> = {
  success: CircleCheckBig,
  info: Info,
  error: OctagonX,
  warning: TriangleAlert,
};

export interface AlertProps {
  type: AlertVariant;
  title?: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Alert = ({ type, title, message, className = "", children }: AlertProps) => {
  const IconComponent = icons[type];

  if (message && children) {
    throw new Error("Alert cannot have both message and children");
  }

  return (
    <AlertBase className={className} variant={type}>
      <IconComponent className="h-4 w-4" data-testid={`alert-icon-${type}`} />
      {title ? <AlertTitle>{title}</AlertTitle> : null}
      <AlertDescription>{message || children}</AlertDescription>
    </AlertBase>
  );
};
