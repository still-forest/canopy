import { Box, type BoxProps } from "@/layout";
import { cn } from "@/utils";

interface ContainerProps extends BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <Box width="full" className={cn("max-w-6xl px-4 py-0 md:px-8 lg:px-12", className)} {...props}>
      {children}
    </Box>
  );
};
