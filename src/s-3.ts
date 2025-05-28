// eslint-disable
// @ts-nocheck

import { Effect } from "effect"

const parse = (input: string) =>
  // This might throw an error if input is not valid JSON
  Effect.try(() => JSON.parse(input))

//      ┌─── Effect<any, UnknownException, never>
//      ▼
const _program = parse("")

// Customizing Error Handling
const parse2 = (input: string) =>
  Effect.try({
    // JSON.parse may throw for bad input
    try: () => JSON.parse(input),
    // remap the error
    catch: (unknown) => new Error(`something went wrong ${unknown}`)
  })

//      ┌─── Effect<any, Error, never>
//      ▼
const _program = parse2("")
