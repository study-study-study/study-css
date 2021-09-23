import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* パソコン版のサイトがそのままスマホやタブレットで表示されると、サイトが小さく表示されてしまいます。文字や写真を見るためにはわざわざズームをしなければなりません。こういった手間をユーザーに与えないためにも、viewportの設定は必要なのです。 */}
          <meta name="viewport" content="width=device-width,initial-scale=1" />

          {/* フォント指定 Noto Sans JP */}
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap&subset=japanese"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
