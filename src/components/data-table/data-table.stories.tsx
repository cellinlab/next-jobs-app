import { Meta, Story } from "@storybook/react";

import { DataTable } from "./data-table";
import type { DataTableProps } from "./data-table";

import { testData } from "@/testing/test-data";

const meta: Meta = {
  title: "Components/DataTable",
  component: DataTable,
};

export default meta;

const data = testData.jobs.slice(0, 6);

const columns: DataTableProps<(typeof data)[0]>["columns"] = [
  {
    title: "Position",
    field: "position",
  },
  {
    title: "Location",
    field: "location",
  },
  {
    title: "Department",
    field: "department",
  },
];

const Template: Story<DataTableProps<(typeof data)[0]>> = (args) => <DataTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  columns,
  data,
};

export const Empty = Template.bind({});

Empty.args = {
  columns,
  data: [],
};

export const Loading = Template.bind({});

Loading.args = {
  columns,
  isLoading: true,
  data: [],
};
