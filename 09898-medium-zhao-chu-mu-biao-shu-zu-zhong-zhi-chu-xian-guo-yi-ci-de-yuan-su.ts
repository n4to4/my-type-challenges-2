// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>
];

// ============= Your Code Here =============
type FindEles<T extends any[], Duplicates = never> = T extends [
  infer F,
  ...infer R
]
  ? F extends Duplicates
    ? FindEles<R, Duplicates>
    : F extends R[number]
    ? FindEles<R, Duplicates | F>
    : [F, ...FindEles<R, Duplicates>]
  : [];
