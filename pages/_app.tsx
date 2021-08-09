import "modern-css-reset/dist/reset.min.css";
import React from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import Head from "next/head";
import { GlobalStyle } from "~/presenter/Styles/GlobalStyle";

export const Page: NextPage<AppProps> = (props) => (
  <>
    <Head>
      {/* パソコン版のサイトがそのままスマホやタブレットで表示されると、サイトが小さく表示されてしまいます。文字や写真を見るためにはわざわざズームをしなければなりません。こういった手間をユーザーに与えないためにも、viewportの設定は必要なのです。 */}
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
    <GlobalStyle />
    <props.Component {...props.pageProps} />
  </>
);

export default Page;
