/* eslint-disable */
// @ts-nocheck

import { Data, Effect } from "effect"

Effect.runPromise(Effect.log("Hello, World!"))

const success = Effect.succeed(42)

const failure = Effect.fail(new Error("Operation failed due to network error"))

class HttpError extends Data.TaggedError("HttpError") {}
const program = Effect.fail(new HttpError())

const divide = (a: number, b: number): Effect.Effect<number, Error> =>
  b === 0 ? Effect.fail(new Error("Cannot divide by zero")) : Effect.succeed(a / b)
