import type React from "react";

import { CircleX, KeyRound, FileQuestion, Mailbox, ShieldCheck } from "lucide-react";

import { Flex, Heading } from "@/primitives";

const icons: Record<string, React.ElementType> = {
  key: KeyRound,
  mailbox: Mailbox,
  shield_check: ShieldCheck,
  circle_x: CircleX,
  file_question: FileQuestion,
} as const;

export interface InterstitialProps {
  icon?: keyof typeof icons;
  message?: string;
  children?: React.ReactNode;
}

export function InterstitialBase({ icon, message, children }: InterstitialProps) {
  if (!icon && !message && !children) {
    console.warn("InterstitialBase requires at least one of icon, message, or children");
    return null;
  }

  const IconComponent = icon ? icons[icon] : null;

  return (
    <Flex align="center" justify="center" className="h-full w-full">
      <Flex direction="col" justify="center">
        {IconComponent && (
          <div className="mx-auto my-12">
            <IconComponent className="text-info" size={128} />
          </div>
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
}
