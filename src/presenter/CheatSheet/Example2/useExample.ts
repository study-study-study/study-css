import React from "react";
import type { ContainerProps } from "./type";

type UseExamplePc = () => {
  foo: string;
  bar: string;
};

type UseExampleSp = () => {
  foo: string;
  baz: string;
};

export const useExamplePc: UseExamplePc = () => {
  return {
    foo: "pc",
    bar: "--",
  };
};

export const useExampleSp: UseExampleSp = () => {
  return {
    foo: "sp",
    baz: "--",
  };
};

export const useExampleContainer = (): ContainerProps => {
  const hoge = "base";

  return {
    hoge,
  };
};
