import { ReactElement } from "react";
import { useRouter } from "next/router";
import { Heading } from "@chakra-ui/react";

import { Seo } from "@/components/seo";
import { CreateJobForm } from "@/features/jobs";
import { DashboardLayout } from "@/layouts/dashboard-layout";

const DashboardCreateJobPage = () => {
  const router = useRouter();

  const onSuccess = () => {
    router.push("/dashboard/jobs");
  };

  return (
    <>
      <Seo title="Create Job" />
      <Heading mb="8">Create Job</Heading>
      <CreateJobForm onSuccess={onSuccess} />
    </>
  );
};

DashboardCreateJobPage.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default DashboardCreateJobPage;
