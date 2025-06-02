import { Effect } from "effect"

// Running a Successful Effect as a Promise
Effect.runPromise(Effect.succeed(1)).then(console.log) // Output: 1

// Handling a Failing Effect as a Rejected Promise
Effect.runPromise(Effect.fail("my error")).catch(console.error)
/*
Output:
(FiberFailure) Error: my error
*/

Effect.runPromiseExit(Effect.succeed(1)).then(console.log)
/*
Output:
{
  _id: "Exit",
  _tag: "Success",
  value: 1
}
*/

Effect.runPromiseExit(Effect.fail("my error")).then(console.log)
/*
Output:
{
  _id: "Exit",
  _tag: "Failure",
  cause: {
    _id: "Cause",
    _tag: "Fail",
    failure: "my error"
  }
}
*/
