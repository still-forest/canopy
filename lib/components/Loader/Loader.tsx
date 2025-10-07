import { Loader2Icon, LoaderIcon } from "lucide-react";

import { cn } from "@/utils";

interface LoaderProps extends React.ComponentProps<"svg"> {
  variant?: "default" | "wheel";
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Loader = ({ variant = "default", icon, size = "md", className, ...props }: LoaderProps) => {
  const Icon = icon ? icon : variant === "wheel" ? LoaderIcon : Loader2Icon;

  const classNames = cn(
    "animate-spin",
    size === "xs" && "size-4",
    size === "sm" && "size-5",
    size === "md" && "size-6",
    size === "lg" && "size-7",
    size === "xl" && "size-8",
    className,
  );

  return <Icon aria-label="Loading" className={classNames} role="status" {...props} />;
};
