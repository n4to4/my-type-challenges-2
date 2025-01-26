// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Trunc<0.1>, "0">>,
  Expect<Equal<Trunc<0.2>, "0">>,
  Expect<Equal<Trunc<1.234>, "1">>,
  Expect<Equal<Trunc<12.345>, "12">>,
  Expect<Equal<Trunc<-5.1>, "-5">>,
  Expect<Equal<Trunc<".3">, "0">>,
  Expect<Equal<Trunc<"1.234">, "1">>,
  Expect<Equal<Trunc<"-10.234">, "-10">>,
  Expect<Equal<Trunc<10>, "10">>
];

// ============= Your Code Here =============
type Trunc<T extends number | string> = `${T}` extends `.${infer N0}`
  ? Trunc<`0.${N0}`>
  : `${T}` extends `${infer N1 extends number}.${number}`
  ? `${N1}`
  : `${T}`;

type X0 = Trunc<0.1>;
type X1 = Trunc<-5.1>;
