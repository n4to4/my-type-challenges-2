// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<ParseUrlParams<"">, never>>,
  Expect<Equal<ParseUrlParams<":id">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id/">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id/:user">, "id" | "user">>,
  Expect<Equal<ParseUrlParams<"posts/:id/:user/like">, "id" | "user">>
];

// ============= Your Code Here =============
type Split<T extends string> = T extends `${infer Head}/${infer Rest}`
  ? Head | Split<Rest>
  : T;

type ParseUrlParams<T extends string, S = Split<T>> = T extends ""
  ? never
  : S extends `:${infer P}`
  ? P
  : never;

type X0 = Split<"posts/:id/:user">;
type X1 = Split<"">;
type X2 = ParseUrlParams<"posts/:id/:user">;
