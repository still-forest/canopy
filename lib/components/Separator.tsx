import { Separator as BaseSeparator } from "@/components/ui/separator";
import type { Gap } from "@/types";
import { cn } from "@/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  gap?: Gap;
}

export const Separator = ({ className, orientation = "horizontal", gap, ...props }: SeparatorProps) => {
  const vertical = orientation === "vertical";
  const defaultGap = vertical ? "2" : "4";
  const effectiveGap = gap ?? defaultGap;

  return (
    <BaseSeparator
      className={cn(
        !vertical && {
          "my-0": effectiveGap === "0",
          "my-1": effectiveGap === "1",
          "my-2": effectiveGap === "2",
          "my-3": effectiveGap === "3",
          "my-4": effectiveGap === "4",
          "my-5": effectiveGap === "5",
          "my-6": effectiveGap === "6",
          "my-7": effectiveGap === "7",
          "my-8": effectiveGap === "8",
          "my-9": effectiveGap === "9",
          "my-10": effectiveGap === "10",
          "my-11": effectiveGap === "11",
          "my-12": effectiveGap === "12",
          "my-13": effectiveGap === "13",
          "my-14": effectiveGap === "14",
          "my-15": effectiveGap === "15",
          "my-16": effectiveGap === "16",
        },
        vertical && {
          "mx-0": effectiveGap === "0",
          "mx-1": effectiveGap === "1",
          "mx-2": effectiveGap === "2",
          "mx-3": effectiveGap === "3",
          "mx-4": effectiveGap === "4",
          "mx-5": effectiveGap === "5",
          "mx-6": effectiveGap === "6",
          "mx-7": effectiveGap === "7",
          "mx-8": effectiveGap === "8",
          "mx-9": effectiveGap === "9",
          "mx-10": effectiveGap === "10",
          "mx-11": effectiveGap === "11",
          "mx-12": effectiveGap === "12",
          "mx-13": effectiveGap === "13",
          "mx-14": effectiveGap === "14",
          "mx-15": effectiveGap === "15",
          "mx-16": effectiveGap === "16",
        },
        className,
      )}
      role="separator"
      orientation={orientation}
      {...props}
    />
  );
};
