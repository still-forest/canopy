import { CircleCheckBig, Info, OctagonX, TriangleAlert } from "lucide-react";

import { Alert as AlertBase, AlertDescription, AlertTitle } from "@/components/ui/alert";

const icons: Record<AlertProps["type"], React.ElementType> = {
  success: CircleCheckBig,
  info: Info,
  error: OctagonX,
  warning: TriangleAlert,
};

export interface AlertProps {
  type: "info" | "success" | "warning" | "error";
  title?: string;
  message: string;
  className?: string;
}

export const Alert = ({ type, title, message, className = "" }: AlertProps) => {
  const IconComponent = icons[type];

  return (
    <AlertBase className={className} variant={type}>
      <IconComponent className="h-4 w-4" data-testid={`alert-icon-${type}`} />
      {title ? <AlertTitle>{title}</AlertTitle> : null}
      <AlertDescription>{message}</AlertDescription>
    </AlertBase>
  );
};
