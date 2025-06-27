import { Box, Flex, type FlexProps } from "@/layout";
import { cn } from "@/utils";

type Display = "block" |"flex";

export interface ContainerProps extends FlexProps {
  children: React.ReactNode;
  display?: Display;
  className?: string;
}

export const Container = ({ children, className, ...props }: ContainerProps) => {
  const { display = "flex", ...rest } = props;

  const classes = cn("w-full max-w-6xl px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6", className);

  if (display === "block") {
    return (
      <Box className={classes} {...rest}>
        {children}
      </Box>
    );
  }

  return (
    <Flex className={classes} {...rest}>
      {children}
    </Flex>
  );
};
