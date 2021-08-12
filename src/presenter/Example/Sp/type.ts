import type * as Outer from "../type";

type ComponentProps = {
  selectors: {
    deviceName: string;
  };
};

type ContainerProps = {
  app: {
    isIOS: boolean;
  };
};

export type Props = ContainerProps & ComponentProps & Outer.Props;
