// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<TrimRight<"str">, "str">>,
  Expect<Equal<TrimRight<"str ">, "str">>,
  Expect<Equal<TrimRight<"str     ">, "str">>,
  Expect<Equal<TrimRight<"     str     ">, "     str">>,
  Expect<Equal<TrimRight<"   foo bar  \n\t ">, "   foo bar">>,
  Expect<Equal<TrimRight<"">, "">>,
  Expect<Equal<TrimRight<"\n\t ">, "">>
];

// ============= Your Code Here =============
type TrimRight<T extends string> = T extends `${infer Rest}${" " | "\t" | "\n"}`
  ? TrimRight<Rest>
  : T;
