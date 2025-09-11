import type { ReactNode } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as BaseAccordion,
} from "@/components/ui/accordion";

type AccordionProps = React.ComponentProps<typeof BaseAccordion> & {
  children: ReactNode;
};
type AccordionItemProps = React.ComponentProps<typeof AccordionItem>;
type AccordionTriggerProps = React.ComponentProps<typeof AccordionTrigger>;
type AccordionContentProps = React.ComponentProps<typeof AccordionContent>;

type AccordionComponent = React.FC<AccordionProps> & {
  Item: React.FC<AccordionItemProps>;
  Trigger: React.FC<AccordionTriggerProps>;
  Content: React.FC<AccordionContentProps>;
};

const Accordion: AccordionComponent = ({ children, ...props }: AccordionProps) => {
  return <BaseAccordion {...props}>{children}</BaseAccordion>;
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export { Accordion };
