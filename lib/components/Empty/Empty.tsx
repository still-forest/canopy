import type { ReactNode } from "react";
import { Heading, Text } from "@/typography";
import { cn } from "@/utils";
import { Empty as BaseEmpty, EmptyContent, EmptyHeader, EmptyMedia } from "../ui/empty";

export type EmptyProps = React.ComponentProps<typeof BaseEmpty> & {
  children: ReactNode;
};
type EmptyContentProps = React.ComponentProps<typeof EmptyContent>;
type EmptyHeaderProps = React.ComponentProps<typeof EmptyHeader>;
type EmptyMediaProps = React.ComponentProps<typeof EmptyMedia>;
type EmptyTitleProps = React.ComponentProps<typeof Heading>;
type EmptyDescriptionProps = React.ComponentProps<typeof Text>;

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

const EmptyTitle = ({ children, ...props }: EmptyTitleProps) => {
  return (
    <Heading data-slot="empty-title" level="3" weight="medium" {...props}>
      {children}
    </Heading>
  );
};

const EmptyDescription = ({ children, className, ...props }: EmptyDescriptionProps) => {
  return (
    <Text
      className={cn(
        "text-muted-foreground [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className,
      )}
      data-slot="empty-description"
      size="sm"
      weight="medium"
      {...props}
    >
      {children}
    </Text>
  );
};

Empty.Header = EmptyHeader;
Empty.Media = EmptyMedia;
Empty.Content = EmptyContent;
Empty.Title = EmptyTitle;
Empty.Description = EmptyDescription;

export { Empty };
