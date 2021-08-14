import React from "react";
import { useExample } from "./useExample";
import type { Props } from "./type";
import * as Pc from "./Pc";
import * as Sp from "./Sp";

type ContainerProps = {
  useHook: () => Props;
};
const ExampleContainer: React.VFC<ContainerProps> = (props) => {
  const state = props.useHook();

  if (state.selectors.value === "ng") {
    return <>失敗</>;
  }

  const Component = state.app.isPc ? Pc.Example : Sp.Example;
  return <Component {...state} />;
};

export const Example: React.VFC = () => (
  <ExampleContainer useHook={useExample} />
);
