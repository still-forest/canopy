import { CircleX, FileQuestion, KeyRound, Mailbox, ShieldCheck } from "lucide-react";
import type React from "react";
import { Flex } from "@/layout";
import { Heading } from "@/typography";
import { cn } from "@/utils";

const icons: Record<string, React.ElementType> = {
  key: KeyRound,
  mailbox: Mailbox,
  shield_check: ShieldCheck,
  circle_x: CircleX,
  file_question: FileQuestion,
} as const;

export interface InterstitialProps {
  variant?: "error" | "info" | "success" | "warning";
  icon?: keyof typeof icons;
  iconComponent?: React.ElementType;
  message?: string;
  children?: React.ReactNode;
}

export const Interstitial = ({ variant, icon, iconComponent, message, children }: InterstitialProps) => {
  if (!icon && !iconComponent && !message && !children) {
    console.warn("Interstitial requires at least one of icon, iconComponent, message, or children");
    return null;
  }

  const IconComponent = iconComponent ? iconComponent : icon ? icons[icon] : null;

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
                variant === "info" && "text-info",
              )}
              size={128}
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
