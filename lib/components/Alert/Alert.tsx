import { CircleCheckBig, Info, OctagonX, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

import type { NotificationVariant } from "@/types/variants";
import { cn } from "@/utils";
import "./Alert.css";

interface AlertProps {
  variant: NotificationVariant;
  title?: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
}

export const Alert = ({ variant, title, description, actions, className }: AlertProps) => {
  return (
    <div
      className={cn(
        "alert",
        cn({
          "alert-info": variant === "info",
          "alert-success": variant === "success",
          "alert-warning": variant === "warning",
          "alert-danger": variant === "danger",
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
      <div className={cn("alert-content", className)}>
        {title && <h6 className={cn("alert-title", className)}>{title}</h6>}
        {description && <p className={cn("alert-description", className)}>{description}</p>}
        {actions && <div className={cn("alert-actions", className)}>{actions}</div>}
      </div>
    </div>
  );
};
