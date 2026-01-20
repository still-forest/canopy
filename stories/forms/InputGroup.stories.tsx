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
      <InputGroup.Input name="search" placeholder="Search..." />
      <InputGroup.Addon>
        <SearchIcon />
      </InputGroup.Addon>
      <InputGroup.Addon align="inline-end">
        <InputGroup.Button>Search</InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      <InputGroup>
        <InputGroup.Input name="search" placeholder="Search..." />
        <InputGroup.Addon>
          <SearchIcon />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input name="email" placeholder="Enter your email" type="email" />
        <InputGroup.Addon>
          <MailIcon />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input name="card-number" placeholder="Card number" />
        <InputGroup.Addon>
          <CreditCardIcon />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <CheckIcon />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input name="card-number" placeholder="Card number" />
        <InputGroup.Addon align="inline-end">
          <Star />
          <InfoIcon />
        </InputGroup.Addon>
      </InputGroup>
    </Flex>
  ),
};

export const WithButton: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      <InputGroup>
        <InputGroup.Input name="url" placeholder="https://x.com/shadcn" readOnly />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button
            aria-label="Copy"
            onClick={() => {
              console.log("Copy");
            }}
            size="xs"
            title="Copy"
          >
            <Copy />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup className="[--radius:9999px]">
        <Popover>
          <Popover.Trigger
            render={() => (
              <InputGroup.Addon>
                <InputGroup.Button asIcon size="xs" variant="secondary">
                  <Circle />
                </InputGroup.Button>
              </InputGroup.Addon>
            )}
          />
          <Popover.Content align="start" className="flex flex-col gap-1 rounded-xl text-sm">
            <p className="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </Popover.Content>
        </Popover>
        <InputGroup.Addon className="text-muted-foreground pl-1.5">https://</InputGroup.Addon>
        <InputGroup.Input name="url" />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button asIcon onClick={() => console.log("Favorite")} size="xs">
            <Star
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
              data-favorite={true}
            />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Input name="search" placeholder="Type to search..." />
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
        <InputGroup.Input name="password" placeholder="Enter password" type="password" />
        <InputGroup.Addon align="inline-end">
          <Tooltip>
            <Tooltip.Trigger asChild>
              <InputGroup.Button aria-label="Info" asIcon size="xs" variant="ghost">
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
        <InputGroup.Input name="email" placeholder="Your email address" />
        <InputGroup.Addon align="inline-end">
          <Tooltip>
            <Tooltip.Trigger asChild>
              <InputGroup.Button aria-label="Help" asIcon size="xs" variant="ghost">
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
        <InputGroup.Input name="api-key" placeholder="Enter API key" />
        <Tooltip>
          <Tooltip.Trigger asChild>
            <InputGroup.Addon>
              <InputGroup.Button aria-label="Help" asIcon size="xs" variant="ghost">
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
        <InputGroup.Textarea className="min-h-[200px]" name="code" placeholder="console.log('Hello, world!');" />
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
          <InputGroup.Button asIcon className="ml-auto" size="xs">
            <RotateCcw />
          </InputGroup.Button>
          <InputGroup.Button asIcon size="xs" variant="ghost">
            <Copy />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    </Flex>
  ),
};

export const WithSpinner: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      <InputGroup data-disabled>
        <InputGroup.Input disabled name="searching" placeholder="Searching..." />
        <InputGroup.Addon align="inline-end">
          <Loader />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroup.Input disabled name="processing" placeholder="Processing..." />
        <InputGroup.Addon>
          <Loader />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroup.Input disabled name="saving-changes" placeholder="Saving changes..." />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Text>Saving...</InputGroup.Text>
          <Loader />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroup.Input disabled name="refreshing-data" placeholder="Refreshing data..." />
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
          <InputGroup.Input id={emailId} name="email" placeholder="homer@simpson.com" />
          <InputGroup.Addon>
            <Label htmlFor={emailId}>@</Label>
          </InputGroup.Addon>
        </InputGroup>
        <InputGroup>
          <InputGroup.Input id={email2Id} name="email-2" placeholder="marge@simpson.com" />
          <InputGroup.Addon align="block-start">
            <Label className="text-foreground" htmlFor={email2Id}>
              Email
            </Label>
            <Tooltip>
              <Tooltip.Trigger asChild>
                <InputGroup.Button aria-label="Help" asIcon className="ml-auto rounded-full" size="xs" variant="ghost">
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
