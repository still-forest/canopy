import { Text, type TextProps } from "@/typography";
import { cn } from "@/utils/cn";

export const Paragraph = ({ children, className, as = "p", ...props }: TextProps) => {
  return (
    <Text as={as} className={cn("mb-4", className)} {...props}>
      {children}
    </Text>
  );
};
