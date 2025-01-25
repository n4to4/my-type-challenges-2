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
type Fill1<
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
      ? [Head, ...Fill1<Tail, N, Start, End, [...Idx, any], false>]
      : [N, ...Fill1<Tail, N, Start, End, [...Idx, any], true>]
    : Idx["length"] extends Start
    ? Fill1<T, N, Start, End, Idx, true>
    : [Head, ...Fill1<Tail, N, Start, End, [...Idx, any], false>]
  : [];

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  Idx extends unknown[] = [],
  Filling extends boolean = Idx["length"] extends Start ? true : false
> = Idx["length"] extends End
  ? T
  : T extends [infer H, ...infer Tail]
  ? Filling extends true
    ? [N, ...Fill<Tail, N, Start, End, [...Idx, any], true>]
    : [H, ...Fill<Tail, N, Start, End, [...Idx, any]>]
  : [];
