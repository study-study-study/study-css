import "modern-css-reset/dist/reset.min.css";
import React from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import Head from "next/head";
import { GlobalStyle } from "~/presenter/Styles/GlobalStyle";
import { ErrorBoundary } from "~/presenter/ErrorBoundary";
import dynamic from "next/dynamic";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const Page: NextPage<AppProps> = (props) => {
  const SafeHydrate = dynamic(() => import("~/presenter/SafeHydrate"), {
    ssr: false,
  });

  return (
    <>
      <ErrorBoundary>
        <SafeHydrate>
          <Head>
            {/* パソコン版のサイトがそのままスマホやタブレットで表示されると、サイトが小さく表示されてしまいます。文字や写真を見るためにはわざわざズームをしなければなりません。こういった手間をユーザーに与えないためにも、viewportの設定は必要なのです。 */}
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />

            {/* フォント指定 Noto Sans JP */}
            <link
              href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap&subset=japanese"
              rel="stylesheet"
            />
          </Head>
          <GlobalStyle />
          <props.Component {...props.pageProps} />
        </SafeHydrate>
      </ErrorBoundary>
    </>
  );
};

export default Page;
