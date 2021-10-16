export interface ComponentProps {
  selectors: {
    items: string[];
  };
  operations: {
    toNG: () => void;
  };
  app: {
    isPc: boolean;
  };
}

interface ContainerProps {
  selectors: {
    value: 'ok' | 'ng';
  };
}

export type Props = ContainerProps & ComponentProps;
