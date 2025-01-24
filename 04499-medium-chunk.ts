// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>
];

// ============= Your Code Here =============
type Chunk<
  T extends any[],
  N extends number,
  Acc extends any[] = [],
  R extends any[] = []
> = Acc["length"] extends N
  ? Chunk<T, N, [], [...R, Acc]>
  : T extends [infer Head, ...infer Tail]
  ? Chunk<Tail, N, [...Acc, Head], R>
  : Acc extends []
  ? R
  : [...R, Acc];

type X1 = Chunk<[1, 2, 3], 1>;
