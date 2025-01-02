// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>
];

// ============= Your Code Here =============
/*
declare function PromiseAll<T extends any[]>(values: T): ResolvePromises<T>;

type ResolvePromises<T extends any[], U extends any[] = []> = T extends [
  infer Head,
  ...infer Tail
]
  ? Head extends PromiseLike<infer A>
    ? ResolvePromises<Tail, [...U, A]>
    : ResolvePromises<Tail, [...U, Head]>
  : Promise<U>;

const p = Promise.resolve(3);
type X1 = typeof p;
type X2 = X1 extends PromiseLike<any> ? 1 : 2;

type X3 = ResolvePromises<[1, 2, Promise<number>]>;
*/

type Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T;

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [P in keyof T]: Awaited<T[P]>;
}>;
