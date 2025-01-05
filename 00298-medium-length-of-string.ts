// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];

// ============= Your Code Here =============
type LengthOfString<
  S extends string,
  Idx extends any[] = []
> = S extends `${string}${infer Rest extends string}`
  ? LengthOfString<Rest, [...Idx, any]>
  : Idx["length"];

type X1 = LengthOfString<"">;
