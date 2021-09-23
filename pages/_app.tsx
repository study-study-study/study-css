import "modern-css-reset/dist/reset.min.css";
import React from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { GlobalStyle } from "~/presenter/Styles/GlobalStyle";
import { ErrorBoundary } from "~/presenter/ErrorBoundary";
import dynamic from "next/dynamic";
import { config } from "@fortawesome/fontawesome-svg-core";

// ReactのComponentで使う用
import "@fortawesome/fontawesome-svg-core/styles.css";

// cssのafterなどで使う用
import "@fortawesome/fontawesome-free/css/all.min.css";

config.autoAddCss = false;

const Page: NextPage<AppProps> = (props) => {
  const SafeHydrate = dynamic(() => import("~/presenter/SafeHydrate"), {
    ssr: false,
  });

  return (
    <>
      <ErrorBoundary>
        <SafeHydrate>
          <GlobalStyle />
          <props.Component {...props.pageProps} />
        </SafeHydrate>
      </ErrorBoundary>
    </>
  );
};

export default Page;
