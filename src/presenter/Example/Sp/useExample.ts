import type * as Outer from "../type";
import type { Props } from "./type";

type UseExample = (p: Outer.Props) => Props;
export const useExample: UseExample = (props) => {
  return {
    selectors: {
      deviceName: "ほげ",
      ...props.selectors,
    },
    app: {
      isIOS: true,
    },
    operations: {
      ...props.operations,
    },
  };
};
