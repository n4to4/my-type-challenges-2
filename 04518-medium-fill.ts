// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>
];

// ============= Your Code Here =============
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  Idx extends unknown[] = [],
  Filling extends boolean = false
> = Start extends End
  ? T
  : T extends [infer Head, ...infer Tail]
  ? Filling extends true
    ? Idx["length"] extends End
      ? [Head, ...Fill<Tail, N, Start, End, [...Idx, any], false>]
      : [N, ...Fill<Tail, N, Start, End, [...Idx, any], true>]
    : Idx["length"] extends Start
    ? Fill<T, N, Start, End, Idx, true>
    : [Head, ...Fill<Tail, N, Start, End, [...Idx, any], false>]
  : [];
