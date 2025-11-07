import { cva } from "class-variance-authority";

export const badgeColorVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      color: {
        red: "bg-red-500",
        orange: "bg-orange-500",
        amber: "bg-amber-500",
        yellow: "bg-yellow-500",
        lime: "bg-lime-500",
        green: "bg-green-500",
        emerald: "bg-emerald-500",
        teal: "bg-teal-500",
        cyan: "bg-cyan-500",
        sky: "bg-sky-500",
        blue: "bg-blue-500",
        indigo: "bg-indigo-500",
        violet: "bg-violet-500",
        purple: "bg-purple-500",
        fuchsia: "bg-fuchsia-500",
        pink: "bg-pink-500",
        rose: "bg-rose-500",
        slate: "bg-slate-500",
        gray: "bg-gray-500",
        zinc: "bg-zinc-500",
        neutral: "bg-neutral-500",
        stone: "bg-stone-500",
        white: "bg-white",
        black: "bg-black",
      },
      variant: {
        default: "border-transparent",
        secondary: "border-transparent",
        destructive: "border-transparent",
        outline: "",
        info: "border-transparent",
        success: "border-transparent",
        warning: "border-transparent",
        error: "border-transparent",
      },
    },
    compoundVariants: [
      {
        color: "red",
        variant: "outline",
        className: "border-red-500 bg-transparent text-red-500",
      },
      {
        color: "orange",
        variant: "outline",
        className: "border-orange-500 bg-transparent text-orange-500",
      },
      {
        color: "amber",
        variant: "outline",
        className: "border-amber-500 bg-transparent text-amber-500",
      },
      {
        color: "yellow",
        variant: "outline",
        className: "border-yellow-500 bg-transparent text-yellow-500",
      },
      {
        color: "lime",
        variant: "outline",
        className: "border-lime-500 bg-transparent text-lime-500",
      },
      {
        color: "green",
        variant: "outline",
        className: "border-green-500 bg-transparent text-green-500",
      },
      {
        color: "emerald",
        variant: "outline",
        className: "border-emerald-500 bg-transparent text-emerald-500",
      },
      {
        color: "teal",
        variant: "outline",
        className: "border-teal-500 bg-transparent text-teal-500",
      },
      {
        color: "cyan",
        variant: "outline",
        className: "border-cyan-500 bg-transparent text-cyan-500",
      },
      {
        color: "sky",
        variant: "outline",
        className: "border-sky-500 bg-transparent text-sky-500",
      },
      {
        color: "blue",
        variant: "outline",
        className: "border-blue-500 bg-transparent text-blue-500",
      },
      {
        color: "indigo",
        variant: "outline",
        className: "border-indigo-500 bg-transparent text-indigo-500",
      },
      {
        color: "violet",
        variant: "outline",
        className: "border-violet-500 bg-transparent text-violet-500",
      },
      {
        color: "purple",
        variant: "outline",
        className: "border-purple-500 bg-transparent text-purple-500",
      },
      {
        color: "fuchsia",
        variant: "outline",
        className: "border-fuchsia-500 bg-transparent text-fuchsia-500",
      },
      {
        color: "pink",
        variant: "outline",
        className: "border-pink-500 bg-transparent text-pink-500",
      },
      {
        color: "rose",
        variant: "outline",
        className: "border-rose-500 bg-transparent text-rose-500",
      },
      {
        color: "slate",
        variant: "outline",
        className: "border-slate-500 bg-transparent text-slate-500",
      },
      {
        color: "gray",
        variant: "outline",
        className: "border-gray-500 bg-transparent text-gray-500",
      },
      {
        color: "zinc",
        variant: "outline",
        className: "border-zinc-500 bg-transparent text-zinc-500",
      },
      {
        color: "neutral",
        variant: "outline",
        className: "border-neutral-500 bg-transparent text-neutral-500",
      },
      {
        color: "stone",
        variant: "outline",
        className: "border-stone-500 bg-transparent text-stone-500",
      },
      {
        color: "white",
        variant: "outline",
        className: "border-black bg-transparent text-black",
      },
      {
        color: "black",
        variant: "outline",
        className: "border-black bg-transparent text-black",
      },
    ],
  },
);
