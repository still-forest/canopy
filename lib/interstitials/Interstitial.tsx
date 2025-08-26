import type React from "react";
import { Flex } from "@/layout";
import { Heading } from "@/typography";
import { cn } from "@/utils/cn";

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
      <Flex align="center" className="h-full w-full" justify="center">
        Content missing
      </Flex>
    );
  }

  const IconComponent = iconComponent ? iconComponent : null;

  return (
    <Flex align="center" className="h-full w-full" justify="center">
      <Flex direction="col" justify="center">
        {IconComponent && (
          <Flex align="center" className="my-6" gapX="4" justify="center">
            <IconComponent
              aria-hidden={!!message}
              aria-label={!message ? `${variant || "info"} icon` : undefined}
              className={cn(
                variant === "error" && "text-destructive",
                variant === "success" && "text-success",
                variant === "warning" && "text-warning",
                variant === "info" && "text-info",
              )} // Hide from screen readers if there's a text message
              data-testid="icon" // Add role if no message explains the icon
              role={!message ? "img" : undefined} // Add label if no message
              size={128}
            />
          </Flex>
        )}
        <Flex className="max-w-[500px]" direction="col" justify="center">
          {message ? (
            <Heading align="center" level="4" weight="normal">
              {message}
            </Heading>
          ) : null}
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
