// with Either
import { Effect, Either, pipe } from "effect"

// Function to parse an integer from a string that can fail
const parseInteger = (input: string): Either.Either<number, string> =>
  isNaN(parseInt(input))
    ? Either.left("Invalid integer")
    : Either.right(parseInt(input))

// Simulated asynchronous task fetching a string from database
const fetchStringValue = Effect.tryPromise(() => Promise.resolve("42"))

//      ┌─── Effect<number, string | UnknownException, never>
//      ▼
const _program = pipe(
  fetchStringValue,
  Effect.andThen((str) => parseInteger(str))
)
