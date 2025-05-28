// eslint-disable
// @ts-nocheck

import { Effect } from "effect"
import * as NodeFS from "node:fs"

const readFile = (filename: string) =>
  Effect.async<Buffer, Error>((resume) => {
    NodeFS.readFile(filename, (error, data) => {
      if (error) {
        // Resume with a failed Effect if an error occurs
        resume(Effect.fail(error))
      } else {
        // Resume with a succeeded Effect if successful
        resume(Effect.succeed(data))
      }
    })
  })

//      ┌─── Effect<Buffer, Error, never>
//      ▼
const _program = readFile("example.txt")

const _program2 = Effect.async<number>((resume) => {
  resume(Effect.succeed(1))
  resume(Effect.succeed(2)) // This line will be ignored
})

// Run the program
Effect.runPromise(_program2).then(console.log) // Output: 1
