import React from "react";
import type * as Outer from "../type";

type Props = { useHook: () => Outer.ComponentPropsForSp };
export const Example: React.VFC<Props> = (props) => {
  const state = props.useHook();

  return (
    <>
      <>{state.foo}</>
      <>{state.baz}</>
    </>
  );
};
