import { Box } from "@/main";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: Props) => {
  return (
    <Box className={`rounded-md border bg-card text-card-foreground shadow-sm ${className || ""}`}>{children}</Box>
  );
};

export { Card };
