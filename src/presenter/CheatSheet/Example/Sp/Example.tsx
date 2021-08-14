import React from "react";
import type * as Outer from "../type";
import type { Props } from "./type";
import { useExample } from "./useExample";

const ExampleComponent: React.VFC<Props> = (props) => (
  <button type="button" onClick={props.operations.toNG}>
    失敗にする -- Sp {props.selectors.deviceName}
  </button>
);

const ExampleContainer: React.VFC<Props> = (props) => {
  if (props.app.isIOS) {
    return <>アンドロイドで見てね</>;
  }
  return <ExampleComponent {...props} />;
};

export const Example: React.VFC<Outer.Props> = (props) => (
  <ExampleContainer {...useExample(props)} />
);
