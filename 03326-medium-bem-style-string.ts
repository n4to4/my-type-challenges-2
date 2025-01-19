// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
  Expect<
    Equal<
      BEM<"btn", ["price"], ["warning", "success"]>,
      "btn__price--warning" | "btn__price--success"
    >
  >,
  Expect<
    Equal<
      BEM<"btn", [], ["small", "medium", "large"]>,
      "btn--small" | "btn--medium" | "btn--large"
    >
  >
];

// ============= Your Code Here =============
type BEM1<
  B extends string,
  E extends string[],
  M extends string[]
> = E extends []
  ? `${B}--${M[number]}`
  : M extends []
  ? `${B}__${E[number]}`
  : `${B}__${E[number]}--${M[number]}`;

type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${E extends [] ? "" : `__${E[number]}`}${M extends []
  ? ""
  : `--${M[number]}`}`;

type X1 = BEM<"btn", ["price"], []>;
type X2 = BEM<"btn", ["price"], ["warning", "success"]>;
type X3 = BEM<"btn", [], ["small", "medium", "large"]>;
type X4 = BEM<"btn", [], []>;
