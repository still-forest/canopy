import type { ComponentProps, ReactElement, ReactNode } from "react";
import "./Placeholder.css";

interface PlaceholderProps {
  variant?: "default" | "compact";
  icon: ReactElement<ComponentProps<"svg">>;
  title?: string;
  description?: string;
  children?: ReactNode;
}

export const Placeholder = ({ icon, title, variant = "default", description, children }: PlaceholderProps) => {
  if (variant === "compact") {
    return (
      <div className="placeholder placeholder--compact">
        <div className="placeholder-media">{icon}</div>
        <div className="placeholder-header">
          {title && <h3>{title}</h3>}
          {description && <p className="placeholder-description">{description}</p>}
        </div>
        {children && <div className="placeholder-content">{children}</div>}
      </div>
    );
  }

  return (
    <div className="placeholder">
      <div className="placeholder-media">{icon}</div>
      <div className="placeholder-header">
        {title && <h3>{title}</h3>}
        {description && <p className="placeholder-description">{description}</p>}
      </div>
      {children && <div className="placeholder-content">{children}</div>}
    </div>
  );
};
