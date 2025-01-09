// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<
    Equal<AnyOf<[1, "test", true, [1], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[1, "", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "test", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { 1: "test" }]>, true>>,
  Expect<
    Equal<AnyOf<[0, "", false, [], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[0, "", false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>
];

// ============= Your Code Here =============
type Falsy = 0 | "" | false | undefined | null | [];
type AnyOf1<T extends readonly any[]> = T extends [infer Head, ...infer Tail]
  ? Head extends Falsy
    ? AnyOf1<Tail>
    : keyof Head extends never
    ? AnyOf1<Tail>
    : true
  : false;

type AnyOf<T extends readonly any[]> = T[number] extends
  | Falsy
  | { [key: string]: never }
  ? false
  : true;

type X1 = AnyOf<[0, "", false, {}, undefined, null]>;
type EmptyObject<T> = keyof T extends never ? 1 : 2;
type X2 = EmptyObject<{}>;
type X3 = EmptyObject<{ key: 42 }>;
