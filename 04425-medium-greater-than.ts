// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>
];

// ============= Your Code Here =============
type GreaterThan1<T extends number, U extends number> = T extends U
  ? false
  : GTHelper<T, U>;
type GTHelper<
  T extends number,
  U extends number,
  TI extends any[] = [],
  UI extends any[] = []
> = TI["length"] extends T
  ? false
  : UI["length"] extends U
  ? true
  : GTHelper<T, U, [...TI, 0], [...UI, 0]>;

type ParseInt<T> = T extends `${infer X extends number}` ? X : never;

type RemoveLeadingZeros<T extends string> = T extends "0"
  ? T
  : T extends `${0}${infer Rest}`
  ? RemoveLeadingZeros<Rest>
  : T;

type InnerMinusOne<T extends string> =
  T extends `${infer X extends number}${infer Y}`
    ? X extends 0
      ? `9${InnerMinusOne<Y>}`
      : `${[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8][X]}${Y}`
    : "";

type Reverse<T extends string> = T extends `${infer X}${infer Y}`
  ? `${Reverse<Y>}${X}`
  : "";

type MinusOne<T extends number> = ParseInt<
  RemoveLeadingZeros<Reverse<InnerMinusOne<Reverse<`${T}`>>>>
>;

type InnerGreaterThan<T extends number, U extends number> = T extends U
  ? true
  : T extends 0
  ? false
  : InnerGreaterThan<MinusOne<T>, U>;

type GreaterThan<T extends number, U extends number> = T extends U
  ? false
  : U extends 0
  ? true
  : InnerGreaterThan<T, U>;
