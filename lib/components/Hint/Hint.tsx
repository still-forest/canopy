import { CircleQuestionMark } from "lucide-react";
import { SimpleTooltip } from "@/components/Tooltip";
import { cn } from "@/utils";

export interface HintProps {
  content: string;
  className?: string;
}

export const Hint = ({ content, className }: HintProps) => {
  return (
    <SimpleTooltip content={content}>
      <CircleQuestionMark className={cn("size-4 text-muted-foreground stroke-1", className)} />
    </SimpleTooltip>
  );
};
