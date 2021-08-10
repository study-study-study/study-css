import React from "react";
import { useExample } from "./useExample";
import type { ComponentProps, Props } from "./type";

const ExampleComponent: React.VFC<ComponentProps> = (props) => (
  <button type="button" onClick={props.operations.toNG}>
    失敗にする
  </button>
);

const ExampleContainer: React.VFC<Props> = (props) => {
  if (props.selectors.value === "ng") {
    return <>失敗</>;
  }
  return <ExampleComponent {...props} />;
};

export const Example: React.VFC = () => <ExampleContainer {...useExample()} />;
