import { Loader2Icon, LoaderIcon } from "lucide-react";

import { cn } from "@/utils";

export interface LoaderProps extends React.ComponentProps<"svg"> {
  variant?: "default" | "wheel";
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
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
    size === "2xl" && "size-10",
    size === "3xl" && "size-12",
    size === "4xl" && "size-16",
    size === "5xl" && "size-20",
    size === "6xl" && "size-24",
    size === "7xl" && "size-28",
    size === "8xl" && "size-32",
    size === "9xl" && "size-36",
    className,
  );

  return <Icon aria-label="Loading" className={classNames} role="status" {...props} />;
};
