// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type test1 = {
  key: "cat";
  value: "green";
};

type testExpect1 = {
  key: "cat";
  value: "green";
  home: boolean;
};

type test2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
};

type testExpect2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
  home: 1;
};

type test3 = {
  key: "cow";
  value: "yellow";
  sun: false;
};

type testExpect3 = {
  key: "cow";
  value: "yellow";
  sun: false;
  moon: false | undefined;
};

type cases = [
  Expect<Equal<AppendToObject<test1, "home", boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, "home", 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, "moon", false | undefined>, testExpect3>>
];

// ============= Your Code Here =============
type AppendToObject1<T, U extends PropertyKey, V> = Omit<
  T & {
    [k in U]: V;
  },
  never
>;

type Flatten<T> = { [k in keyof T]: T[k] };
type AppendToObject<T, U extends PropertyKey, V> = Flatten<
  T & {
    [k in U]: V;
  }
>;

type X1 = AppendToObject<test1, "home", boolean>;
