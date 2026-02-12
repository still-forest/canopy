import React from "react";

import type {
  FontFamily,
  FontWeight,
  TextAlign,
  TextLeading,
  TextSize,
  TextTracking,
  TypographyElement,
  TypographyVariant,
} from "@/types";
import { cn } from "@/utils";

interface TextBaseProps {
  size?: TextSize;
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
  inline?: boolean;
  as?: TypographyElement;
}

export type TextProps<E extends React.ElementType = TypographyElement> = TextBaseProps & {
  as?: E;
} & React.ComponentPropsWithRef<E>;

const Text = React.forwardRef(
  <E extends React.ElementType = TypographyElement>(
    {
      className,
      as,
      size,
      weight,
      variant = "default",
      align,
      leading,
      tracking,
      family: familyProp,
      asForeground = false,
      truncate = false,
      numeric = false,
      inline = false,
      ...props
    }: TextProps<E>,
    ref: React.Ref<Element>,
  ) => {
    const Component = as || "p";
    const family = familyProp || (variant === "brand" ? "brand" : "body");

    return (
      <Component
        className={cn(
          // Font size
          {
            "text-xs": size === "xs",
            "text-sm": size === "sm",
            "text-base": size === "md",
            "text-lg": size === "lg",
            "text-xl": size === "xl",
          },
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
            "text-brand": !asForeground && variant === "brand",
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
            "font-display": family === "display",
            "font-heading": family === "heading",
            "font-body": family === "body",
            "font-brand": family === "brand",
            "font-sans": family === "sans",
            "font-serif": family === "serif",
            "font-mono": family === "mono",
          },
          // Truncation
          truncate && "truncate",
          // Tabular numerals
          numeric && "tabular-nums",
          // Inline
          inline && "inline",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Text.displayName = "Text";

export { Text };
