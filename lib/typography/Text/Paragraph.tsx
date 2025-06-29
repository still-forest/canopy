import { Text, type TextProps } from "@/typography";
import { cn } from "@/utils";

export const Paragraph = ({ children, className, ...props }: TextProps) => {
  return (
    <Text as="p" className={cn("mb-4", className)} {...props}>
      {children}
    </Text>
  );
};
