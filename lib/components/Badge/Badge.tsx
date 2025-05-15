import { Badge as BadgeBase } from "@/components/ui/badge";
import type { TailwindColor } from "@/types/color";
import { cn } from "@/utils";

interface BadgeProps {
  variant?: "default" | "secondary" | "destructive" | "outline";
  color?: TailwindColor;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const Badge = ({ label, onClick, className, variant, color }: BadgeProps) => {
  const badgeClasses = cn(
    "cursor-default",
    !!onClick && "cursor-pointer",
    {
      "bg-red-500": color === "red",
      "bg-orange-500": color === "orange",
      "bg-amber-500": color === "amber",
      "bg-yellow-500": color === "yellow",
      "bg-lime-500": color === "lime",
      "bg-green-500": color === "green",
      "bg-emerald-500": color === "emerald",
      "bg-teal-500": color === "teal",
      "bg-cyan-500": color === "cyan",
      "bg-sky-500": color === "sky",
      "bg-blue-500": color === "blue",
      "bg-indigo-500": color === "indigo",
      "bg-violet-500": color === "violet",
      "bg-purple-500": color === "purple",
      "bg-fuchsia-500": color === "fuchsia",
      "bg-pink-500": color === "pink",
      "bg-rose-500": color === "rose",
      "bg-slate-500": color === "slate",
      "bg-gray-500": color === "gray",
      "bg-zinc-500": color === "zinc",
      "bg-neutral-500": color === "neutral",
      "bg-stone-500": color === "stone",
      "bg-white": color === "white",
      "bg-black": color === "black",
    },
    {
      "text-white": color === "black",
      "text-black": color === "white",
    },
    {
      "border-1 border-black": color === "white",
    },
    className,
  );

  return (
    <BadgeBase onClick={onClick} className={badgeClasses} variant={variant}>
      {label}
    </BadgeBase>
  );
};
