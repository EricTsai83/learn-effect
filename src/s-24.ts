import { Effect, Option, pipe } from "effect"

// Simulated asynchronous task fetching a number from a database
const fetchNumberValue = Effect.tryPromise(() => Promise.resolve(42))

//      ┌─── Effect<number, UnknownException | NoSuchElementException, never>
//      ▼
const _program = pipe(
  fetchNumberValue,
  Effect.andThen((x) => (x > 0 ? Option.some(x) : Option.none()))
)

// A value of type Option<A> is interpreted as an effect of type Effect<A, NoSuchElementException>.
