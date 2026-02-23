import type { ComponentProps, ReactElement, ReactNode } from "react";
import "./Placeholder.css";
import { cn } from "@/utils";

interface PlaceholderProps {
  icon: ReactElement<ComponentProps<"svg">>;
  title?: string;
  description?: string;
  children?: ReactNode;
  compact?: boolean;
}

export const Placeholder = ({ icon, title, compact = false, description, children }: PlaceholderProps) => {
  return (
    <div className={cn("placeholder", compact ? "placeholder--compact" : "")}>
      <div className="placeholder-media">{icon}</div>
      <div className="placeholder-header">
        {title && <h3>{title}</h3>}
        {description && <p className="placeholder-description">{description}</p>}
      </div>
      {children && <div className="placeholder-content">{children}</div>}
    </div>
  );
};
