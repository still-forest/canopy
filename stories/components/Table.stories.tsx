import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "@/components";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <Table.Caption>A list of your recent invoices.</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head className="w-[100px]">Invoice</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Method</Table.Head>
          <Table.Head className="text-right">Amount</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell className="font-medium">INV001</Table.Cell>
          <Table.Cell>Paid</Table.Cell>
          <Table.Cell>Credit Card</Table.Cell>
          <Table.Cell className="text-right">$250.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="font-medium">INV002</Table.Cell>
          <Table.Cell>Pending</Table.Cell>
          <Table.Cell>Check</Table.Cell>
          <Table.Cell className="text-right">$150.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="font-medium">INV003</Table.Cell>
          <Table.Cell>Failed</Table.Cell>
          <Table.Cell>Debit Card</Table.Cell>
          <Table.Cell className="text-right">$100.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
