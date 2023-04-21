import { ViewIcon } from "@chakra-ui/icons";
import { Heading, HStack, VStack, Text } from "@chakra-ui/react";

import { Content } from "@/components/content";
import { Link } from "@/components/link";

import type { Job } from "../../types";

export type PublicJobInfoProps = {
  job: Job;
};

export const PublicJobInfo = ({ job }: PublicJobInfoProps) => {
  return (
    <>
      <VStack pt="16" pb="8" spacing="8">
        <Heading size="2xl">{job?.position}</Heading>
        <HStack spacing="12">
          <Text>{job?.department}</Text>
          <Text>{job?.location}</Text>
        </HStack>
        <Link href={`/organizations/${job?.organizationId}`} variant="outline" icon={<ViewIcon />}>
          View More Jobs
        </Link>
      </VStack>
      <Content>{job?.info}</Content>
    </>
  );
};
