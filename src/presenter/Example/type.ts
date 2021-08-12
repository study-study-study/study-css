export type ComponentProps = {
  selectors: {
    items: string[];
  };
  operations: {
    toNG: () => void;
  };
};

type ContainerProps = {
  selectors: {
    value: "ok" | "ng";
  };
};

export type Props = ContainerProps & ComponentProps;
