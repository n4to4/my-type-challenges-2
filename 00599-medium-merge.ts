// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >
];

// ============= Your Code Here =============
type Merge<F, S> = Omit<Omit<F, keyof S> & S, never>;

type X1 = Merge<Foo, Bar>;
