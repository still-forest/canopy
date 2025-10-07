import { Loader2Icon, LoaderIcon } from "lucide-react";

import { cn } from "@/utils";

interface LoaderProps extends React.ComponentProps<"svg"> {
  variant?: "default" | "wheel";
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const Loader = ({ variant = "default", icon, className, ...props }: LoaderProps) => {
  const Icon = icon ? icon : variant === "wheel" ? LoaderIcon : Loader2Icon;

  return <Icon aria-label="Loading" className={cn("size-4 animate-spin", className)} role="status" {...props} />;
};
