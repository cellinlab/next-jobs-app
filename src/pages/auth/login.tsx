import type { ReactElement } from "react";
import { useRouter } from "next/router";

import { Seo } from "@/components/seo";
import { LoginForm } from "@/features/auth";
import { AuthLayout } from "@/layouts/auth-layout";

const LoginPage = () => {
  const router = useRouter();

  const onSuccess = () => {
    const redirect = router.query.redirect as string;
    router.replace(redirect || "/dashboard/jobs");
  };

  return (
    <>
      <Seo title="Login" />
      <LoginForm onSuccess={onSuccess} />
    </>
  );
};

LoginPage.getLayout = (page: ReactElement) => <AuthLayout title="Log In">{page}</AuthLayout>;

export default LoginPage;
