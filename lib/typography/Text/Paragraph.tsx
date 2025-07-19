import { Text, type TextBaseProps } from "@/typography";
import { cn } from "@/utils";

export const Paragraph = ({ children, className, as = "p", ...props }: TextBaseProps) => {
  return (
    <Text as={as} className={cn("mb-4", className)} {...props}>
      {children}
    </Text>
  );
};
