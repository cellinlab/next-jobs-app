import { ReactElement } from "react";
import { useRouter } from "next/router";
import { Heading } from "@chakra-ui/react";

import { Seo } from "@/components/seo";
import { CreateJobForm } from "@/features/jobs";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { useNotifications } from "@/stores/notifications";

const DashboardCreateJobPage = () => {
  const router = useRouter();

  const { showNotification } = useNotifications();

  const onSuccess = () => {
    showNotification({
      type: "success",
      title: "Job created",
      message: "Your job has been created successfully",
      duration: 5000,
    });
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
