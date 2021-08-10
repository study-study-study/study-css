import React from "react";
import type { Props } from "./type";

export const useExample = (): Props => {
  const [value, setValue] = React.useState<"ok" | "ng">("ok");

  return {
    selectors: {
      value,
      items: ["a", "b"],
    },
    operations: {
      toNG: () => setValue("ng"),
    },
  };
};
