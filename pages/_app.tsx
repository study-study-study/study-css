import "modern-css-reset/dist/reset.min.css";
import React from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { GlobalStyle } from "~/presenter/Styles/GlobalStyle";
import { ErrorBoundary } from "~/presenter/ErrorBoundary";
import dynamic from "next/dynamic";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";

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
      <Head>
        {/* パソコン版のサイトがそのままスマホやタブレットで表示されると、サイトが小さく表示されてしまいます。文字や写真を見るためにはわざわざズームをしなければなりません。こういった手間をユーザーに与えないためにも、viewportの設定は必要なのです。 */}
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
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
