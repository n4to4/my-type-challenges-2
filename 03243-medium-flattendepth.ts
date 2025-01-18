// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<
    Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>
  >
];

// ============= Your Code Here =============
type LengthMinusOneEqual<T extends any[], Depth extends number> = T extends [
  any,
  ...infer L
]
  ? L["length"] extends Depth
    ? true
    : false
  : false;

type FlattenDepth<
  T extends any[],
  Depth extends number = 1,
  D extends any[] = []
> = LengthMinusOneEqual<D, Depth> extends true
  ? T
  : T extends [infer Head, ...infer Tail]
  ? Head extends any[]
    ? [
        ...FlattenDepth<Head, Depth, [...D, any]>,
        ...FlattenDepth<Tail, Depth, [...D, any]>
      ]
    : [Head, ...FlattenDepth<Tail, Depth, D>]
  : [];

type X1 = FlattenDepth<[1, [2]]>;
type X2 = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>;
type X3 = FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>;
type X4 = FlattenDepth<[1, [2, [3]]], 1>;
