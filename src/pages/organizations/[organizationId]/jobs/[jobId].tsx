import { ReactElement } from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { Stack, Button } from "@chakra-ui/react";

import { NotFound } from "@/components/not-found";
import { Seo } from "@/components/seo";
import { PublicJobInfo, getJob } from "@/features/jobs";
import { getOrganization } from "@/features/organizations";
import { PublicLayout } from "@/layouts/public-layout";

type PublicJobPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const PublicJobPage = ({ organization, job }: PublicJobPageProps) => {
  const isInvalid = !job || !organization || job.organizationId !== organization.id;

  if (isInvalid) {
    return <NotFound />;
  }

  return (
    <>
      <Seo title={`${job.position} | ${job.location}`} />
      <Stack w="full">
        <PublicJobInfo job={job} />
        <Button
          bg="primary"
          color="primaryAccent"
          _hover={{
            opacity: "0.9",
          }}
          as="a"
          href={`mailto:${organization.email}?subject=Application for ${job.position} position`}
          target="_blank"
        >
          Apply
        </Button>
      </Stack>
    </>
  );
};

PublicJobPage.getLayout = (page: ReactElement) => <PublicLayout>{page}</PublicLayout>;

export default PublicJobPage;

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const organizationId = params?.organizationId as string;
  const jobId = params?.jobId as string;

  const [organization, job] = await Promise.all([
    getOrganization({ organizationId }).catch(() => null),
    getJob({ jobId }).catch(() => null),
  ]);

  return {
    props: {
      organization,
      job,
    },
  };
};
