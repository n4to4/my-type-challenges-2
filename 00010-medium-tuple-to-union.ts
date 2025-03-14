// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];

// ============= Your Code Here =============
//type TupleToUnion<T extends readonly any[]> = T[number];
type TupleToUnion<T> = T extends Array<infer E> ? E : never;

type X1 = TupleToUnion<[123, "456", true]>;
