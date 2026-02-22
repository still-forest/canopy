import { CircleCheckBig, Info, OctagonX, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

import type { AlertVariant } from "@/types/variants";
import { cn } from "@/utils";
import "./Alert.css";

interface StyleableProps {
  children: ReactNode;
  className?: string;
}

interface AlertProps extends StyleableProps {
  variant: AlertVariant;
}

const Alert = ({ variant, children, className }: AlertProps) => {
  return (
    <div
      className={cn(
        "alert",
        cn({
          "alert-info": variant === "info",
          "alert-success": variant === "success",
          "alert-warning": variant === "warning",
          "alert-error": variant === "danger",
        }),
        className,
      )}
      role="alert"
    >
      <div className="alert-media">
        {variant === "info" && <Info />}
        {variant === "success" && <CircleCheckBig />}
        {variant === "warning" && <TriangleAlert />}
        {variant === "danger" && <OctagonX />}
      </div>
      {children}
    </div>
  );
};

const AlertContent = ({ children, className }: StyleableProps) => {
  return <div className={cn("alert-content", className)}>{children}</div>;
};

const AlertTitle = ({ children, className }: StyleableProps) => {
  return <h4 className={cn("alert-title", className)}>{children}</h4>;
};

const AlertDescription = ({ children, className }: StyleableProps) => {
  return <p className={cn("alert-description", className)}>{children}</p>;
};

const AlertActions = ({ children, className }: StyleableProps) => {
  return <div className={cn("alert-actions", className)}>{children}</div>;
};

Alert.Content = AlertContent;
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
Alert.Actions = AlertActions;
export { Alert };
