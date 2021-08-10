type ContainerProps = {
  selectors: {
    value: "ok" | "ng";
  };
};

export type ComponentProps = {
  selectors: {
    items: string[];
  };
  operations: {
    toNG: () => void;
  };
};

export type Props = ContainerProps & ComponentProps;
