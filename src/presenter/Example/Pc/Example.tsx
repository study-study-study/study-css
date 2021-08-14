import React from "react";
import type * as Outer from "../type";

export const Example: React.VFC<Outer.ComponentProps> = (props) => (
  <button type="button" onClick={props.operations.toNG}>
    失敗にする -- Pc
  </button>
);
