// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

// @ts-expect-error
type error = If<null, "a", "b">;

// ============= Your Code Here =============
type If<C extends boolean, T, F> = C extends true ? T : F;

type X1 = If<never, 1, 2>;
type X2 = never extends boolean ? 1 : 2;
