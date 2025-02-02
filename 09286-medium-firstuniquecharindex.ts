// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<FirstUniqueCharIndex<"leetcode">, 0>>,
  Expect<Equal<FirstUniqueCharIndex<"loveleetcode">, 2>>,
  Expect<Equal<FirstUniqueCharIndex<"aabb">, -1>>,
  Expect<Equal<FirstUniqueCharIndex<"">, -1>>,
  Expect<Equal<FirstUniqueCharIndex<"aaa">, -1>>
];

// ============= Your Code Here =============
// type Repeating<
//   T extends string,
//   Rest extends string,
//   Seen,
//   SeenStatus = T extends Seen ? true : false,
//   Repeating = Rest extends `${string}${T}${string}` ? true : false
// > = SeenStatus extends true ? (Repeating extends true ? true : false) : false;

// type FirstUniqueCharIndex<
//   T extends string,
//   Idx extends any[] = [],
//   Seen = never
// > = T extends `${infer First}${infer Rest}`
//   ? Repeating<First, Rest, Seen> extends true
//     ? FirstUniqueCharIndex<Rest, [...Idx, any], Seen | First>
//     : Idx["length"]
//   : -1;

type FirstUniqueCharIndex<
  T extends string,
  _Acc extends string[] = []
> = T extends ""
  ? -1
  : T extends `${infer Head}${infer Rest}`
  ? Head extends _Acc[number]
    ? FirstUniqueCharIndex<Rest, [..._Acc, Head]>
    : Rest extends `${string}${Head}${string}`
    ? FirstUniqueCharIndex<Rest, [..._Acc, Head]>
    : _Acc["length"]
  : never;

type X1 = FirstUniqueCharIndex<"aabb">;
