import type React from "react";
import { Flex } from "@/layout";
import { Heading } from "@/typography";
import { cn } from "@/utils";

export interface InterstitialProps {
  variant?: "error" | "info" | "success" | "warning";
  iconComponent?: React.ElementType;
  message?: string;
  children?: React.ReactNode;
}

export const Interstitial = ({ variant, iconComponent, message, children }: InterstitialProps) => {
  if (!iconComponent && !message && !children) {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("Interstitial requires at least one of icon, iconComponent, message, or children");
    }
    return (
      <Flex align="center" justify="center" className="h-full w-full">
        Content missing
      </Flex>
    );
  }

  const IconComponent = iconComponent ? iconComponent : null;

  return (
    <Flex align="center" justify="center" className="h-full w-full">
      <Flex direction="col" justify="center">
        {IconComponent && (
          <Flex align="center" justify="center" gapX="4" className="my-6">
            <IconComponent
              className={cn(
                variant === "error" && "text-destructive",
                variant === "success" && "text-success",
                variant === "warning" && "text-warning",
                variant === "info" && "text-info"
              )}
              size={128}
              aria-hidden={!!message} // Hide from screen readers if there's a text message
              role={!message ? "img" : undefined} // Add role if no message explains the icon
              aria-label={!message ? `${variant || "info"} icon` : undefined} // Add label if no message
              data-testid="icon"
            />
          </Flex>
        )}
        <Flex direction="col" justify="center" className="max-w-[500px]">
          {message ? (
            <Heading level="4" align="center" weight="normal">
              {message}
            </Heading>
          ) : null}
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
