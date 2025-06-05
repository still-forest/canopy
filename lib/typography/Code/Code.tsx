import { Text, type TextProps } from "@/typography";

export const Code = ({ children, ...props }: TextProps) => {
  return (
    <Text size="sm" family="mono" variant="accent" className="bg-accent inline-block w-fit rounded px-2" {...props}>
      {children}
    </Text>
  );
};
