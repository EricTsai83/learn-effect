// Running an Effect in the Background
import { Console, Effect, Fiber, Schedule } from "effect"

//      ┌─── Effect<number, never, never>
//      ▼
const program = Effect.repeat(
  Console.log("running..."),
  Schedule.spaced("200 millis")
)

//      ┌─── RuntimeFiber<number, never>
//      ▼
const fiber = Effect.runFork(program)

setTimeout(() => {
  Effect.runFork(Fiber.interrupt(fiber))
}, 500)
