import { Empty, Flex } from "@still-forest/canopy";
import type { ComponentProps, ReactElement } from "react";
import "./Placeholder.css";

interface PlaceholderProps {
  variant?: "default" | "compact";
  icon: ReactElement<ComponentProps<"svg">>;
  title?: string;
  description?: string;
  align?: "center" | "left";
  children?: React.ReactNode;
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
          {title && <h3 className="text-muted-foreground">{title}</h3>}
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
        {title && <Empty.Title>{title}</Empty.Title>}
        {description && <Empty.Description>{description}</Empty.Description>}
      </Empty.Header>
      {children && <Empty.Content>{children}</Empty.Content>}
    </Empty>
  );
};
