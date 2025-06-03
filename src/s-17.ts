// Type Narrowing without Explicit Return
import { Effect } from "effect"

type User = {
  readonly name: string
}

// Imagine this function checks a database or an external service
declare function getUserById(id: string): Effect.Effect<User | undefined>

// Type Narrowing with Explicit Return
function _greetUser(id: string) {
  return Effect.gen(function*() {
    const user = yield* getUserById(id)

    if (user === undefined) {
      // Explicitly return after failing
      return yield* Effect.fail(`User with id ${id} not found`)
    }

    // Now TypeScript knows that 'user' is not undefined
    return `Hello, ${user.name}!`
  })
}
