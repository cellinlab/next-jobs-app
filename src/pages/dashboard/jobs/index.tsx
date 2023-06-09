import { ReactElement } from "react";
import { Heading, HStack } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

import { Link } from "@/components/link";
import { Seo } from "@/components/seo";
import { JobsList, useJobs } from "@/features/jobs";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { useUser } from "@/features/auth";

const DashboardJobsPage = () => {
  const user = useUser();
  const jobs = useJobs({
    params: {
      organizationId: user.data?.organizationId ?? "",
    },
  });

  if (!user.data) return null;

  return (
    <>
      <Seo title="Jobs" />
      <HStack mb="8" justify="space-between" align="center">
        <Heading>Jobs</Heading>
        <Link href={`/dashboard/jobs/create`} icon={<PlusSquareIcon />} variant="solid">
          Create Job
        </Link>
      </HStack>
      <JobsList
        jobs={jobs.data}
        isLoading={jobs.isLoading}
        organizationId={user.data.organizationId}
        type="dashboard"
      />
    </>
  );
};

DashboardJobsPage.getLayout = (page: ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

export default DashboardJobsPage;
