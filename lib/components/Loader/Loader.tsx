import { Loader2Icon, LoaderIcon } from "lucide-react";
import { cloneElement, type ReactElement } from "react";
import { cn } from "@/utils";

export interface LoaderProps extends React.ComponentProps<"svg"> {
  variant?: "default" | "wheel";
  icon?: ReactElement;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | "10xl";
}

export const Loader = ({ variant = "default", icon, size = "md", className, ...props }: LoaderProps) => {
  const classNames = cn(
    "animate-spin",
    size === "xs" && "size-2",
    size === "sm" && "size-3",
    size === "md" && "size-4",
    size === "lg" && "size-5",
    size === "xl" && "size-6",
    size === "2xl" && "size-7",
    size === "3xl" && "size-8",
    size === "4xl" && "size-10",
    size === "5xl" && "size-12",
    size === "6xl" && "size-14",
    size === "7xl" && "size-16",
    size === "8xl" && "size-20",
    size === "9xl" && "size-28",
    size === "10xl" && "size-32",
    className,
  );

  if (icon) {
    return cloneElement(icon, {
      "aria-label": "Loading",
      role: "status",
      className: cn(classNames, icon.props.className),
      ...props,
    });
  }

  const Icon = variant === "wheel" ? LoaderIcon : Loader2Icon;
  return <Icon aria-label="Loading" className={classNames} role="status" {...props} />;
};
