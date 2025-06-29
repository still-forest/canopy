import { Box, type BoxProps } from "@/layout";
import { cn } from "@/utils";

export interface ContainerProps extends BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <Box className={cn("max-w-6xl px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6", className)} width="full" {...props}>
      {children}
    </Box>
  );
};
