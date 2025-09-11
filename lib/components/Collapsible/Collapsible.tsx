import { Collapsible as BaseCollapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export type CollapsibleProps = React.ComponentProps<typeof BaseCollapsible>;
type CollapsibleTriggerProps = React.ComponentProps<typeof CollapsibleTrigger>;
type CollapsibleContentProps = React.ComponentProps<typeof CollapsibleContent>;

type CollapsibleComponent = React.FC<CollapsibleProps> & {
  Trigger: React.FC<CollapsibleTriggerProps>;
  Content: React.FC<CollapsibleContentProps>;
};

const Collapsible: CollapsibleComponent = ({ children, ...props }: CollapsibleProps) => {
  return <BaseCollapsible {...props}>{children}</BaseCollapsible>;
};

Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Content = CollapsibleContent;

export { Collapsible };
