// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>
];

// ============= Your Code Here =============
type Fibonacci<T extends number> = T extends 1 | 2
  ? 1
  : FibHelper<T, [any, any, any], [any], [any]>;
type FibHelper<
  T extends number,
  Idx extends any[],
  Prev2 extends any[],
  Prev1 extends any[]
> = Idx["length"] extends T
  ? [...Prev2, ...Prev1]["length"]
  : FibHelper<T, [...Idx, any], Prev1, [...Prev2, ...Prev1]>;

type X1 = Fibonacci<5>;
