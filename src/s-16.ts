// Halting Execution at the First Error
import { Console, Effect } from "effect"

const task1 = Console.log("task1...")
const task2 = Console.log("task2...")
const failure = Effect.fail("Something went wrong!")
const task4 = Console.log("task4...")

const program = Effect.gen(function*() {
  yield* task1
  yield* task2
  // The program stops here due to the error
  yield* failure
  // The following lines never run
  yield* task4
  return "some result"
})

Effect.runPromise(program).then(console.log, console.error)
/*
Output:
task1...
task2...
(FiberFailure) Error: Something went wrong!
*/
