import React from "react";
import type * as Outer from "../type";

export const Example: React.VFC<Outer.ComponentPropsForSp> = (props) => {
  return (
    <>
      <>{props.foo}</>
      <>{props.baz}</>
    </>
  );
};
