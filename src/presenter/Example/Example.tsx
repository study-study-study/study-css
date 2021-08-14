import React from "react";
import { useExample } from "./useExample";
import type { Props } from "./type";
import * as Pc from "./Pc";
import * as Sp from "./Sp";

const ExampleContainer: React.VFC<Props> = (props) => {
  if (props.selectors.value === "ng") {
    return <>失敗</>;
  }

  const Component = props.app.isPc ? Pc.Example : Sp.Example;
  return <Component {...props} />;
};

export const Example: React.VFC = () => <ExampleContainer {...useExample()} />;
