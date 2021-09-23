import type * as type from "./type";

type UseExampleBase = () => {
  base: string;
};
const useExampleBase: UseExampleBase = () => {
  return {
    base: "base",
  };
};

type UseExamplePc = () => type.ComponentPropsForPc;
export const useExamplePc: UseExamplePc = () => {
  useExampleBase();
  return {
    foo: "pc",
    bar: "--",
  };
};

type UseExampleSp = () => type.ComponentPropsForSp;
export const useExampleSp: UseExampleSp = () => {
  useExampleBase();
  return {
    foo: "sp",
    baz: "--",
  };
};

export const useExampleContainer = (): type.ContainerProps => {
  const hoge = "~~";

  return {
    hoge,
  };
};
