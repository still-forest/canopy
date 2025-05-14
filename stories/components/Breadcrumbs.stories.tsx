import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs, type BreadcrumbType } from "@/components";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultBreadcrumbs: BreadcrumbType[] = [
  { label: "Root", to: "/" },
  { label: "Level 1", to: "/level_1" },
  { label: "Level 2", to: "/level_1/2" },
  { label: "Current" },
];

export const Default: Story = {
  args: { breadcrumbs: defaultBreadcrumbs },
};

export const SingleLevel: Story = {
  args: { breadcrumbs: [{ label: "Current" }] },
};

export const WithCustomComponents: Story = {
  args: {
    breadcrumbs: defaultBreadcrumbs,
    linkComponent: ({ to, label }: { to: string; label: string }) => (
      <button
        type="button"
        onClick={to ? () => window.alert(`Going to ${to}`) : undefined}
        className={to ? "cursor-pointer hover:bg-blue-200" : "cursor-default text-black"}
        aria-disabled={!to}
      >
        {label}
      </button>
    ),
    pageComponent: ({ label }: { label: string }) => (
      <span className="cursor-default text-black" aria-disabled={true}>
        {label}
      </span>
    ),
  },
};
