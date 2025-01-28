// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, "a", 2, "b", 2, "a"]>, [1, "a", 2, "b"]>>,
  Expect<
    Equal<
      Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>,
      [string, number, 1, "a", 2, "b"]
    >
  >,
  Expect<
    Equal<
      Unique<[unknown, unknown, any, any, never, never]>,
      [unknown, any, never]
    >
  >
];

// ============= Your Code Here =============
type IsEqual<A, B> = (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B
  ? 1
  : 2
  ? true
  : false;

type HasSeen<T, Seen extends any[]> = Seen extends [infer Head, ...infer Tail]
  ? IsEqual<T, Head> extends true
    ? true
    : HasSeen<T, Tail>
  : false;

type Unique<T extends any[], Seen extends any[] = []> = T extends [
  infer Head,
  ...infer Tail
]
  ? HasSeen<Head, Seen> extends true
    ? Unique<Tail, Seen>
    : [Head, ...Unique<Tail, [...Seen, Head]>]
  : [];

type X1 = Unique<[1, "a", 2, "b", 2, "a"]>;
type X2 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>;
