import type * as Outer from '../type';

interface ComponentProps {
  selectors: {
    deviceName: string;
  };
}

interface ContainerProps {
  app: {
    isIOS: boolean;
  };
}

export type Props = ContainerProps & ComponentProps & Outer.Props;

// 2ファイル以上で使用する場合typeを実装
