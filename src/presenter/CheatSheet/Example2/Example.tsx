import React, { ReactPropTypes } from "react";
import * as hooks from "./useExample";
import type { ContainerProps } from "./type";
import * as Pc from "./Pc";
import * as Sp from "./Sp";

type Props = {
  useHook: () => ContainerProps;
};
const ExampleContainer: React.VFC<Props> = (props) => {
  const state = props.useHook();

  if (state.hoge === "xxx") {
    return <>失敗</>;
  }

  if (state.hoge === "pc") {
    return <Pc.Example useHook={hooks.useExamplePc} />;
  }

  if (state.hoge === "sp") {
    return <Sp.Example useHook={hooks.useExampleSp} />;
  }

  return null;
};

export const Example: React.VFC = () => (
  <ExampleContainer useHook={hooks.useExampleContainer} />
);
