// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];

// ============= Your Code Here =============
/*
type Upper = StringToUnion<"ABCDEFGHIJKLMNOPQRSTUVWXYZ">;
type StringToUnion<T extends string> = T extends `${infer Head}${infer Tail}`
  ? Head | StringToUnion<Tail>
  : never;
type KebabCase<
  T extends string,
  First extends boolean = true
> = T extends `${infer Head1 extends Upper}${infer Tail1}`
  ? `${First extends true ? "" : "-"}${Lowercase<Head1>}${KebabCase<
      Tail1,
      false
    >}`
  : T extends `${infer Head1}${infer Tail2}`
  ? `${Head1}${KebabCase<Tail2, false>}`
  : "";
*/

type KebabCase<S extends string> = S extends `${infer S1}${infer S2}`
  ? S2 extends Uncapitalize<S2>
    ? `${Uncapitalize<S1>}${KebabCase<S2>}`
    : `${Uncapitalize<S1>}-${KebabCase<S2>}`
  : S;

type X1 = KebabCase<"AbcFooBar">;
type X2 = Uncapitalize<"ABCDEF">;
