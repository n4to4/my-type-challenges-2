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

type FlattenDepth1<
  T extends any[],
  Depth extends number = 1,
  D extends any[] = []
> = LengthMinusOneEqual<D, Depth> extends true
  ? T
  : T extends [infer Head, ...infer Tail]
  ? Head extends any[]
    ? [
        ...FlattenDepth1<Head, Depth, [...D, any]>,
        ...FlattenDepth1<Tail, Depth, [...D, any]>
      ]
    : [Head, ...FlattenDepth1<Tail, Depth, D>]
  : [];

type FlattenDepth<
  T extends any[],
  S extends number = 1,
  U extends any[] = []
> = U["length"] extends S
  ? T
  : T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...FlattenDepth<F, S, [...U, 1]>, ...FlattenDepth<R, S, U>]
    : [F, ...FlattenDepth<R, S, U>]
  : T;

type X1 = FlattenDepth<[1, [2]]>;
type X2 = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>;
type X3 = FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>;
type X4 = FlattenDepth<[1, [2, [3]]], 1>;
