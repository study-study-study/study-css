import React from "react";
import type { ComponentProps } from "../type";

export const Example: React.VFC<ComponentProps> = (props) => (
  <button type="button" onClick={props.operations.toNG}>
    失敗にする -- Pc
  </button>
);
