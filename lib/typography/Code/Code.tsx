import { Text, type TextProps } from "@/typography";

export const Code = ({ children, ...props }: TextProps) => {
  return (
    <Text size="sm" family="mono" variant="accent" className="inline-block w-fit rounded bg-accent px-2" {...props}>
      {children}
    </Text>
  );
};
