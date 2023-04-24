import { useEffect } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";

import { Loading } from "@/components/loading";

import { useUser } from "../../api/get-auth-user";

export type ProtectedProps = {
  children: ReactNode;
};

export const Protected = ({ children }: ProtectedProps) => {
  const { replace, asPath } = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user.data && !user.isLoading) {
      replace(`/auth/login?redirect=${asPath}`, undefined, { shallow: true });
    }
  }, [user, replace, asPath]);

  if (user.isLoading) {
    return (
      <Flex direction="column" justify="center" h="full">
        <Loading />
      </Flex>
    );
  }

  if (!user.data && !user.isLoading) return null;

  return <>{children}</>;
};
