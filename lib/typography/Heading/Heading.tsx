import React from "react";
import type {
  FontFamily,
  FontWeight,
  HeadingLevel,
  HeadingSize,
  TextAlign,
  TextLeading,
  TextTracking,
  TypographyVariant,
} from "@/types";
import { cn } from "@/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  size?: HeadingSize;
  weight?: FontWeight;
  variant?: TypographyVariant;
  align?: TextAlign;
  leading?: TextLeading;
  tracking?: TextTracking;
  family?: FontFamily;
  /**
   * When true, apply *-foreground color classes for variants instead of regular color classes.
   */
  asForeground?: boolean;
  truncate?: boolean;
  numeric?: boolean;
  className?: string;
}

const DEFAULT_SIZES: Record<HeadingLevel, HeadingSize> = {
  "1": "xl",
  "2": "lg",
  "3": "md",
  "4": "sm",
  "5": "xs",
  "6": "xs",
};

const SIZE_CLASSES: Record<HeadingSize, string> = {
  xs: "text-lg",
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
};

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      variant = "default",
      level = "2",
      size,
      weight = "bold",
      align,
      leading,
      tracking,
      family: familyProp,
      asForeground = false,
      truncate = false,
      numeric = false,
      ...props
    },
    ref,
  ) => {
    const family = familyProp || (variant === "brand" ? "brand" : "heading");
    const Component = `h${level}` as React.ElementType;
    const resolvedSize = size || DEFAULT_SIZES[level];

    return (
      <Component
        className={cn(
          // Size
          SIZE_CLASSES[resolvedSize],
          // Font weight
          {
            "font-normal": weight === "normal",
            "font-medium": weight === "medium",
            "font-semibold": weight === "semibold",
            "font-bold": weight === "bold",
          },
          // Text colors (variants)
          {
            "text-foreground": variant === "default",
            "text-inherit": variant === "inherit",
            "text-muted-foreground": variant === "muted",
            "text-accent-foreground": variant === "accent",
            "text-primary-foreground": variant === "primary",
            "text-secondary-foreground": variant === "secondary",
            "text-brand": variant === "brand",
            "text-brand-foreground": asForeground && variant === "brand",
            "text-info": !asForeground && variant === "info",
            "text-warning": !asForeground && variant === "warning",
            "text-destructive": !asForeground && variant === "destructive",
            "text-success": !asForeground && variant === "success",
            "text-info-foreground": asForeground && variant === "info",
            "text-warning-foreground": asForeground && variant === "warning",
            "text-destructive-foreground": asForeground && variant === "destructive",
            "text-success-foreground": asForeground && variant === "success",
          },
          // Text alignment
          {
            "text-left": align === "left",
            "text-center": align === "center",
            "text-right": align === "right",
            "text-justify": align === "justify",
            "text-start": align === "start",
            "text-end": align === "end",
          },
          // Leading (line height)
          {
            "leading-none": leading === "none",
            "leading-tight": leading === "tight",
            "leading-snug": leading === "snug",
            "leading-normal": leading === "normal",
            "leading-relaxed": leading === "relaxed",
            "leading-loose": leading === "loose",
          },
          // Tracking (letter spacing)
          {
            "tracking-tighter": tracking === "tighter",
            "tracking-tight": tracking === "tight",
            "tracking-normal": tracking === "normal",
            "tracking-wide": tracking === "wide",
            "tracking-wider": tracking === "wider",
            "tracking-widest": tracking === "widest",
          },
          // Font family
          {
            "font-brand": family === "brand",
            "font-heading": family === "heading",
            "font-body": family === "body",
            "font-display": family === "display",
            "font-sans": family === "sans",
            "font-serif": family === "serif",
            "font-mono": family === "mono",
          },
          // Truncation
          truncate && "truncate",
          // Tabular numerals
          numeric && "tabular-nums",
          // Scroll margin for anchor navigation
          "scroll-m-20",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Heading.displayName = "Heading";

export { Heading };
