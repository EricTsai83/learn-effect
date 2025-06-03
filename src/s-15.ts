// How to Raise Errors
import { Console, Effect } from "effect"

const task1 = Console.log("task1...")
const task2 = Console.log("task2...")

const program = Effect.gen(function*() {
  // Perform some tasks
  yield* task1
  yield* task2
  // Introduce an error
  yield* Effect.fail("Something went wrong!")
})

Effect.runPromise(program).then(console.log, console.error)
/*
Output:
task1...
task2...
(FiberFailure) Error: Something went wrong!
*/
