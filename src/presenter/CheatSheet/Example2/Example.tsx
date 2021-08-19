import React from "react";
import { useExamplePc, useExampleSp, useExampleContainer } from "./useExample";
import type { ContainerProps } from "./type";
import * as Pc from "./Pc";
import * as Sp from "./Sp";

const Ppp: React.VFC = () => <Pc.Example {...useExamplePc()} />;
const Sss: React.VFC = () => <Sp.Example {...useExampleSp()} />;

const ExampleContainer: React.VFC<ContainerProps> = (props) => {
  if (props.hoge === "xxx") {
    return <>失敗</>;
  }

  if (props.hoge === "aaa") {
    return <>xxx</>;
  }

  if (props.hoge === "pc") {
    return <Ppp />;
  }

  if (props.hoge === "sp") {
    return <Sss />;
  }

  throw new Error("");
};

export const Example: React.VFC = () => (
  <ExampleContainer {...useExampleContainer()} />
);
