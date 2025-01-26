// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];

// ============= Your Code Here =============
type ToUnion<T extends unknown> = T extends unknown[] ? T[number] : T;

type Without<
  T extends unknown[],
  U extends unknown,
  UUnion = ToUnion<U>
> = T extends [infer Head, ...infer Rest]
  ? Head extends UUnion
    ? Without<Rest, U>
    : [Head, ...Without<Rest, U>]
  : [];
