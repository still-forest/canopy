import type { ComponentProps, ReactElement, ReactNode } from "react";
import { Empty } from "@/components/Empty";
import { Flex } from "@/layout";
import "./Placeholder.css";

interface PlaceholderProps {
  variant?: "default" | "compact";
  icon: ReactElement<ComponentProps<"svg">>;
  title?: string;
  description?: string;
  align?: "center" | "left";
  children?: ReactNode;
}

export const Placeholder = ({
  icon,
  title,
  variant = "default",
  description,
  align = "left",
  children,
}: PlaceholderProps) => {
  if (variant === "compact") {
    return (
      <Flex
        align="center"
        className="placeholder placeholder--compact"
        gap="4"
        justify={align === "center" ? "center" : "start"}
      >
        <div className="placeholder-media">{icon}</div>
        <Flex direction="col">
          {title && <h3>{title}</h3>}
          {description && <p className="footnote">{description}</p>}
        </Flex>
      </Flex>
    );
  }

  return (
    <Empty className="placeholder">
      <Empty.Header>
        <Empty.Media className="placeholder-media" variant="default">
          {icon}
        </Empty.Media>
        {title && <h3>{title}</h3>}
        {description && <p className="muted">{description}</p>}
      </Empty.Header>
      {children && <Empty.Content>{children}</Empty.Content>}
    </Empty>
  );
};
