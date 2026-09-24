import type { ReactNode } from "react";
import { cn } from "@/utils";
import "./Card.css";

export type CardProps = React.ComponentProps<"div"> & {
  children: ReactNode;
};
type CardActionProps = React.ComponentProps<"div">;
type CardContentProps = React.ComponentProps<"div">;
type CardDescriptionProps = React.ComponentProps<"div">;
type CardFooterProps = React.ComponentProps<"div">;
type CardHeaderProps = React.ComponentProps<"div">;
type CardTitleProps = React.ComponentProps<"div">;

type CardComponent = React.FC<CardProps> & {
  Action: React.FC<CardActionProps>;
  Content: React.FC<CardContentProps>;
  Description: React.FC<CardDescriptionProps>;
  Footer: React.FC<CardFooterProps>;
  Header: React.FC<CardHeaderProps>;
  Title: React.FC<CardTitleProps>;
};

const Card: CardComponent = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={cn("card", className)} data-slot="card" {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className, ...props }: CardHeaderProps) => {
  return (
    <div className={cn("@container/card-header card-header", className)} data-slot="card-header" {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className, ...props }: CardTitleProps) => {
  return (
    <div className={cn("card-title", className)} data-slot="card-title" {...props}>
      {children}
    </div>
  );
};

const CardDescription = ({ children, className, ...props }: CardDescriptionProps) => {
  return (
    <div className={cn("card-description", className)} data-slot="card-description" {...props}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className, ...props }: CardFooterProps) => {
  return (
    <div className={cn("card-footer", className)} data-slot="card-footer" {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className, ...props }: CardContentProps) => {
  return (
    <div className={cn("card-content", className)} data-slot="card-content" {...props}>
      {children}
    </div>
  );
};

const CardAction = ({ children, className, ...props }: CardActionProps) => {
  return (
    <div className={cn("card-action", className)} data-slot="card-action" {...props}>
      {children}
    </div>
  );
};

Card.Action = CardAction;
Card.Content = CardContent;
Card.Description = CardDescription;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Title = CardTitle;

export { Card };
