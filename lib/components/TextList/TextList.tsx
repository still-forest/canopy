import type { ReactNode } from "react";

type TextListProps = React.ComponentProps<"ul"> & {
  children: ReactNode;
};
type TextListItemProps = React.ComponentProps<"li"> & {
  children: ReactNode;
};

type TextListComponent = React.FC<TextListProps> & {
  Item: React.FC<TextListItemProps>;
};

const TextList: TextListComponent = ({ children, ...props }: TextListProps) => {
  return <ul {...props}>{children}</ul>;
};

const TextListItem = ({ children, ...props }: TextListItemProps) => {
  return <li {...props}>{children}</li>;
};

TextList.Item = TextListItem;

export { TextList };
