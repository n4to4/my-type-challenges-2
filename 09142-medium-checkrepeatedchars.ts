// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

type cases = [
  Expect<Equal<CheckRepeatedChars<"abc">, false>>,
  Expect<Equal<CheckRepeatedChars<"abb">, true>>,
  Expect<Equal<CheckRepeatedChars<"cbc">, true>>,
  Expect<Equal<CheckRepeatedChars<"">, false>>
];

// ============= Your Code Here =============
type CheckRepeatedChars<
  T extends string,
  Seen = never
> = T extends `${infer First}${infer Rest}`
  ? First extends Seen
    ? true
    : CheckRepeatedChars<Rest, Seen | First>
  : false;
