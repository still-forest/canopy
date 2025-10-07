import type { ReactNode } from "react";
import { Empty as BaseEmpty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty";

export type EmptyProps = React.ComponentProps<typeof BaseEmpty> & {
  children: ReactNode;
};
type EmptyContentProps = React.ComponentProps<typeof EmptyContent>;
type EmptyDescriptionProps = React.ComponentProps<typeof EmptyDescription>;
type EmptyHeaderProps = React.ComponentProps<typeof EmptyHeader>;
type EmptyMediaProps = React.ComponentProps<typeof EmptyMedia>;
type EmptyTitleProps = React.ComponentProps<typeof EmptyTitle>;

type EmptyComponent = React.FC<EmptyProps> & {
  Content: React.FC<EmptyContentProps>;
  Description: React.FC<EmptyDescriptionProps>;
  Header: React.FC<EmptyHeaderProps>;
  Media: React.FC<EmptyMediaProps>;
  Title: React.FC<EmptyTitleProps>;
};

const Empty: EmptyComponent = ({ children, ...props }: EmptyProps) => {
  return <BaseEmpty {...props}>{children}</BaseEmpty>;
};

Empty.Header = EmptyHeader;
Empty.Media = EmptyMedia;
Empty.Content = EmptyContent;
Empty.Title = EmptyTitle;
Empty.Description = EmptyDescription;

export { Empty };
