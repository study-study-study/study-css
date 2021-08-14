export type ComponentProps = {
  selectors: {
    items: string[];
  };
  operations: {
    toNG: () => void;
  };
  app: {
    isPc: boolean;
  };
};

type ContainerProps = {
  selectors: {
    value: "ok" | "ng";
  };
};

export type Props = ContainerProps & ComponentProps;
