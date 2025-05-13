import { Text, type TextProps } from "@/primitives";

export default function Code({ children }: TextProps) {
  return (
    <Text size="sm" family="mono" align="right" variant="accent" className="h-min w-min rounded bg-accent px-2">
      {children}
    </Text>
  );
}
