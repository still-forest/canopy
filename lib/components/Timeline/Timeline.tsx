import type { ReactNode } from "react";
import {
  Timeline as BaseTimeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from "@/components/ui/timeline";
import { Heading } from "@/typography";

export type TimelineProps = React.ComponentProps<typeof BaseTimeline> & {
  children: ReactNode;
};
type TimelineItemProps = React.ComponentProps<typeof TimelineItem>;
type TimelineHeaderProps = React.ComponentProps<typeof TimelineHeader>;
type TimelineSeparatorProps = React.ComponentProps<typeof TimelineSeparator>;
type TimelineDateProps = React.ComponentProps<typeof TimelineDate>;
type TimelineTitleProps = React.ComponentProps<typeof Heading>;
type TimelineIndicatorProps = React.ComponentProps<typeof TimelineIndicator>;
type TimelineContentProps = React.ComponentProps<typeof TimelineContent>;

type TimelineComponent = React.FC<TimelineProps> & {
  Item: React.FC<TimelineItemProps>;
  Header: React.FC<TimelineHeaderProps>;
  Separator: React.FC<TimelineSeparatorProps>;
  Date: React.FC<TimelineDateProps>;
  Title: React.FC<TimelineTitleProps>;
  Indicator: React.FC<TimelineIndicatorProps>;
  Content: React.FC<TimelineContentProps>;
};

const Timeline: TimelineComponent = ({ children, ...props }: TimelineProps) => {
  return <BaseTimeline {...props}>{children}</BaseTimeline>;
};

const TimelineTitle = ({ children, ...props }: TimelineTitleProps) => {
  return (
    <Heading level="6" {...props}>
      {children}
    </Heading>
  );
};

Timeline.Item = TimelineItem;
Timeline.Header = TimelineHeader;
Timeline.Separator = TimelineSeparator;
Timeline.Date = TimelineDate;
Timeline.Title = TimelineTitle;
Timeline.Indicator = TimelineIndicator;
Timeline.Content = TimelineContent;

export { Timeline };
