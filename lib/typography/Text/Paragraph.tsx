import { Text, type TextProps } from "@/typography";
import { cn } from "@/utils";

export const Paragraph = ({ children, className, ...props }: TextProps) => {
  return <Text className={cn("mb-4", className)} {...props}>{children}<br /></Text>;
};