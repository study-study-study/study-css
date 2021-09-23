import React from "react";
import type { NextPage } from "next";
import { Some } from "~/presenter/old/CheatSheet/Some/Some";
import { RenderProps } from "~/presenter/old/CheatSheet/Xxx";

// クリック可能
// 中央寄せ
const Page: NextPage = () => (
  <>
    <div
      style={{
        textAlign: "center",
      }}
    >
      <a href="/hoge">
        <img src="/banner-1.png" alt="Tansaku!" style={{ display: "inline" }} />
      </a>
    </div>

    <div
      style={{
        textAlign: "center",
      }}
    >
      <img src="/banner-1.png" alt="Tansaku!" style={{ display: "inline" }} />
    </div>

    <Some />
    <br />
    <RenderProps suffix="様" render={(state) => <>{state.name}</>} />
    <br />
    <RenderProps suffix="ちゃん" render={(state) => <>{state.name}</>} />
  </>
);

export default Page;
