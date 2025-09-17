import type { ReactNode } from "react";
import {
  Card as BaseCard,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export type CardProps = React.ComponentProps<typeof BaseCard> & {
  children: ReactNode;
};
type CardActionProps = React.ComponentProps<typeof CardAction>;
type CardContentProps = React.ComponentProps<typeof CardContent>;
type CardDescriptionProps = React.ComponentProps<typeof CardDescription>;
type CardFooterProps = React.ComponentProps<typeof CardFooter>;
type CardHeaderProps = React.ComponentProps<typeof CardHeader>;
type CardTitleProps = React.ComponentProps<typeof CardTitle>;

type CardComponent = React.FC<CardProps> & {
  Action: React.FC<CardActionProps>;
  Content: React.FC<CardContentProps>;
  Description: React.FC<CardDescriptionProps>;
  Footer: React.FC<CardFooterProps>;
  Header: React.FC<CardHeaderProps>;
  Title: React.FC<CardTitleProps>;
};

const Card: CardComponent = ({ children, ...props }: CardProps) => {
  return <BaseCard {...props}>{children}</BaseCard>;
};

Card.Action = CardAction;
Card.Content = CardContent;
Card.Description = CardDescription;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Title = CardTitle;

export { Card };
