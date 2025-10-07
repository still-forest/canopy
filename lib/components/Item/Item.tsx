import type { ReactNode } from "react";
import {
  Item as BaseItem,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "../ui/item";

export type ItemProps = React.ComponentProps<typeof BaseItem> & {
  children: ReactNode;
};
type ItemActionsProps = React.ComponentProps<typeof ItemActions>;
type ItemContentProps = React.ComponentProps<typeof ItemContent>;
type ItemDescriptionProps = React.ComponentProps<typeof ItemDescription>;
type ItemFooterProps = React.ComponentProps<typeof ItemFooter>;
type ItemHeaderProps = React.ComponentProps<typeof ItemHeader>;
type ItemMediaProps = React.ComponentProps<typeof ItemMedia>;
type ItemTitleProps = React.ComponentProps<typeof ItemTitle>;

type ItemComponent = React.FC<ItemProps> & {
  Actions: React.FC<ItemActionsProps>;
  Content: React.FC<ItemContentProps>;
  Description: React.FC<ItemDescriptionProps>;
  Footer: React.FC<ItemFooterProps>;
  Header: React.FC<ItemHeaderProps>;
  Media: React.FC<ItemMediaProps>;
  Title: React.FC<ItemTitleProps>;
};

const Item: ItemComponent = ({ children, ...props }: ItemProps) => {
  return <BaseItem {...props}>{children}</BaseItem>;
};

Item.Header = ItemHeader;
Item.Media = ItemMedia;
Item.Content = ItemContent;
Item.Title = ItemTitle;
Item.Description = ItemDescription;
Item.Actions = ItemActions;
Item.Footer = ItemFooter;

export { Item };
