// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<["a", "b", "c"], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
];

// ============= Your Code Here =============
type TupleToNestedObject<T extends readonly string[], U> = T extends [
  infer Head extends string,
  ...infer Tail extends string[]
]
  ? { [k in Head]: TupleToNestedObject<Tail, U> }
  : U;

type X1 = TupleToNestedObject<["a", "b", "c"], boolean>;
