import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";

import { AppProvider } from "@/providers/app";
import { API_MOCKING } from "@/config/constants";
import type { MSWWrapperProps } from "@/lib/msw";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MSWWrapper = dynamic<MSWWrapperProps>(() =>
  import("@/lib/msw").then(({ MSWWrapper }) => MSWWrapper)
);

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const pageContent = getLayout(<Component {...pageProps} />);
  return (
    <AppProvider>{API_MOCKING ? <MSWWrapper>{pageContent}</MSWWrapper> : pageContent}</AppProvider>
  );
};

export default App;
