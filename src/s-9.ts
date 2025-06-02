import { Effect } from "effect"

/*
  Without suspend, TypeScript may struggle with type inference.

  Inferred type:
    (a: number, b: number) =>
      Effect<never, Error, never> | Effect<number, never, never>
*/
const _withoutSuspend = (a: number, b: number) =>
  b === 0
    ? Effect.fail(new Error("Cannot divide by zero"))
    : Effect.succeed(a / b)

/*
  Using suspend to unify return types.

  Inferred type:
    (a: number, b: number) => Effect<number, Error, never>
*/
const _withSuspend = (a: number, b: number) =>
  Effect.suspend(() =>
    b === 0
      ? Effect.fail(new Error("Cannot divide by zero"))
      : Effect.succeed(a / b)
  )
