import { Heading, Stack } from "@chakra-ui/react";

import { Content } from "@/components/content";
import { InfoCard } from "@/components/info-card";

import type { Organization } from "../../types";

type OrganizationInfoProps = {
  organization: Organization;
};

export const OrganizationInfo = ({ organization }: OrganizationInfoProps) => {
  return (
    <>
      <Stack
        w="full"
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
        <Heading>{organization.name}</Heading>
        <Stack w={{ base: "full", md: "auto" }} direction={{ base: "column", md: "row" }}>
          <InfoCard label="Email" value={organization.email} />
          <InfoCard label="Phone" value={organization.phone} />
        </Stack>
      </Stack>
      <Content>{organization.info}</Content>
    </>
  );
};
