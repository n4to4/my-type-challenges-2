// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>,
  Expect<
    Equal<
      ObjectEntries<{ key: string | undefined }>,
      ["key", string | undefined]
    >
  >
];

// ============= Your Code Here =============
type ObjectEntries1<T, U = Required<T>> = {
  [k in keyof U]: [
    k,
    [U[k]] extends [never] ? (k extends keyof T ? T[k] : never) : U[k]
  ];
}[keyof U];

type ObjectEntries<T, U = Required<T>> = {
  [K in keyof U]: [K, U[K] extends never ? undefined : U[K]];
}[keyof U];

type X1 = ObjectEntries<Model>;
type X2 = ObjectEntries<Partial<Model>>;
type X3 = ObjectEntries<{ key?: undefined }>;
type X4 = Required<{ key?: undefined }>;
type R1 = Equal<X1, "name" | "age" | "locations">;
