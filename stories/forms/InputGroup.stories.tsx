import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  CheckIcon,
  Circle,
  Copy,
  CornerDownLeft,
  CreditCardIcon,
  HelpCircle,
  InfoIcon,
  MailIcon,
  RotateCcw,
  ScrollText,
  SearchIcon,
  Star,
  StarIcon,
} from "lucide-react";
import { useId } from "react";
import { Loader } from "@/components/Loader";
import { Popover } from "@/components/Popover";
import { Tooltip } from "@/components/Tooltip";
import { InputGroup } from "@/forms";
import { Label } from "@/forms/Label";
import { Flex } from "@/layout";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof InputGroup> = {
  title: "Forms/Inputs/InputGroup",
  component: InputGroup,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <InputGroup>
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon>
        <SearchIcon />
      </InputGroup.Addon>
      <InputGroup.Addon align="inline-end">
        <InputGroup.Button>Search</InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup>
  ),
};

export const Icons: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      <InputGroup>
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <SearchIcon />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Enter your email" type="email" />
        <InputGroup.Addon>
          <MailIcon />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Card number" />
        <InputGroup.Addon>
          <CreditCardIcon />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <CheckIcon />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Card number" />
        <InputGroup.Addon align="inline-end">
          <StarIcon />
          <InfoIcon />
        </InputGroup.Addon>
      </InputGroup>
    </Flex>
  ),
};

export const Button: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      <InputGroup>
        <InputGroup.Input placeholder="https://x.com/shadcn" readOnly />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button
            aria-label="Copy"
            onClick={() => {
              console.log("Copy");
            }}
            size="icon-xs"
            title="Copy"
          >
            <Copy />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup className="[--radius:9999px]">
        <Popover>
          <Popover.Trigger asChild>
            <InputGroup.Addon>
              <InputGroup.Button size="icon-xs" variant="secondary">
                <Circle />
              </InputGroup.Button>
            </InputGroup.Addon>
          </Popover.Trigger>
          <Popover.Content align="start" className="flex flex-col gap-1 rounded-xl text-sm">
            <p className="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </Popover.Content>
        </Popover>
        <InputGroup.Addon className="text-muted-foreground pl-1.5">https://</InputGroup.Addon>
        <InputGroup.Input />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button onClick={() => console.log("Favorite")} size="icon-xs">
            <Star
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
              data-favorite={true}
            />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Type to search..." />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button variant="secondary">Search</InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    </Flex>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      <InputGroup>
        <InputGroup.Input placeholder="Enter password" type="password" />
        <InputGroup.Addon align="inline-end">
          <Tooltip>
            <Tooltip.Trigger asChild>
              <InputGroup.Button aria-label="Info" size="icon-xs" variant="ghost">
                <InfoIcon />
              </InputGroup.Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>Password must be at least 8 characters</p>
            </Tooltip.Content>
          </Tooltip>
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Your email address" />
        <InputGroup.Addon align="inline-end">
          <Tooltip>
            <Tooltip.Trigger asChild>
              <InputGroup.Button aria-label="Help" size="icon-xs" variant="ghost">
                <HelpCircle />
              </InputGroup.Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>We&apos;ll use this to send you notifications</p>
            </Tooltip.Content>
          </Tooltip>
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Enter API key" />
        <Tooltip>
          <Tooltip.Trigger asChild>
            <InputGroup.Addon>
              <InputGroup.Button aria-label="Help" size="icon-xs" variant="ghost">
                <HelpCircle />
              </InputGroup.Button>
            </InputGroup.Addon>
          </Tooltip.Trigger>
          <Tooltip.Content side="left">
            <p>Click for help with API keys</p>
          </Tooltip.Content>
        </Tooltip>
      </InputGroup>
    </Flex>
  ),
};

export const Textarea: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      <InputGroup>
        <InputGroup.Textarea className="min-h-[200px]" placeholder="console.log('Hello, world!');" />
        <InputGroup.Addon align="block-end" className="border-t">
          <InputGroup.Text>Line 1, Column 1</InputGroup.Text>
          <InputGroup.Button className="ml-auto" size="sm" variant="default">
            Run <CornerDownLeft />
          </InputGroup.Button>
        </InputGroup.Addon>
        <InputGroup.Addon align="block-start" className="border-b">
          <InputGroup.Text className="font-mono font-medium">
            <ScrollText />
            script.js
          </InputGroup.Text>
          <InputGroup.Button className="ml-auto" size="icon-xs">
            <RotateCcw />
          </InputGroup.Button>
          <InputGroup.Button size="icon-xs" variant="ghost">
            <Copy />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    </Flex>
  ),
};

export const Spinner: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      <InputGroup data-disabled>
        <InputGroup.Input disabled placeholder="Searching..." />
        <InputGroup.Addon align="inline-end">
          <Loader />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroup.Input disabled placeholder="Processing..." />
        <InputGroup.Addon>
          <Loader />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroup.Input disabled placeholder="Saving changes..." />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Text>Saving...</InputGroup.Text>
          <Loader />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroup.Input disabled placeholder="Refreshing data..." />
        <InputGroup.Addon>
          <Loader variant="wheel" />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <InputGroup.Text className="text-muted-foreground">Please wait...</InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup>
    </Flex>
  ),
};

export const WithLabel: Story = {
  render: () => {
    const emailId = useId();
    const email2Id = useId();
    return (
      <Flex direction="col" gap="2">
        <InputGroup>
          <InputGroup.Input id={emailId} placeholder="shadcn" />
          <InputGroup.Addon>
            <Label htmlFor={emailId}>@</Label>
          </InputGroup.Addon>
        </InputGroup>
        <InputGroup>
          <InputGroup.Input id={email2Id} placeholder="shadcn@vercel.com" />
          <InputGroup.Addon align="block-start">
            <Label className="text-foreground" htmlFor={email2Id}>
              Email
            </Label>
            <Tooltip>
              <Tooltip.Trigger asChild>
                <InputGroup.Button aria-label="Help" className="ml-auto rounded-full" size="icon-xs" variant="ghost">
                  <InfoIcon />
                </InputGroup.Button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>We&apos;ll use this to send you notifications</p>
              </Tooltip.Content>
            </Tooltip>
          </InputGroup.Addon>
        </InputGroup>
      </Flex>
    );
  },
};
