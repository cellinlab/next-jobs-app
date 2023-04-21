import { NotAllowedIcon } from "@chakra-ui/icons";
import { Center, Heading, VStack } from "@chakra-ui/react";

export const NotFound = () => {
  return (
    <Center h="96" color="gray.500">
      <VStack>
        <NotAllowedIcon boxSize="32" />
        <Heading>Page not found</Heading>
      </VStack>
    </Center>
  );
};
