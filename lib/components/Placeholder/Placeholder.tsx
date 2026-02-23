import type { ComponentProps, ReactElement, ReactNode } from "react";
import { Flex } from "@/layout";
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
      <Flex align="center" className="placeholder placeholder--compact" gap="4">
        <div className="placeholder-media">{icon}</div>
        <div className="placeholder-header">
          {title && <h3>{title}</h3>}
          {description && <p className="footnote">{description}</p>}
        </div>
        {children && <div className="placeholder-content">{children}</div>}
      </Flex>
    );
  }

  return (
    <div className="placeholder">
      <div className="placeholder-header">
        <div className="placeholder-media">{icon}</div>
        {title && <h3>{title}</h3>}
        {description && <p className="muted">{description}</p>}
      </div>
      {children && <div className="placeholder-content">{children}</div>}
    </div>
  );
};
