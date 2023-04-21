import { Center, Heading, Text, VStack } from "@chakra-ui/react";

import { Link } from "@/components/link";
import { Seo } from "@/components/seo";

const LandingPage = () => {
  return (
    <>
      <Seo title="Jobs App" />
      <Center h="full" flexDirection="column">
        <VStack maxW="3xl" spacing="8">
          <Heading size="3xl">
            Welcome to the{" "}
            <Text as="span" color="blue.500">
              Jobs App
            </Text>
          </Heading>
          <Text
            fontSize={{
              base: "lg",
              md: "xl",
            }}
            maxW="2xl"
            color="muted"
          >
            Manage your careers pages
          </Text>
          <Link href="/dashboard/jobs" variant="solid">
            Get started
          </Link>
        </VStack>
      </Center>
    </>
  );
};

export default LandingPage;
