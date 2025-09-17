import { Box, Flex, type FlexProps } from "@/layout";
import { cn } from "@/utils";

type Display = "block" | "flex";

export interface ContainerProps extends FlexProps {
  children: React.ReactNode;
  display?: Display;
  className?: string;
  separation?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
}

export const Container = ({ children, className, direction = "col", separation = "md", ...props }: ContainerProps) => {
  const { display = "flex", ...rest } = props;

  const classes = cn("w-full px-4 md:px-8 lg:px-12", className, {
    "py-0": separation === "none",
    "py-0.5 md:py-1": separation === "xs",
    "py-1 md:py-2 ": separation === "sm",
    "py-2 md:py-4": separation === "md",
    "py-4 md:py-6": separation === "lg",
    "py-6 md:py-8": separation === "xl",
  });

  if (display === "block") {
    return (
      <Box className={classes} {...rest}>
        {children}
      </Box>
    );
  }

  return (
    <Flex className={classes} direction={direction} {...rest}>
      {children}
    </Flex>
  );
};
