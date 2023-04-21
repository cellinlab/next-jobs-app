import { Box } from "@chakra-ui/react";

import { DataTable } from "@/components/data-table";
import type { DataTableProps } from "@/components/data-table";
import { Link } from "@/components/link";

import type { Job } from "../../types";

type JobListType = "dashboard" | "public";

export type JobsListProps = {
  type: JobListType;
  jobs: Job[];
  isLoading?: boolean;
  organizationId: string;
};

const getTableColumns = (organizationId: string, type: JobListType) => {
  const tableColumns: DataTableProps<Job>["columns"] = [
    {
      title: "Position",
      field: "position",
    },
    {
      title: "Department",
      field: "department",
    },
    {
      title: "Location",
      field: "location",
    },
    {
      title: "",
      field: "id",
      render: ({ entry: { id } }) => {
        return (
          <Link
            href={
              type === "public"
                ? `/organizations/${organizationId}/jobs/${id}`
                : `/dashboard/jobs/${id}`
            }
          >
            View
          </Link>
        );
      },
    },
  ];

  return tableColumns;
};

export const JobsList = ({ type, jobs, isLoading = false, organizationId }: JobsListProps) => {
  const tableColumns = getTableColumns(organizationId, type);

  return (
    <Box>
      <DataTable columns={tableColumns} data={jobs} isLoading={isLoading} />
    </Box>
  );
};
