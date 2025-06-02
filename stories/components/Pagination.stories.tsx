import type { Meta, StoryObj } from "@storybook/react-vite";

import { Pagination } from "@/components";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageCount: 10,
    currentPage: 1,
    onChange: (page: number) => {
      console.log("moving to page", page);
    },
  },
};

export const MiddlePage: Story = {
  args: {
    pageCount: 10,
    currentPage: 5,
    onChange: (page: number) => {
      console.log("moving to page", page);
    },
  },
};

export const LastPage: Story = {
  args: {
    pageCount: 10,
    currentPage: 10,
    onChange: (page: number) => {
      console.log("moving to page", page);
    },
  },
};

export const FewPages: Story = {
  args: {
    pageCount: 2,
    currentPage: 1,
    onChange: (page: number) => {
      console.log("moving to page", page);
    },
  },
};

export const SinglePage: Story = {
  args: {
    pageCount: 1,
    currentPage: 1,
    onChange: (page: number) => {
      console.log("moving to page", page);
    },
  },
};
