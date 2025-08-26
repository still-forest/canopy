import { Text, type TextProps } from "@/typography/Text";

export const Code = ({ children, ...props }: TextProps) => {
	return (
		<Text
			className="inline-block w-fit rounded bg-accent px-2"
			family="mono"
			size="sm"
			variant="accent"
			{...props}
		>
			{children}
		</Text>
	);
};
